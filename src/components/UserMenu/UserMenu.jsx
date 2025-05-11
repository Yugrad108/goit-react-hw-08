import { useDispatch } from "react-redux";
import styles from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div>
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
