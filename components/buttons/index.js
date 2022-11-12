import styles from "./Button.module.scss";

const Button = ({ label, type, action }) => {
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
      {label}
    </button>
  );
};

export default Button;
