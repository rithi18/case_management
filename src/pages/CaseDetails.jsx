import React, { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CaseContext } from "../context/Casecontext";
import { formatDate } from "../utils/formatDate";
import "./CaseDetails.css";

const CaseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { cases, deleteCase } = useContext(CaseContext);

  // Find case by id
  const caseDetail = cases.find((c) => c.id === parseInt(id));

  if (!caseDetail) return <p className="loading">Case not found</p>;

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this case?"
    );
    if (confirmDelete) {
      deleteCase(caseDetail.id);
      navigate("/cases"); // go back after deleting
    }
  };

  return (
    <div className="case-details-container">
      <div className="case-card">
        <h2 className="case-title">{caseDetail.title}</h2>

        <p><strong>Description:</strong></p>
        <p className="case-description">{caseDetail.description}</p>

        <p>
          <strong>Date:</strong>{" "}
          <span className="case-date">{formatDate(caseDetail.date)}</span>
        </p>

        {/* Buttons Row */}
        <div className="button-row">
          <Link to="/cases" className="back-btn">← Back to Cases</Link>

          <button className="delete-btn" onClick={handleDelete}>
            🗑 Delete Case
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseDetails;
