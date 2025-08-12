import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiInstagramLine,
} from "react-icons/ri";
import logo from "../assets/codingexpo.png";
import useScrollAnimation from "./ScrollAnimation";
import "../components/Animations.css";
const Footer = () => {
  const logoRef = useScrollAnimation();
  const desRef = useScrollAnimation();
  const followRef = useScrollAnimation();
  const ItRef = useScrollAnimation();
  const supportRef = useScrollAnimation();
  const newsRef = useScrollAnimation();
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section company-info">
          <img
            src={logo}
            alt="coding expo Logo"
            className="logo fade-in-up"
            ref={logoRef}
          />
          <p className="fade-in-up" ref={desRef}>
            CodingExpo is an established digital marketing, web development and
            mobile app development company. We have capable, proficient and
            well-versed team members that provides result-driven work.
          </p>
          <div className="social-icons fade-in-up" ref={followRef}>
            <h4>Follow Us</h4>
            <a href="https://www.facebook.com/coding.expo/" target="_">
              <i className="fab fa-facebook-f">
                <RiFacebookFill />
              </i>
            </a>
            <a href="https://x.com/codingexpo" target="_">
              <i className="fab fa-twitter">
                <RiTwitterFill />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/company/codingexpo-technology-private-limited/"
              target="_"
            >
              <i className="fab fa-linkedin-in">
                <RiLinkedinFill />
              </i>
            </a>
            <a href="https://www.instagram.com/coding.expo/" target="_">
              <i className="fab fa-instagram">
                <RiInstagramLine />
              </i>
            </a>
          </div>
        </div>

        {/* IT Services */}
        <div className="footer-section fade-in-up" ref={ItRef}>
          <h4>IT Services</h4>
          <ul>
            <li>
              <Link to="/services/web-development">
                <MdOutlineNavigateNext />
                Website Designing
              </Link>
            </li>
            <li>
              <Link to="/services/web-app-development">
                <MdOutlineNavigateNext />
                Website Development
              </Link>
            </li>
            <li>
              <Link to="/services/android-app-development">
                <MdOutlineNavigateNext />
                Mobile App Development
              </Link>
            </li>
            <li>
              <Link to="/services/eCommerce-app-development">
                <MdOutlineNavigateNext />
                E-Commerce development
              </Link>
            </li>
            <li>
              <Link to="/services/seo">
                <MdOutlineNavigateNext />
                SEO Services
              </Link>
            </li>
            <li>
              <Link to="/services/social-media-management">
                <MdOutlineNavigateNext />
                SMM Services
              </Link>
            </li>
            <li>
              <Link to="/services/pay-per-click-services">
                <MdOutlineNavigateNext />
                PPC Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section fade-in-up" ref={supportRef}>
          <h4>Support & Quicklinks</h4>
          <ul>
            <li>
              <Link to="/contact-us">
                <MdOutlineNavigateNext />
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/payment">
                <MdOutlineNavigateNext />
                Payment
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter fade-in-up" ref={newsRef}>
          <h4>Newsletter</h4>
          <p>Subscribe our newsletter to get more updates</p>
          <form>
            <input type="email" placeholder="Enter Email *" required />
            <button type="submit">Subscribe</button>
          </form>
          <p className="policy-text">
            By subscribing, you’re accept <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
