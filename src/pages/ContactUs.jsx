import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Enquiry sent successfully! We will contact you soon...");
        setFormData({
          name: "",
          email: "",
          contact: "",
          message: "",
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error("Error submitting enquiry:", err);
      alert("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };
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
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Contact No</label>
              <input
                type="text"
                name="contact"
                placeholder="Enter your contact no"
                value={formData.contact}
                onChange={handleChange}
                required
              />

              <label>Message</label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message >"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
