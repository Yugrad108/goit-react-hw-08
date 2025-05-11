import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.logPageContainer}>
      <div className={styles.logTextContainer}>
        <h2 className={styles.logPageTitle}>Welcome!</h2>
        <p className={styles.logPageDesc}>Please log in</p>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
