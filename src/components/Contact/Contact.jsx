import { FaPhone } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import styles from "./Contact.module.css";
const Contact = ({ id, name, phone, deleteContacts }) => {
  return (
    <div className={styles.contact} id={id}>
      <div className={styles.details}>
        <p className={styles.field}>
          <IoMdContact /> {name}
        </p>
        <p className={styles.field}>
          <FaPhone /> {phone}
        </p>
      </div>
      <button
        className={styles.btn}
        onClick={() => deleteContacts(id)}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
