import React from "react";
import "./CTASection.css";
import { FaComments, FaChevronRight } from "react-icons/fa";

const CTASection = () => {
  return (
    <div className="cta-wrapper">
      {/* Left Section */}
      <div className="cta-left">
        <div className="cta-left-content">
          <FaComments size={28} className="cta-icon" />
          <p>
            Let’s{" "}
            <strong>
              <u>Discuss & Start</u>
            </strong>{" "}
            IT Consultations
          </p>
        </div>
        <a href="#contact" className="cta-link">
          Let’s Talk <FaChevronRight size={12} />
        </a>
      </div>

      {/* Right Section */}
      <div className="cta-right">
        <div className="cta-avatars">
          <img
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt="user1"
          />
          <img
            src="https://randomuser.me/api/portraits/men/2.jpg"
            alt="user2"
          />
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="user3"
          />
          <div className="cta-plus">+</div>
        </div>
        <p className="cta-clients">
          <strong>
            <u>700+</u>
          </strong>{" "}
          Trusted Clients
        </p>
      </div>
    </div>
  );
};

export default CTASection;
