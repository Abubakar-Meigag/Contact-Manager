import React from 'react';
import './contact.css';

const Contact = ({ selectedContact }) => {
  if (!selectedContact) {
    return <div className="contact-container">Select a contact to view details</div>;
  }

  return (
    <div className="contact-container">
      <h2>{selectedContact.title} {selectedContact.first_name} {selectedContact.last_name}</h2>
      <p>Email: {selectedContact.email}</p>
      <p>City: {selectedContact.city}</p>
      <p>Address: {selectedContact.address}</p>
    </div>
  );
};

export default Contact;
