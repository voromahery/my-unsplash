import styles from "./Header.module.scss";
import Button from "../buttons/index";
import { useDispatch } from "react-redux";
import { displayModal } from "../../store/actions/index";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <a className={styles.link} href="#">
          My Unsplash
        </a>
      </h1>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Search by name"
          className={styles.input}
        />
        <Button
          label="Add a photo"
          type="default"
          action={() => dispatch(displayModal(true))}
        />
      </div>
    </header>
  );
};
export default Header;
