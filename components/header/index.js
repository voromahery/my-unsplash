import styles from "./Header.module.scss";
import Button from "../buttons/index";
import { useDispatch } from "react-redux";
import { displayAddModal } from "../../store/actions/index";
import bodyScrollLock from "../../scrollUtils.js";

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
          action={() => {
            dispatch(displayAddModal(true));
            bodyScrollLock.enable();
          }}
        />
      </div>
    </header>
  );
};
export default Header;
