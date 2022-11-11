import styles from "./Button.module.scss";

const Button = ({ text, type, action = () => null }) => {
  return (
    <button
      className={`${styles.button} ${
        type === "default"
          ? styles.default
          : type === "cancel"
          ? styles.cancel
          : styles.delete
      }`}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
