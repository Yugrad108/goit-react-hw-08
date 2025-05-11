import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to your Phonebook</h1>
      <p className={styles.script}>Please sign up or log in to continue </p>
    </div>
  );
};

export default HomePage;
