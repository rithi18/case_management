import React, { useContext } from "react";
import { CaseContext } from "../context/Casecontext";
import "./CaseStatus.css";

const CompletedCases = () => {
  const { cases } = useContext(CaseContext);

  const completedCases = cases.filter(
    (caseItem) => caseItem.completed
  );

  return (
    <div className="status-wrapper">
      <div className="status-container">
        <h2>✅ Completed Cases</h2>

        {completedCases.length === 0 ? (
          <p className="no-cases">
            No completed cases available.
          </p>
        ) : (
          <div className="cards-container">
            {completedCases.map((c) => (
              <div key={c.id} className="case-card completed">
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

export default CompletedCases;
