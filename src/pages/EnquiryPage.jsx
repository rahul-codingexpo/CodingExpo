import React from "react";
import "./EnquiryPage.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const EnquirySection = () => {
  return (
    <section className="enquiry-section">
      <div className="enquiry-container">
        {/* Left Side */}
        <div className="enquiry-left">
          <p className="inquiry-label">Work Inquiry</p>
          <h2>
            Collaborate with us to <br /> Promote your Business <br />{" "}
            <span>Digitally</span>
          </h2>
          <p className="enquiry-description">
            As a responsible, capable, veteran, devoted and outcome- driven IT
            company, Navika Digital has proved itself every time. We are ready
            to create history in every upcoming moment.
          </p>

          <div className="contact-block">
            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <div>
                <p className="label">Call For Inquiry</p>
                <br />
                <p className="value">+91-93158 65976</p>
                <p className="value">+91-77669 57363</p>
              </div>
            </div>
            <br />
            <br />
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <div>
                <p className="label">Send Us Email</p>
                <p className="value">info@navikadigital.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="enquiry-right">
          <div className="form-card">
            <h3>Need Help For Project!</h3>
            <p className="subtitle">
              We are ready to help your next projects, let’s work together
            </p>
            <form className="enquiry-form">
              <div className="form-row">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Contact" />
              <select>
                <option>Choose Services</option>
                <option>Web Development</option>
                <option>Digital Marketing</option>
                <option>Web Development</option>
                <option>Digital Marketing</option>
              </select>
              <textarea rows="4" placeholder="Message" />
              <div className="enquiry-button">
                <button type="submit">Send Message Us {" >"}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
