import React, { useState } from "react";
import styles from "./Modal.module.scss";
import ModalWrapper from "./modalWrapper";
import Form from "../form/index";
import Button from "../buttons/index";
import { useDispatch } from "react-redux";
import { displayAddModal } from "../../store/actions/index";
import bodyScrollLock from "../../scrollUtils.js";
import { addNewImage, db } from "../../firebase";
import { collection, doc } from "firebase/firestore";

const AddImageModal = () => {
  const [imageLabel, setImageLabel] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const timestamp = Date.now();
  const dispatch = useDispatch();

  const addImage = () => {
    if ((imageLabel, imageUrl)) {
      const usersRef = collection(db, "images"); // collectionRef
      const userRef = doc(usersRef); // docRef
      const id = userRef.id;
      addNewImage({ label: imageLabel, url: imageUrl, timestamp, id });
      setImageLabel("");
      setImageUrl("");
      dispatch(displayAddModal(false));
      bodyScrollLock.disable();
    }
  };

  return (
    <ModalWrapper
      title="Add a new photo"
      content={
        <>
          <Form
            placeholder="Add image name"
            label="Label"
            value={imageLabel}
            action={(e) => setImageLabel(e.target.value)}
          />
          <Form
            type="url"
            placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
            label="Photo URL"
            value={imageUrl}
            action={(e) => setImageUrl(e.target.value)}
          />
          <div className={styles.buttonWrapper}>
            <Button type="default" label="Submit" action={addImage} />
            <Button
              type="cancel"
              label="Cancel"
              action={() => {
                dispatch(displayAddModal(false));
                bodyScrollLock.disable();
              }}
            />
          </div>
        </>
      }
    />
  );
};

export default AddImageModal;
