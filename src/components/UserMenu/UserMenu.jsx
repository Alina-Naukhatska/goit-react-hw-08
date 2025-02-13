import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="flex items-center gap-4">
      <span className="text-lg">Welcome, {user.name}!</span>
      <button className="btn btn-error hover:bg-red-500" onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default UserMenu;