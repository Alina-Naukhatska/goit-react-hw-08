import { useDispatch, useSelector } from 'react-redux';
import { selectDeletingIds } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deletingIds = useSelector(selectDeletingIds);
  const isDeleting = deletingIds.includes(id);

  const handleDelete = () => {
    if (!isDeleting) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <li className="card bg-gray-900 text-white shadow-lg p-4 w-[350px] rounded-xl flex flex-col gap-2 border border-gray-700 transition-transform hover:scale-105">
      <div className="flex items-center gap-2">
        <FaUser className="text-purple-400" />
        <span className="font-bold">{name}</span>
      </div>
      <div className="flex items-center gap-2">
        <FaPhoneAlt className="text-pink-400" />
        <span>{number}</span>
      </div>
      <button className="btn btn-error btn-sm mt-2 hover:bg-red-500" onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};

export default Contact;
