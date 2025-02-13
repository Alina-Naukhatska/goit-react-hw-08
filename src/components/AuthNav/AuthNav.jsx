import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div className="flex gap-4">
      <NavLink to="/register" className="btn btn-primary hover:bg-pink-500">Register</NavLink>
      <NavLink to="/login" className="btn btn-secondary hover:bg-purple-500">Login</NavLink>
    </div>
  );
};

export default AuthNav;