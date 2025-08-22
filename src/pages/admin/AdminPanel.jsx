import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Leads from "./leads";
import Role from "./Role";
import { SiGoogleads } from "react-icons/si";
import { RiDashboardFill } from "react-icons/ri";
// import { FaUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import React, { useState, useEffect, useRef } from "react";
import "./AdminPanel.css";

export default function AdminPanel({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("loggedInUser"));
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
          <FcBusinessman className="user-icon" />
          <span className="username">{user?.name || "Admin"}</span>
        </div>

        <Link to="dashboard" onClick={() => setIsOpen(false)}>
          <RiDashboardFill /> Dashboard
        </Link>

        <Link to="leads" onClick={() => setIsOpen(false)}>
          <SiGoogleads /> Leads
        </Link>

        <Link to="role" onClick={() => setIsOpen(false)}>
          <FaAddressBook /> Role
        </Link>

        <Link
          to="/admin"
          onClick={(e) => {
            e.preventDefault();
            handleLogout();
          }}
        >
          <IoLogOut />
          Logout
        </Link>
      </div>

      {/* Right Content */}
      <div className="admin-content">
        <Routes>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="leads" element={<Leads />} />
          <Route path="role" element={<Role />} />
        </Routes>
      </div>
    </div>
  );
}
