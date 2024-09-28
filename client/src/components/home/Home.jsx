import React, { useState, useEffect } from 'react';
import Form from '../form/Form';
import Nav from '../nav/Nav';
import Side from '../sidebar/Side';
import Contact from '../contact-info/Contact';
import './home.css';

const Home = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/contact');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const addContact = (newContact) => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = async (contact) => {
    try {
      await fetch(`http://127.0.0.1:5000/contact/${contact.id}`, { method: 'DELETE' });
      setContacts(prevContacts => prevContacts.filter(c => c.id !== contact.id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="home-container">
      <div className="home-box">
        <Nav />
        <div className="content-section">
          <Side contacts={contacts} onSelectContact={setSelectedContact} onDeleteContact={deleteContact} />
          <div className="main-content">
            <Contact selectedContact={selectedContact} />
            <Form onAddContact={addContact} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
