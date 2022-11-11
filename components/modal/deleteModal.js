import styles from "./Modal.module.scss";
import ModalWrapper from "./modalWrapper";
import Form from "../form/index";
import Button from "../buttons/index";

const DeleteModal = () => {
  return (
    <ModalWrapper
      title="Are you sure?"
      children={
        <>
          <Form type="password" placeholder="******************" />
          <div className={styles.buttonWrapper}>
            <Button type="delete" label="Delete" />
            <Button type="cancel" label="Cancel" />
          </div>
        </>
      }
    />
  );
};

export default DeleteModal;
