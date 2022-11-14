import styles from "../styles/Home.module.scss";
import ImageCard from "../components/image/index";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Header from "../components/header/index";
import { useDispatch, useSelector } from "react-redux";
import AddImageModal from "../components/modal/addImageModal";
import { displayDeleteModal } from "../store/actions";
import DeleteModal from "../components/modal/deleteModal";
import bodyScrollLock from "../scrollUtils.js";

export default function Home() {
  const dispatch = useDispatch();
  const isShownAddModal = useSelector((state) => state.displayAddModal);
  const isShownDeleteModal = useSelector((state) => state.displayDeleteModal);
  const images = useSelector((state) => state.images);
  return (
    <div className={styles.main}>
      <Header />
      {isShownAddModal && <AddImageModal />}
      {isShownDeleteModal && <DeleteModal />}
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
    </div>
  );
}
