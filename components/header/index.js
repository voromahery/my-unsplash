import styles from "./Header.module.scss";
import Button from "../buttons/index";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <a className={styles.link} href="#">
          My Unsplash
        </a>
      </h1>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Search by name"
          className={styles.input}
        />
        <Button text="Add a photo" type="default" />
      </form>
    </header>
  );
};
export default Header;
