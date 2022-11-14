import styles from "./Image.module.scss";

const ImageCard = ({ label, imgUrl, action }) => {
  return (
    imgUrl && (
      <div className={styles.wrapper}>
        <div className={styles.mask}>
          <button className={styles.button} onClick={action}>
            Delete
          </button>
          <h3 className={styles.label}>{label}</h3>
        </div>
        <img src={imgUrl} alt={label} className={styles.image} loading="lazy" />
      </div>
    )
  );
};

export default ImageCard;
