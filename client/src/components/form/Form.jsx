import React, { useState } from "react";

const Form = () => {
  const [topic_name, setTopicName] = useState("");
  const [description, setDescription] = useState("");
  const [reference_link, setReferenceLink] = useState("");
  const [selectedModuleId, setSelectedModuleId] = useState("");
  const titles = ["Mr", "Ms", "Mrs", "Miss", "Master", "Madam", "Sir", "Lord"];

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Add New Contact</h2>
          <form>
            <div className="form-group">
              <label htmlFor="titles">Titles</label>
              <select
                id="titles"
                className="form-control"
                required
                onChange={(e) => setSelectedModuleId(selectedModuleId)}
              >
                <option>Choose titles...</option>
                {titles.map((title, index) => (
                  <option key={index} value={title}>
                    {title}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="topic_name">Topic Name</label>
              <input
                id="topic_name"
                type="text"
                className="form-control"
                placeholder="Enter Topic"
                value={topic_name}
                onChange={(e) => setTopicName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                id="description"
                type="text"
                className="form-control"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="reference_link">Reference Link</label>
              <input
                id="reference_link"
                type="url"
                className="form-control"
                placeholder="Enter Reference Link"
                value={reference_link}
                onChange={(e) => setReferenceLink(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
