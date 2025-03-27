import { useSelector } from "react-redux";
import Contact from "./Contact";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items); 
  const filter = useSelector((state) => state.filters.name.toLowerCase()); 

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  ); 

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
