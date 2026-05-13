import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Case Management System</p>
        <p className="footer-right">
          Developed by Rithish Viswa P
        </p>
      </div>
    </footer>
  );
};

export default Footer;
