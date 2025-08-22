import React, { useState } from "react";
import "./EnquiryPage.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import useScrollAnimation from "../components/ScrollAnimation";
import "../components/Animations.css";
import API from "../BaseApi";
const EnquirySection = () => {
  const labelRef = useScrollAnimation();
  const h2Ref = useScrollAnimation();
  const desRef = useScrollAnimation();
  const callRef = useScrollAnimation();
  const emailRef = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    service: "",
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
      const res = await API.post("/leads", formData);
      // const res = await fetch("http://localhost:5000/api/leads", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      // const data = await res.json();

      if (res.status === 201) {
        alert("Enquiry sent successfully! We will contact you soon...");
        setFormData({
          name: "",
          email: "",
          contact: "",
          service: "",
          message: "",
        });
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.error("Error submitting enquiry:", err);
      alert("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

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
                    <p className="value">+91 9643054453</p>
                  </div>
                </div>
                <div className="contact-item fade-in-up" ref={emailRef}>
                  <FaEnvelope className="icon" />
                  <div>
                    <span className="label">Send Us Email</span>
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
              <form className="enquiry-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose Services</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="App Development">App Development</option>
                  <option value="SEO Services">SEO Services</option>
                </select>
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <div className="enquiry-button">
                  <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Message Us >"}
                  </button>
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
