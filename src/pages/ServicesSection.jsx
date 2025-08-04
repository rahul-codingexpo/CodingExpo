import React from "react";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import ChatLogo from "../assets/chat1.png";
import "./ServicesSection.css";

import {
  FaMobileAlt,
  FaPaintBrush,
  FaChartLine,
  FaBullhorn,
  FaCogs,
  FaCloud,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    slug: "web-development",
    title: "Website Design & Development",
    icon: <FaPaintBrush />,
    desc: "Our mobile app development team have developed plenty of mobile apps for various businesses.",
  },
  {
    id: 2,
    slug: "web-app-development",
    title: "Mobile App Development",
    icon: <FaMobileAlt />,
    desc: "Our mobile app development team have developed plenty of mobile apps for various businesses.",
  },
  {
    id: 3,
    slug: "ui-ux",
    title: "UI/UX Design",
    icon: <FaCogs />,
    desc: "Our mobile app development team have developed plenty of mobile apps for various businesses.",
  },
  {
    id: 4,
    slug: "seo",
    title: "SEO Services",
    icon: <FaChartLine />,
    desc: "Our mobile app development team have developed plenty of mobile apps for various businesses.",
  },
  {
    id: 5,
    slug: "social-media-management",
    title: "SMM Services",
    icon: <FaBullhorn />,
    desc: "Our mobile app development team have developed plenty of mobile apps for various businesses.",
  },
  {
    id: 6,
    slug: "pay-per-click-services",
    title: "PPC Services",
    icon: <FaCloud />,
    desc: "Our mobile app development team have developed plenty of mobile apps for various businesses.",
  },
];

const ServicesPage = () => {
  return (
    <div className="services-wrapper">
      <div className="services-heading">
        <p className="subheading">Popular Services</p>
        <h2 className="main-heading">Services We Provide</h2>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-id">0{service.id}</div>
            <h3>{service.title}</h3>
            <p className="description">{service.desc}</p>
            <div className="service-icon">{service.icon}</div>
            <span className="service-arrow">
              <FaArrowUpRightFromSquare />
            </span>
            <Link to={`/services/${service.slug}`} className="read-more">
              Read More {">"}
            </Link>
          </div>
        ))}
      </div>

      <div className="cta-box">
        <img src={ChatLogo} alt="chat icon" className="cta-icon" />
        <p>
          Get Free Consultations For Tech Solutions{" "}
          <a href="#enquiry-section" className="cta-link">
            Get A Quote <span>{">"}</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default ServicesPage;
