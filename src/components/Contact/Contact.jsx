import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { FaTrash } from 'react-icons/fa';
import s from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contactItem}>
      <div className={s.contactInfo}>
        <p className={s.name}>{name}</p>
        <p className={s.number}>{number}</p>
      </div>
      <button
        className={s.deleteButton}
        onClick={() => dispatch(deleteContact(id))}
        aria-label="Delete contact"
      >
        <FaTrash />
      </button>
    </li>
  );
};

export default Contact;