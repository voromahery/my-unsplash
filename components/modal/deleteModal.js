import styles from "./Modal.module.scss";
import ModalWrapper from "./modalWrapper";
import Form from "../form/index";
import Button from "../buttons/index";
import { useDispatch } from "react-redux";
import bodyScrollLock from "../../scrollUtils.js";
import { displayDeleteModal } from "../../store/actions";

const DeleteModal = () => {
  const dispatch = useDispatch();
  return (
    <ModalWrapper
      title="Are you sure?"
      content={
        <>
          <Form type="password" placeholder="******************" />
          <div className={styles.buttonWrapper}>
            <Button type="delete" label="Delete" />
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
