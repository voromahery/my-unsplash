import React, { useState } from "react";
import styles from "./Modal.module.scss";
import ModalWrapper from "./modalWrapper";
import Form from "../form/index";
import Button from "../buttons/index";
import { useDispatch } from "react-redux";
import { addNewImage, displayAddModal } from "../../store/actions/index";
import bodyScrollLock from "../../scrollUtils.js";

const AddImageModal = () => {
  const [imageLabel, setImageLabel] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();

  const addImage = (e) => {
    dispatch(
      addNewImage({
        label: imageLabel,
        url: imageUrl,
      })
    );
    setImageLabel("");
    setImageUrl("");
    dispatch(displayAddModal(false));
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
