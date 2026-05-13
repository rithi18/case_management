import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = ({ onLogout }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Rithish Viswa P",
    email: "rithishviswa261@gmail.com",
    role: "Administrator",
    phone: "+91 98765 43210",
    location: "India",
    joined: "January 2024",
    tasksCompleted: 128,
    projects: 12,
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleLogoutClick = () => {
    if (onLogout) {
      onLogout();
    }
    navigate("/login");
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-card">

        {/* Profile Header */}
        <div className="profile-header">
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="edit-input"
            />
          ) : (
            <h2>{user.name}</h2>
          )}

          <p className="role-badge">{user.role}</p>
        </div>

        {/* Profile Details */}
        <div className="profile-details">

          <div className="detail-item">
            <span>Email</span>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="edit-input"
              />
            ) : (
              <p>{user.email}</p>
            )}
          </div>

          <div className="detail-item">
            <span>Phone</span>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="edit-input"
              />
            ) : (
              <p>{user.phone}</p>
            )}
          </div>

          <div className="detail-item">
            <span>Location</span>
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={user.location}
                onChange={handleChange}
                className="edit-input"
              />
            ) : (
              <p>{user.location}</p>
            )}
          </div>

          <div className="detail-item">
            <span>Joined</span>
            <p>{user.joined}</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="profile-stats">
          <div>
            <h3>{user.projects}</h3>
            <p>Projects</p>
          </div>
          <div>
            <h3>{user.tasksCompleted}</h3>
            <p>Tasks Done</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="profile-actions">
          {isEditing ? (
            <button className="edit-btn" onClick={handleSave}>
              Save Changes
            </button>
          ) : (
            <button
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          )}

          <button
            className="logout-btn"
            onClick={handleLogoutClick}
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Profile;
