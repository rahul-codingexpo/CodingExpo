import React from "react";
import "./ServicesWeProvide.css";
import useScrollAnimation from "../components/ScrollAnimation";
import "../components/Animations.css";
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
  const subtitleRef = useScrollAnimation();
  const titleRef = useScrollAnimation();
  const gridRef = useScrollAnimation();
  return (
    <section className="serviceWe-section">
      <div className="servicesWe-container">
        <div className="service-head">
          <p className="servicesWe-subtitle fade-in-up" ref={subtitleRef}>
            What We Provide
          </p>
          <h2 className="servicesWeTop-title fade-in-up" ref={titleRef}>
            Our Web Development and Digital Services Create Winning Tales
          </h2>
        </div>

        <div className="servicesWe-grid fade-in-up" ref={gridRef}>
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
