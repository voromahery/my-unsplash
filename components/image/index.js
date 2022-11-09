import styles from "./Image.module.scss";

const ImageCard = ({
  label = "Mario",
  imgUrl = "https://i.pinimg.com/originals/a7/87/88/a78788d285a647701307d615d5d2a08b.jpg",
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mask}>
        <button className={styles.button}>Delete</button>
        <h3 className={styles.label}>{label}</h3>
      </div>
      <img src={imgUrl} alt={label} className={styles.image} loading="lazy" />
    </div>
  );
};

export default ImageCard;
