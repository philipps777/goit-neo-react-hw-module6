import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useId } from "react";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const onAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };
  const initialValues = { name: "", number: "" };
  const nameFieldId = useId();
  const numberFieldId = useId();
  const phoneRegExp = /^[\d+\-()]{1,10}$/g;

  const addContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Minimum number of characters 3")
      .max(50, "Maximum number of characters 50")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Minimum number of characters 3")
      .matches(phoneRegExp, "Invalid phone number format")
      .required("Phone number is required"),
  });
  const handleFormSubmit = (values, actions) => {
    values.id = nanoid(5);
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={addContactSchema}
    >
      <div className={styles.wrapper}>
        <Form className={styles.form}>
          <label className={styles.field}>
            <span className={styles.tag}>Name</span>
            <Field
              className={styles.input}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage
              className={styles.error}
              name="name"
              component="span"
            />
          </label>
          <label className={styles.field}>
            <span className={styles}>Number</span>
            <Field
              className={styles}
              type="tel"
              name="number"
              maxLength="10"
              id={numberFieldId}
            />
            <ErrorMessage
              className={styles.error}
              name="number"
              component="span"
            />
          </label>
          <button className={styles.btn} type="submit">
            Add contact
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default ContactForm;
