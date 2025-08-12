import React from "react";
import "./EnquiryPage.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import useScrollAnimation from "../components/ScrollAnimation";
import "../components/Animations.css";
const EnquirySection = () => {
  const labelRef = useScrollAnimation();
  const h2Ref = useScrollAnimation();
  const desRef = useScrollAnimation();
  const callRef = useScrollAnimation();
  const emailRef = useScrollAnimation();
  return (
    <section className="enquiry-section" id="enquiry-page">
      <div className="enquiry-tf-container">
        <div className="enquiry-container">
          {/* Left Side */}
          <div className="enquiry-left">
            <div className="enquiry-content">
              <p className="inquiry-label fade-in-up" ref={labelRef}>
                Work Inquiry
              </p>
              <h2 className="fade-in-up" ref={h2Ref}>
                Collaborate with us to Promote your Business Digitally
              </h2>
              <p className="enquiry-description fade-in-up" ref={desRef}>
                As a responsible, capable, veteran, devoted and outcome driven
                IT company, CodingExpo has proved itself every time. We are
                ready to create history in every upcoming moment.
              </p>

              <div className="contact-block">
                <div className="contact-item fade-in-up" ref={callRef}>
                  <FaPhoneAlt className="icon" />
                  <div>
                    <span className="label">Call For Inquiry</span>
                    <br />
                    <p className="value">+91 9643054453</p>
                  </div>
                </div>
                <br />
                <br />
                <div className="contact-item fade-in-up" ref={emailRef}>
                  <FaEnvelope className="icon" />
                  <div>
                    <span className="label">Send Us Email</span>
                    <br />
                    <p className="value">info@codingexpo.org</p>
                  </div>
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
      </div>
    </section>
  );
};

export default EnquirySection;
