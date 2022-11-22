import styles from "./Modal.module.scss";

const ModalWrapper = ({ title = "test", content }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default ModalWrapper;
