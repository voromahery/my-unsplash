import styles from "./Form.module.scss";

const Form = ({
  type = "text",
  action,
  label = "Test",
  placeholder = "test",
}) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        type={type}
        onChange={action}
        placeholder={placeholder}
        className={styles.form}
      />
    </label>
  );
};

export default Form;
