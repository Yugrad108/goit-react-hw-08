import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import styles from "./ContactsPage.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectUser } from "../../redux/auth/selectors";
import { selectIsLoading } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.contactFormContainer}>
      <p className={styles.name}>Welcome, {user.name}</p>
      <ContactForm />
      <SearchBox />
      {loading && <Loader loading={loading} />}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
