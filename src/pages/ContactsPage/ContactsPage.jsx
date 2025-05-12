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
import { useMediaQuery } from "react-responsive";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loading = useSelector(selectIsLoading);
  const tablet = useMediaQuery({ maxWidth: 1200 });

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.contactFormContainer}>
      {tablet && <p className={styles.name}>Welcome, {user.name}</p>}
      <ContactForm />
      <SearchBox />
      {loading && <Loader loading={loading} />}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
