import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CaseContext } from "../context/Casecontext";
import { formatDate } from "../utils/formatDate";
import { FaFileAlt, FaClock, FaCheckCircle, FaUsers } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  const { cases } = useContext(CaseContext);
  const navigate = useNavigate();

  const pendingCases = cases.filter((c) => !c.completed).length || 0;
  const completedCases = cases.filter((c) => c.completed).length || 0;

  const totalClients = 10; // static example

  return (
    <div className="dashboard">
      {/* ===== DASHBOARD CARDS ===== */}
      <div className="cards">
        {/* TOTAL CASES */}
        <div className="card">
          <div className="card-icon">
            <FaFileAlt size={30} />
          </div>
          <h3>Total Cases</h3>
          <p>{cases.length}</p>
        </div>

        {/* PENDING CASES (CLICKABLE) */}
        <div
          className="card clickable pending-card"
          onClick={() => navigate("/cases/pending")}
        >
          <div className="card-icon">
            <FaClock size={30} />
          </div>
          <h3>Pending Cases</h3>
          <p>{pendingCases}</p>
        </div>

        {/* COMPLETED CASES (CLICKABLE) */}
        <div
          className="card clickable completed-card"
          onClick={() => navigate("/cases/completed")}
        >
          <div className="card-icon">
            <FaCheckCircle size={30} />
          </div>
          <h3>Completed Cases</h3>
          <p>{completedCases}</p>
        </div>

        {/* TOTAL CLIENTS */}
        <div className="card">
          <div className="card-icon">
            <FaUsers size={30} />
          </div>
          <h3>Total Clients</h3>
          <p>{totalClients}</p>
        </div>
      </div>

      {/* ===== RECENT CASES TABLE ===== */}
      <div className="recent-cases">
        <h2>Recent Cases</h2>
        <table className="cases-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {cases.slice(-5).reverse().map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.title}</td>
                <td>{c.description}</td>
                <td>{formatDate(c.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
