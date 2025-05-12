import { useDispatch, useSelector } from "react-redux";
import styles from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { useMediaQuery } from "react-responsive";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const tablet = useMediaQuery({ maxWidth: 1200 });

  return (
    <div className={styles.userMenuContainer}>
      {!tablet && <p className={styles.name}>Welcome, {user.name}</p>}
      <button
        onClick={() => dispatch(logout())}
        type="button"
        className={styles.logOutBtn}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
