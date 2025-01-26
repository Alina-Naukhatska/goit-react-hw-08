import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import { addContact, deleteContact } from '../redux/contactsSlice';
import { changeFilter } from '../redux/filtersSlice';
import s from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters); 

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact)); 
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId)); 
  };

  const handleSearchChange = (query) => {
    dispatch(changeFilter(query)); 
  };

  const normalizedFilter = filter || '';

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter.toLowerCase()) 
  );

  return (
    <div className={s.app}>
      <h1>Contact Manager</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={normalizedFilter} onChange={handleSearchChange} /> 
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
