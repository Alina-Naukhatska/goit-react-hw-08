import React from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaPhone } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import s from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.contactItem}>
      <div className={s.contactInfo}>
        <p className={s.name}>
          <FaUser className={s.icon} /> {name}
        </p>
        <p className={s.number}>
          <FaPhone className={s.icon} /> {number}
        </p>
      </div>
      <button onClick={handleDelete} className={s.deleteButton}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
