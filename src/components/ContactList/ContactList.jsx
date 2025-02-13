import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectIsLoading, selectError } from '../../redux/contacts/selectors';
import { selectFilterValue } from '../../redux/filters/selectors';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(selectFilterValue);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (isLoading) return <p className="text-center text-gray-500">Loading... Please wait a little</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter) || contact.number.includes(filter));

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </div>
  );
};

export default ContactList;