import styles from "./Modal.module.scss";
import ModalWrapper from "./modalWrapper";
import Form from "../form/index";
import Button from "../buttons/index";
import { useDispatch } from 'react-redux';
import { displayModal } from '../../store/actions/index';

const DeleteModal = () => {
  const dispatch = useDispatch()
  return (
    <ModalWrapper
      title="Are you sure?"
      children={
        <>
          <Form type="password" placeholder="******************" />
          <div className={styles.buttonWrapper}>
            <Button type="delete" label="Delete" />
            <Button type="cancel" label="Cancel" action={() => dispatch(displayModal(false))} />
          </div>
        </>
      }
    />
  );
};

export default DeleteModal;
