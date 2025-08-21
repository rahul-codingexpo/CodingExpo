import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Leads from "./leads";
import { SiGoogleads } from "react-icons/si";
import { RiDashboardFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import "./AdminPanel.css";

export default function AdminPanel({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsAuthenticated(false);
    navigate("/admin");
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="admin-container">
      <button className="admin-hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Sidebar */}
      <div ref={menuRef} className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="user-info">
          <FaUserCircle className="user-icon" />
          <span className="username">{user?.name || "Admin"}</span>
        </div>

        <Link to="dashboard" onClick={() => setIsOpen(false)}>
          <RiDashboardFill /> Dashboard
        </Link>

        <Link to="leads" onClick={() => setIsOpen(false)}>
          <SiGoogleads /> Leads
        </Link>

        <Link
          to="/admin"
          onClick={(e) => {
            e.preventDefault();
            handleLogout();
          }}
        >
          Logout
        </Link>
      </div>

      {/* Right Content */}
      <div className="admin-content">
        <Routes>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="leads" element={<Leads />} />
        </Routes>
      </div>
    </div>
  );
}
