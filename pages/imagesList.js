import React, { useEffect, Suspense, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
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

const ImagesList = ({ getImages, setId }) => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className={styles.imagesWrapper}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry columnsCount={3} gutter={"46.5px"}>
          {images.length > 0 &&
            images
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
