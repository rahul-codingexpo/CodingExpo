import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../assets/codingexpo.png";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="navbar" ref={navRef}>
      {/* Left: Logo */}
      <div className="navbar-left">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="CodingExpo" className="logo" />
        </Link>
      </div>

      {/* Right: Nav Links */}
      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="CodingExpo" />
          </Link>
        </div>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About Us
        </Link>

        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact Us
        </Link>

        <div
          className="dropdown-container"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span className="dropdown-link">Services</span>

          {showDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-column">
                <h4>Software Development</h4>
                <hr />

                <Link
                  to="/consulting"
                  onClick={() => {
                    setMenuOpen(false);
                    setShowDropdown(false);
                  }}
                >
                  Consulting
                </Link>
                <Link
                  to="/WebDevelopment"
                  onClick={() => {
                    setMenuOpen(false);
                    setShowDropdown(false);
                  }}
                >
                  Web Development
                </Link>
                <Link
                  to="/webAppDev"
                  onClick={() => {
                    setMenuOpen(false);
                    setShowDropdown(false);
                  }}
                >
                  Web App Development
                </Link>
                <Link
                  to="/uiUx"
                  onClick={() => {
                    setMenuOpen(false);
                    setShowDropdown(false);
                  }}
                >
                  UI/UX
                </Link>
              </div>
              <div className="dropdown-column">
                <h4>Mobile App Development</h4>
                <hr />
                <Link
                  to="/eCommerce"
                  onClick={() => {
                    setMenuOpen(false);
                    setShowDropdown(false);
                  }}
                >
                  E-Commerce App
                </Link>
                <Link
                  to="/hybridApp"
                  onClick={() => {
                    setMenuOpen(false);
                    setShowDropdown(false);
                  }}
                >
                  Hybrid App
                </Link>
                <Link
                  to="androidApp"
                  onClick={() => {
                    setMenuOpen(false);
                    setShowDropdown(false);
                  }}
                >
                  Android App
                </Link>
                <Link
                  to="ios"
                  onClick={() => {
                    setMenuOpen(false);
                    setShowDropdown(false);
                  }}
                >
                  IOS
                </Link>
              </div>
              <div className="dropdown-column">
                <h4>Digital Marketing</h4>
                <hr />
                <Link
                  to="/seo"
                  onClick={() => {
                    setMenuOpen(false);
                    setShowDropdown(false);
                  }}
                >
                  SEO
                </Link>
                <Link
                  to="/ppc"
                  onClick={() => {
                    setMenuOpen(false);
                    setShowDropdown(false);
                  }}
                >
                  PPC
                </Link>
                <Link
                  to="smm"
                  onClick={() => {
                    setMenuOpen(false);
                    setShowDropdown(false);
                  }}
                >
                  SMM
                </Link>
                <Link
                  to="mailMarketing"
                  onClick={() => {
                    setMenuOpen(false);
                    setShowDropdown(false);
                  }}
                >
                  Mail Marketing
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
      </div>
    </div>
  );
};

export default Navbar;
