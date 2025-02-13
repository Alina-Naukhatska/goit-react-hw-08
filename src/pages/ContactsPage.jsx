import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';

import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading, selectError } from '../redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-8">
      <h1 className="text-4xl font-semibold mb-4 text-center">Phonebook</h1>
      <ContactForm />
      <div className="my-4" />
      <h2 className="text-3xl font-medium mb-4 text-center">Contacts</h2>
      <SearchBox />
      <div className="my-4" /> 
      {isLoading ? (
        <p>Loading... Please wait a little</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ContactList />
      )}
    </div>
  );
};

export default ContactsPage;