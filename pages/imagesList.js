import React from "react";
import { useSelector } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageCard from "../components/image/index.js";
import bodyScrollLock from "../scrollUtils.js";
import { displayDeleteModal } from "../store/actions/index.js";
import styles from "../styles/Home.module.scss";

const ImagesList = () => {
  const images = useSelector((state) => state.images);
  return (
    <div className={styles.imagesWrapper}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry columnsCount={3} gutter={"46.5px"}>
          <ImageCard
            action={() => {
              dispatch(displayDeleteModal(true));
              bodyScrollLock.enable();
            }}
          />
          {images.length > 0 &&
            images.map((image, i) => (
              <ImageCard key={i} imgUrl={image?.url} label={image?.label} />
            ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ImagesList;
