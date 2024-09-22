import React, { useState } from "react";
import './form.css';  // Import CSS file for form styling

const Form = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [selectedModuleId, setSelectedModuleId] = useState("");
  const titles = ["Mr", "Ms", "Mrs", "Miss", "Master", "Madam", "Sir", "Lord"];

  return (
    <div className="form-container">
      <h2 className="text-center">Contact Manager</h2>
      <form>
        <div className="form-group">
          <label htmlFor="titles">Title</label>
          <select
            id="titles"
            className="form-control"
            required
            onChange={(e) => setSelectedModuleId(e.target.value)}
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
              placeholder="First Name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              type="text"
              placeholder="Last Name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
