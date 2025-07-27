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

  const closeMenu = () => {
    setMenuOpen(false);
    setShowDropdown(false);
  };

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
      <ul className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <li className="mobile-menu-logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="CodingExpo" />
          </Link>
        </li>

        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about-company" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
        </li>

        <li
          className="dropdown-container"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span className="dropdown-link">Services</span>
          {showDropdown && (
            <div className="dropdown-menu">
              {/* --- Dropdown Columns --- */}
              <div className="dropdown-column">
                <h4>Software Development</h4>
                <hr />
                <Link to="/services/consulting" onClick={closeMenu}>
                  Consulting
                </Link>
                <Link to="/services/web-development" onClick={closeMenu}>
                  Web Development
                </Link>
                <Link to="/services/web-app-development" onClick={closeMenu}>
                  Web App Development
                </Link>
                <Link to="/services/ui-ux" onClick={closeMenu}>
                  UI/UX
                </Link>
              </div>
              <div className="dropdown-column">
                <h4>Mobile App Development</h4>
                <hr />
                <Link
                  to="/services/eCommerce-app-development"
                  onClick={closeMenu}
                >
                  E-Commerce App Development
                </Link>
                <Link
                  to="/services/hybrid-mobile-app-development"
                  onClick={closeMenu}
                >
                  Hybrid App Development
                </Link>
                <Link
                  to="/services/android-app-development"
                  onClick={closeMenu}
                >
                  Android App Development
                </Link>
                <Link to="/services/ios-development" onClick={closeMenu}>
                  iOS
                </Link>
              </div>
              <div className="dropdown-column">
                <h4>Digital Marketing</h4>
                <hr />
                <Link to="/services/seo" onClick={closeMenu}>
                  Search Engine Optimization
                </Link>
                <Link to="/services/pay-per-click-services" onClick={closeMenu}>
                  Pay Per Click
                </Link>
                <Link
                  to="/services/social-media-management"
                  onClick={closeMenu}
                >
                  Social Media Marketing
                </Link>
                <Link to="/services/email-Marketing" onClick={closeMenu}>
                  Email Marketing
                </Link>
              </div>
            </div>
          )}
        </li>

        <li>
          <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
      </div>
    </div>
  );
};

export default Navbar;
