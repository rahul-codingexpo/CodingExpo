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

            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>Location</h4>
                <p>S2, G-34, Block G, Sec-3, Noida, Uttar Pradesh, India</p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 9315865976</p>
                <p>+91 7766957363</p>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email</h4>
                <p>info@navikadigital.com</p>
              </div>
            </div>

            <div className="contact-item">
              <FaShareAlt className="icon" />
              <div>
                <h4>Social</h4>
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/navika.digital"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://x.com/navikadigital"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/navika-digital/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.instagram.com/navika.digital/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>
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
              <input
                type="number"
                placeholder="Enter your contact no"
                required
              />

              <label>Message</label>
              <textarea
                rows="5"
                placeholder="Write message"
                required
              ></textarea>

              <button type="submit">
                Send Message <span>&#8594;</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
