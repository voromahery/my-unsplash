import React, { useEffect, Suspense } from "react";
import { connect, useDispatch } from "react-redux";
import dynamic from "next/dynamic";

const Masonry = dynamic(() => import("react-responsive-masonry").then((m) => m.default), { ssr: false });
const ResponsiveMasonry = dynamic(() => import("react-responsive-masonry").then((m) => m.ResponsiveMasonry), { ssr: false });
import ImageCard from "../components/image/index.js";
import bodyScrollLock from "../scrollUtils.js";
import { displayDeleteModal, getImages } from "../store/actions/index.js";
import styles from "../styles/Home.module.scss";

const mapStateToProps = (state) => {
  return {
    images: state.images,
  };
};

const mapDispatchToProps = {
  getImages,
};

const ImagesList = ({ getImages, setId, images, searchQuery }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getImages();
  }, []);

  const filteredImages = searchQuery
    ? images.filter((img) => img?.label?.toLowerCase().includes(searchQuery.toLowerCase()))
    : images;

  return (
    <div className={styles.imagesWrapper}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
      >
        <Masonry columnsCount={3} gutter={"46.5px"}>
          {filteredImages.length > 0 &&
            filteredImages
              .sort((a, b) => b.timestamp - a.timestamp)
              .map((image, i) => (
                <Suspense key={i} fallback={<h1>Loading</h1>}>
                  <ImageCard
                    key={i}
                    imgUrl={image?.url}
                    label={image?.label}
                    action={() => {
                      dispatch(displayDeleteModal(true));
                      bodyScrollLock.enable();
                      setId(image?.id);
                    }}
                  />
                </Suspense>
              ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ImagesList);
