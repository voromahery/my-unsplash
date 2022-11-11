import styles from "./Modal.module.scss";
import ModalWrapper from "./modalWrapper";
import Form from "../form/index";
import Button from "../buttons/index";

const AddImageModal = () => {
  return (
    <ModalWrapper
      title="Add a new photo"
      children={
        <>
          <Form placeholder="Add image name" label="Label" />
          <Form
            placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
            label="Photo URL"
          />
          <div className={styles.buttonWrapper}>
            <Button type="default" label="Submit" />
            <Button type="cancel" label="Cancel" />
          </div>
        </>
      }
    />
  );
};

export default AddImageModal;