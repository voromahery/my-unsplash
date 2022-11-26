import React, {useState} from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Home.module.scss";
import Header from "../components/header/index";
import AddImageModal from "../components/modal/addImageModal";
import DeleteModal from "../components/modal/deleteModal";
import ImagesList from "./imagesList";

export default function Home() {
  const [id, setId] = useState("");
  const isShownAddModal = useSelector((state) => state.displayAddModal);
  const isShownDeleteModal = useSelector((state) => state.displayDeleteModal);

  return (
    <div className={styles.main}>
      <Header />
      <ImagesList setId={setId} />
      {isShownAddModal && <AddImageModal />}
      {isShownDeleteModal && <DeleteModal id={id} setId={setId} />}
    </div>
  );
}
