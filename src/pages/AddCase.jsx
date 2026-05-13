import React, { useState, useContext } from "react";
import { CaseContext } from "../context/Casecontext";
import { useNavigate } from "react-router-dom";
import "./AddCase.css";

const AddCase = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const { addCase } = useContext(CaseContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim().length < 3) {
      setError("Title must be at least 3 characters.");
      return;
    }

    if (description.trim().length < 10) {
      setError("Description must be at least 10 characters.");
      return;
    }

    setError("");

    addCase({
      title,
      description,
      date: new Date().toISOString(),
    });

    navigate("/cases");
  };

  return (
    <div className="add-case-page">
      <div className="add-case-card">
        <h2>Add New Case</h2>

        <p className="subtitle">
          Fill the details below to register a new case in the system.
        </p>

        {error && <div className="error-box">{error}</div>}

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Case Title (e.g., Contract Dispute)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Case Description (Add proper case details here)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit">Add Case</button>
        </form>
      </div>
    </div>
  );
};

export default AddCase;
