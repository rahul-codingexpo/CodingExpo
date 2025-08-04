import React from "react";
import "./CTASection.css";
import { FaComments, FaChevronRight } from "react-icons/fa";

const CTASection = () => {
  return (
    <div className="ctaB-wrapper">
      {/* Left Section */}
      <div className="ctaB-left">
        <div className="ctaB-left-content">
          <div>
            <FaComments size={28} className="ctaB-icon" />
          </div>
          <div>
            <p>
              Let’s{" "}
              <strong>
                <i>
                  <u>Discuss & Start</u>
                </i>
              </strong>{" "}
              IT Consultations
            </p>
          </div>
        </div>
        <div className="ctaB-link">
          <a href="#contact">
            Let’s Talk <FaChevronRight size={12} />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="ctaB-right">
        <div className="ctaB-avatars">
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
          <div className="ctaB-plus">+</div>
        </div>
        <div className="ctaB-clients">
          <p>
            <strong>
              <u>700+</u>
            </strong>{" "}
            Trusted Clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
