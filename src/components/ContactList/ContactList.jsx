import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { list, item } from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const items = useSelector(selectFilteredContacts);

  return (
    <ul className={list}>
      {items.map((contact) => (
        <li key={contact.id} className={item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
