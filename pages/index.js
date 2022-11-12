import styles from "../styles/Home.module.scss";
import ImageCard from "../components/image/index";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Header from "../components/header/index";
import { useSelector } from "react-redux";
import AddImageModal from "../components/modal/addImageModal";

export default function Home() {
  const isShownAddModal = useSelector((state) => state.displayModal);
  console.log("isShownAddModal::::::", isShownAddModal);
  return (
    <div className={styles.main}>
      <Header />
      {isShownAddModal && <AddImageModal />}
      <div className={styles.imagesWrapper}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter={"46.5px"}>
            <ImageCard />
            <ImageCard imgUrl="https://wallpaperaccess.com/full/41757.jpg" />
            <ImageCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5YTZTiJIB_gpn46_KP-SEftM7P5wGiRNkhKs6hkWn&s" />
            <ImageCard imgUrl="https://images2.alphacoders.com/100/1008472.png" />
            <ImageCard imgUrl="https://c4.wallpaperflare.com/wallpaper/617/713/266/tokyo-revengers-manga-hd-wallpaper-preview.jpg" />
            <ImageCard imgUrl="https://www.enjpg.com/img/2020/chainsaw-man-29.jpg" />
            <ImageCard imgUrl="https://i.pinimg.com/originals/da/ce/28/dace28adf1cc40de1fd125baf304e7e3.jpg" />
            <ImageCard imgUrl="https://i.pinimg.com/originals/26/41/98/26419821867d7234bc0b8d61e4f71a42.png" />
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}
