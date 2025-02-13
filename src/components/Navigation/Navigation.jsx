import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="flex gap-4">
      <NavLink to="/" className="btn btn-outline hover:bg-gray-700">Home</NavLink>
      <NavLink to="/contacts" className="btn btn-outline hover:bg-gray-700">Contacts</NavLink>
    </nav>
  );
};

export default Navigation;