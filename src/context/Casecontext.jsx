import React, { createContext, useState } from "react";

export const CaseContext = createContext();

export const CaseProvider = ({ children }) => {
  const [cases, setCases] = useState([
    {
      id: 1,
      title: "Contract Dispute",
      description: "Client is facing a disagreement with a supplier regarding contract terms.",
      date: "2026-01-07",
      completed: true,
    },
    {
      id: 2,
      title: "Property Settlement",
      description: "Client requires assistance in settling property inheritance with family members.",
      date: "2026-01-05",
      completed: false,
    },
    {
      id: 3,
      title: "Employment Termination",
      description: "Client is contesting wrongful termination from their workplace.",
      date: "2026-01-04",
      completed: true,
    },
    {
      id: 4,
      title: "Insurance Claim",
      description: "Client's insurance claim was denied and needs legal review.",
      date: "2026-01-03",
      completed: false,
    },
    {
      id: 5,
      title: "Tenant Eviction",
      description: "Client is facing difficulties evicting a non-paying tenant legally.",
      date: "2026-01-02",
      completed: true,
    },
    {
      id: 6,
      title: "Intellectual Property Filing",
      description: "File trademark application for client’s new product line.",
      date: "2026-01-01",
      completed: false,
    },
    {
      id: 7,
      title: "Loan Dispute",
      description: "Client disputes loan repayment terms with the bank.",
      date: "2026-01-06",
      completed: true,
    },
    {
      id: 8,
      title: "Vendor Agreement Review",
      description: "Review vendor agreements for compliance and risk management.",
      date: "2026-01-08",
      completed: false,
    },
    {
      id: 9,
      title: "Data Privacy Issue",
      description: "Client needs assistance with GDPR compliance for user data.",
      date: "2026-01-09",
      completed: true,
    },
    {
      id: 10,
      title: "Corporate Merger Consultation",
      description: "Provide legal advice for a corporate merger process.",
      date: "2026-01-10",
      completed: false,
    },
  ]);

  const addCase = (newCase) => {
    setCases([...cases, { id: cases.length + 1, completed: false, ...newCase }]);
  };

  const deleteCase = (id) => {
    setCases(prev => prev.filter(c => c.id !== id));
  };

  return (
    <CaseContext.Provider value={{ cases, addCase, deleteCase }}>
      {children}
    </CaseContext.Provider>
  );
};
