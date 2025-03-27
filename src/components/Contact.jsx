import styles from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.contact}>
      <MdContactPage className="my-icon" /> {name}: <FaPhoneAlt className="my-icon" /> {number}
      <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default Contact;