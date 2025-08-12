import React from "react";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import ChatLogo from "../assets/chat1.png";
import "./ServicesSection.css";
import useScrollAnimation from "../components/ScrollAnimation";
import "../components/Animations.css";
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
    desc: "Fortunately, we have a capable, veteran and innovative web development and designing team",
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
    desc: "We have competency and well-versed skills to create secure database oriented and user-friendly UI/UX designed website",
  },
  {
    id: 4,
    slug: "seo",
    title: "SEO Services",
    icon: <FaChartLine />,
    desc: "Coding Expo strategizes SEO services and solutions for any business by keeping its needs and objectives in mind.",
  },
  {
    id: 5,
    slug: "social-media-management",
    title: "SMM Services",
    icon: <FaBullhorn />,
    desc: "Our social media marketing services ensure that your brand’s social media visibility attracts more visitors to your business.",
  },
  {
    id: 6,
    slug: "pay-per-click-services",
    title: "PPC Services",
    icon: <FaCloud />,
    desc: "Create a long-term profitable revenue model for your website and brand with our result-centric PPC solutions.",
  },
];

const ServicesPage = () => {
  const headRef = useScrollAnimation();
  const secRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();
  return (
    <div className="services-wrapper">
      <div className="services-heading">
        <p className="subheading">Popular Services</p>
        <h2 className="main-heading fade-in-up" ref={headRef}>
          Services We Provide
        </h2>
      </div>
      <div className="services-grid fade-in-up" ref={secRef}>
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

      <div className="cta-box fade-in-up" ref={ctaRef}>
        <img src={ChatLogo} alt="chat icon" className="cta-icon" />
        <p>
          Get Free Consultations For Tech Solutions{" "}
          <Link to="/enquiry" className="cta-link">
            Get A Quote <span>{">"}</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ServicesPage;
