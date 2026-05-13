import React, { useContext, useState } from "react";
import { CaseContext } from "../context/Casecontext";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import "./Cases.css";

const Cases = () => {
  const { cases, deleteCase } = useContext(CaseContext);

  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [category, setCategory] = useState("");

  const categories = [...new Set(cases.map(c => c.category).filter(Boolean))];

  const filteredCases = cases.filter(c => {
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());

    const matchesDate = dateFilter ? c.date === dateFilter : true;
    const matchesCategory = category ? c.category === category : true;

    return matchesSearch && matchesDate && matchesCategory;
  });

  return (
    <div className="cases-page">

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by title or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />

        {categories.length > 0 && (
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
        )}
      </div>

      <table className="cases-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredCases.length > 0 ? (
            filteredCases.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.title}</td>
                <td>{c.description}</td>
                <td>{formatDate(c.date)}</td>

                <td className="actions">
                  <Link className="view-btn" to={`/cases/${c.id}`}>View</Link>

                  <button 
                    className="delete-btn"
                    onClick={() => deleteCase(c.id)} 
                  >
                   Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-results">
                No matching cases found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Cases;
