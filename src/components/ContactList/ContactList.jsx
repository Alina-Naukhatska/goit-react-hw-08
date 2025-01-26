import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filtersSlice'; 
import { deleteContact } from '../../redux/contactsSlice'; 
import Contact from '../Contact/Contact'; 
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts); 
  const filter = useSelector(selectFilter); 

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()) 
  );

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId)); 
  };

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={() => handleDeleteContact(id)} 
        />
      ))}
    </ul>
  );
};

export default ContactList;
