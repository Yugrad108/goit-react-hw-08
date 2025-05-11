import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import { form, button, input, errorMessage } from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const initialValues = {
  id: "",
  name: "",
  number: "",
};

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .trim()
      .required("Required"),
    number: Yup.string()
      .matches(/^\d+$/, "Not a number")
      .min(7, "Too Short!")
      .max(9, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ ...values, id: nanoid() }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={form}>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} className={input} />
          <ErrorMessage name="name" component="div" className={errorMessage} />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="tel"
            name="number"
            id={numberFieldId}
            className={input}
          />
          <ErrorMessage
            name="number"
            component="div"
            className={errorMessage}
          />
        </div>
        <button className={button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
