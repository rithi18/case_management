import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "./Home.css";

const Home = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div className="home-container">

      {/* Sidebar */}
      <div className="sidebar">

        <div>

          <button className="sidebar-btn" onClick={() => navigate("/dashboard")}>
            📊 Dashboard
          </button>

          <button className="sidebar-btn"  onClick={() => navigate("/analytics")}>
          📈 Analytics
          </button>


          <button className="sidebar-btn" onClick={() => navigate("/cases")}>
            📁 View Case
          </button>

          <button className="sidebar-btn" onClick={() => navigate("/cases/add")}>
            ➕ Add Case
          </button>

          <button className="sidebar-btn" onClick={() => navigate("/about")}>
            ℹ About
          </button>
        </div>

        {/* Logout at Bottom */}
        <button className="logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>

      </div>

      {/* Main Content */}
      <div className="main-content">
        <Outlet />
      </div>

    </div>
  );
};

export default Home;
