import React, { useState } from 'react';
import './side.css';

const Side = ({ contacts, onSelectContact, onDeleteContact }) => {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleFavorite = (contact) => {
    if (favorites.includes(contact)) {
      setFavorites(favorites.filter(fav => fav !== contact));
    } else {
      setFavorites([...favorites, contact]);
    }
  };

  const filteredContacts = contacts
    .filter(contact => `${contact.first_name} ${contact.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => `${a.first_name} ${a.last_name}`.localeCompare(`${b.first_name} ${b.last_name}`));

  const sortedFavorites = favorites.sort((a, b) => `${a.first_name} ${a.last_name}`.localeCompare(`${b.first_name} ${b.last_name}`));
  

  return (
    <div className="side-container">
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />

      <div className="favorites-section">
        <button onClick={() => setShowFavorites(!showFavorites)} className="favorites-button">
          Favorites {showFavorites ? '-' : '+'}
        </button>
        {showFavorites && (
          <ul className="favorites-list">
            {sortedFavorites.map((fav, index) => (
              <li key={index} className="favorite-item">
                <div className="contact-details">
                  {fav.first_name} {fav.last_name}
                </div>
                <button onClick={() => toggleFavorite(fav)} className="remove-favorite">🗑️</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='title-header'>
        Contacts
      </div>
      <ul className="contacts-list">
        {filteredContacts.map((contact, index) => (
          <li key={index} className="contact-item">
            <div className="contact-details" onClick={() => onSelectContact(contact)}>
              {contact.first_name} {contact.last_name}
            </div>
            <div className="contact-actions">
              <button onClick={() => toggleFavorite(contact)} className="heart-button">❤️</button>
              <button onClick={() => onDeleteContact(contact)} className="delete-button">🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Side;
