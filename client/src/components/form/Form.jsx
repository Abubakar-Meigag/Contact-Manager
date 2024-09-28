import React, { useState } from "react";
import "./form.css";

const Form = ({ onAddContact }) => {
  const titles = ["Mr", "Ms", "Mrs", "Miss", "Master", "Madam", "Sir", "Lord"];
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    city: "",
    address: "",
    title: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.first_name || !formData.last_name || !formData.title) {
      alert("You must fill all the required fields");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/addContact",{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!res.ok) {
          throw new Error("Failed to submit form");
        }

      const newContact = await res.json();
      onAddContact(newContact);

      alert("Form submitted successfully");

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        city: "",
        address: "",
        title: "",
      });

    } catch (err) {
      console.error(err);
      alert("Failed to submit form, please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="text-center">Contact Manager</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="titles">Title</label>
          <select
            id="titles"
            value={formData.title}
            name="title"
            className="form-control"
            required
            onChange={handleInputChange}
          >
            <option value="">Choose title...</option>
            {titles.map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn-submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
