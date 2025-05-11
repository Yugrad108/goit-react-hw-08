import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={styles.regPageContainers}>
      <div className={styles.regTextContainer}>
        <h2 className={styles.regPageTitle}>Sign up</h2>
        <p className={styles.regPageDesc}>Quick and easy</p>
      </div>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
