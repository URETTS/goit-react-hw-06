import { useEffect } from "react";
import { useSelector } from "react-redux"; 
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";

const App = () => {
  const contacts = useSelector((state) => state.contacts.items); // ✅ Отримуємо контакти з Redux

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
