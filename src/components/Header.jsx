import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const userName = "Rithish Viswa P";
  const firstLetter = userName.charAt(0).toUpperCase();

  return (
    <header className="header">
      <div className="header-left">
        Case Management System
      </div>

      <button
        className="profile-button"
        onClick={() => navigate("/profile")}
      >
        <div className="avatar-circle">{firstLetter}</div>
        <span className="profile-text">My Profile</span>
      </button>
    </header>
  );
};

export default Header;
