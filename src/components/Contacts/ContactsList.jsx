import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';
import css from './Contactlist.module.css';

export const ContactsList = ({ contacts }) => {
  
  return (
    <ul className={css.contacts__box}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            id={id}
          />
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
 
};
