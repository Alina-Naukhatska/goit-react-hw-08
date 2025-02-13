import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'At least 6 characters').required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values)).catch(() => {
      toast.error('Invalid login or password');
    });
    resetForm();
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-transparent">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4 p-6 bg-gray-900 text-white rounded-xl shadow-xl border border-gray-700 w-[350px] transition-transform hover:scale-105">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <Field
              className="input input-bordered w-full bg-gray-800 text-white"
              type="email"
              name="email"
              autoComplete="email"
            />
            <ErrorMessage className="text-red-500 text-xs" name="email" component="div" />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <Field
              className="input input-bordered w-full bg-gray-800 text-white"
              type="password"
              name="password"
              autoComplete="current-password"
            />
            <ErrorMessage className="text-red-500 text-xs" name="password" component="div" />
          </div>

          <button className="btn btn-primary w-full hover:bg-blue-500" type="submit">
            Log In
          </button>

          <p className="text-center text-sm">
            No account yet?{' '}
            <Link to="/register" className="text-blue-500 hover:text-blue-600 font-semibold">
              Sign up here
            </Link>.
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;