import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ContactList from "./components/ContactList/ContactList/";
import { wrapper, title, innerwrapper } from "./App.module.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { fetchContacts } from "./redux/contactsOps";
import { selectIsLoading, selectError } from "./redux/contactsSelectors";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={wrapper}>
      <div className={innerwrapper}>
        <h1 className={title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </div>

      {isLoading && !error && <Loader />}
      {error && <ErrorMessage error={error} />}
      {!isLoading && !error && <ContactList />}
    </div>
  );
}

export default App;
