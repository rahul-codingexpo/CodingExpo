import React from "react";
import "./ServicesWeProvide.css";
// import { LaptopSvg } from "../components/svg";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaEnvelope,
  FaChartBar,
  FaBullseye,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaLaptopCode size={40} />,
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt size={40} />,
  },
  {
    title: "Digital Marketing",
    icon: <FaEnvelope size={40} />,
  },
  {
    title: "SEO Services",
    icon: <FaChartBar size={40} />,
  },
  {
    title: "Pay Per Click",
    icon: <FaBullseye size={40} />,
  },
];

const ServicesWeProvide = () => {
  return (
    <section className="serviceWe-section">
      <div className="servicesWe-container">
        <p className="servicesWe-subtitle">What We Provide</p>
        <h2 className="servicesWe-title">
          Our Web Development and Digital <br /> Services Create Winning Tales
        </h2>

        <div className="servicesWe-grid">
          {services.map((service, index) => (
            <div key={index} className="serviceWe-card">
              <div className="serviceWe-icon">{service.icon}</div>
              <h3 className="serviceWe-title">{service.title}</h3>
              <div className="checkWe-icon">
                <FaCheckCircle className="checkWe" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesWeProvide;
