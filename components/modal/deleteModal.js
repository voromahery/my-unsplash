import styles from "./Modal.module.scss";
import ModalWrapper from "./modalWrapper";
import Form from "../form/index";
import Button from "../buttons/index";
import { useDispatch } from "react-redux";
import bodyScrollLock from "../../scrollUtils.js";
import { displayDeleteModal } from "../../store/actions";
import { db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";

const DeleteModal = ({ id, setId }) => {
  const dispatch = useDispatch();

  const deleteImage = () => {
    const imageRef = doc(db, "images", id);
    deleteDoc(imageRef);
    dispatch(displayDeleteModal(false));
    setId("");
  };

  return (
    <ModalWrapper
      title="Are you sure?"
      content={
        <>
          <Form type="password" placeholder="******************" />
          <div className={styles.buttonWrapper}>
            <Button type="delete" label="Delete" action={deleteImage} />
            <Button
              type="cancel"
              label="Cancel"
              action={() => {
                dispatch(displayDeleteModal(false));
                bodyScrollLock.disable();
              }}
            />
          </div>
        </>
      }
    />
  );
};

export default DeleteModal;
