import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts, selectError } from '../../redux/contacts/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Мінімум 3 символи')
        .max(50, 'Максимум 50 символів')
        .required("Обов'язкове до заповнення!"),
      number: Yup.string()
        .matches(/^\d+$/, 'Номер телефону має містити мінімум 10 символів')
        .min(7, 'Телефонний номер має містити мінімум 7 цифр')
        .max(15, 'Телефонний номер не має містити більше ніж 15')
        .required("Обов'язкове до заповнення!"),
    }),
    onSubmit: (values, { resetForm }) => {
      const duplicate = contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      );

      if (duplicate) {
        alert(`${values.name} is already in contacts!`);
        return;
      }

      dispatch(addContact(values));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 p-4 bg-gray-900 text-white rounded-xl shadow-xl border border-gray-700 w-[350px] transition-transform hover:scale-105">
      <label htmlFor="name" className="text-lg font-semibold">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        className="input input-bordered w-full bg-gray-800 text-white"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        autoComplete="name"
      />
      {formik.touched.name && formik.errors.name ? (
        <div className="text-red-500 text-sm">{formik.errors.name}</div>
      ) : null}

      <label htmlFor="number" className="text-lg font-semibold">
        Number
      </label>
      <input
        id="number"
        name="number"
        type="tel"
        className="input input-bordered w-full bg-gray-800 text-white"
        value={formik.values.number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        autoComplete="tel"
      />
      {formik.touched.number && formik.errors.number ? (
        <div className="text-red-500 text-sm">{formik.errors.number}</div>
      ) : null}

      {error && <div className="text-red-500 text-sm">Error: {error}</div>}

      <button type="submit" className="btn btn-success w-full hover:bg-green-500">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;