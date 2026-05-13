import React, { useContext } from "react";
import { CaseContext } from "../context/Casecontext";
import "./CaseStatus.css";

const PendingCases = () => {
  const { cases } = useContext(CaseContext);

  const pendingCases = cases.filter(
    (caseItem) => !caseItem.completed
  );

  return (
    <div className="status-wrapper">
      <div className="status-container">
        <h2>⏳ Pending Cases</h2>

        {pendingCases.length === 0 ? (
          <p className="no-cases">
            No pending cases available.
          </p>
        ) : (
          <div className="cards-container">
            {pendingCases.map((c) => (
              <div key={c.id} className="case-card pending">
                <h3>{c.title}</h3>
                <p>{c.description}</p>
                <span>{c.date}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingCases;
