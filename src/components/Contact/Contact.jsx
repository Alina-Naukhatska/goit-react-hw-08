import React from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaPhone } from 'react-icons/fa';
import s from './Contact.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => {
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
      <button
        type="button"
        className={s.deleteButton}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;