import React from "react";
import "./ContactUs.css";
import contactImg from "../assets/contact.jpg";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaShareAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
function ContactUs() {
  return (
    <>
      {/* Breadcrumb Section */}
      <section className="breadcumb-section relative">
        <div className="ContactUs-tf-container">
          <div className="title-inner center">
            <h1 className="title text-white mb-18">Contact Us</h1>
            <div className="title-group text-white">
              <a href="/">Home</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
      {/*contact us section*/}
      <section className="contact-us-section">
        <div className="contact-container">
          <div className="contact-left">
            <div className="contact-heading">
              <span className="sub-title">Stay connected with us</span>
              <h2>
                Strike up a <br /> conversation
              </h2>
              <p>
                It’s time to collaborate and create groundbreaking experiences
                that will elevate your brand to an exceptional level.
              </p>
            </div>
            <div className="contact-items-wrapper">
              <div className="about-contact-item">
                <div className="icon">
                  <FaMapMarkerAlt className="icon" />
                </div>
                <div className="content">
                  <h4>Location</h4>
                  <p>S2, G-34, Block G, Sec-3, Noida, Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="about-contact-item">
                <div className="icon">
                  <FaPhoneAlt className="icon" />
                </div>
                <div className="content">
                  <h4>Phone</h4>
                  <p>+91 9643054453</p>
                </div>
              </div>

              <div className="about-contact-item">
                <div className="icon">
                  <FaEnvelope className="icon" />
                </div>
                <div className="content">
                  <h4>Email</h4>
                  <p>info@codingexpo.org</p>
                </div>
              </div>

              <div className="about-contact-item">
                <div className="icon">
                  <FaShareAlt className="icon" />
                </div>
                <div className="content">
                  <h4>Social</h4>
                  <div className="social-links">
                    <a
                      href="https://www.facebook.com/codingexpo/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="https://x.com/codingexpo/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/codingexpo-technology-private-limited/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="https://www.instagram.com/coding.expo/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <img src={contactImg} alt="Contact" className="contact-image" />
          </div>

          <div className="contact-right">
            <h3>Send Us Message</h3>
            <form className="contact-form">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />

              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Contact No</label>
              <input type="text" placeholder="Enter your contact no" required />

              <label>Message</label>
              <textarea rows="5" required></textarea>

              <button type="submit">Send Message {">"}</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
