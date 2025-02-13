import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/auth/operations';

const registrationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'At least 6 characters').required('Required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-transparent">
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={registrationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4 p-6 bg-gray-900 text-white rounded-xl shadow-xl border border-gray-700 w-[350px] transition-transform hover:scale-105">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <Field
              className="input input-bordered w-full bg-gray-800 text-white"
              type="text"
              name="name"
            />
            <ErrorMessage className="text-red-500 text-xs" name="name" component="div" />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <Field
              className="input input-bordered w-full bg-gray-800 text-white"
              type="email"
              name="email"
            />
            <ErrorMessage className="text-red-500 text-xs" name="email" component="div" />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <Field
              className="input input-bordered w-full bg-gray-800 text-white"
              type="password"
              name="password"
            />
            <ErrorMessage className="text-red-500 text-xs" name="password" component="div" />
          </div>

          <button className="btn btn-primary w-full hover:bg-blue-500" type="submit">
            Register
          </button>

          <p className="text-center text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:text-blue-600 font-semibold">
              Log in here
            </Link>.
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;