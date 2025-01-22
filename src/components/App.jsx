import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList'; 
import s from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const filter = useSelector((state) => state.filters.name); 

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
    
  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()) 
  );

  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
