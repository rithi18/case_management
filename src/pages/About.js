import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <h2>About Us</h2>
      <p>
        Our Case Management System helps organizations efficiently track,
        manage, and resolve cases. It provides an intuitive dashboard,
        case tracking, filtering, and reporting features.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li>📁 Case tracking and management</li>
        <li>📊 Dashboard insights</li>
        <li>🔍 Advanced filtering</li>
        <li>🔐 Secure access</li>
      </ul>
    </div>
  );
};

export default About;
