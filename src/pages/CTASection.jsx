import React from "react";
import "./CTASection.css";
import { Link } from "react-router-dom";
import { FaComments, FaChevronRight } from "react-icons/fa";
import Avt1 from "../assets/ctaAvtar/avt1.jpg";
import Avt2 from "../assets/ctaAvtar/avt2.jpg";
import Avt3 from "../assets/ctaAvtar/avt3.jpg";
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
          <Link to="/contact-us">
            Let’s Talk <FaChevronRight size={12} />
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="ctaB-right">
        <div className="ctaB-avatars">
          <img src={Avt1} alt="user1" />
          <img src={Avt2} alt="user2" />
          <img src={Avt3} alt="user3" />
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
