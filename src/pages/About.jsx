import React from "react";
import "./About.css";
import TeamImage from "../assets/new-team-bg.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Image on Left */}
        <div className="about-image">
          <img src={TeamImage} alt="Navika Digital Team" />
        </div>

        {/* Text Content on Right */}
        <div className="about-content">
          <p className="about-subtitle">About Us</p>
          <h2 className="about-title">
            Adopt Modernized Designing, <br />
            and Marketing Approach with <br />
            Navika Digital
          </h2>
          <h4 className="about-highlight">
            Result-Driven Web Design, and Development Company in India
          </h4>
          <p className="about-description">
            Navika Digital has been functioning as a frontrunning{" "}
            <strong>Web Development, Mobile App Development</strong> and{" "}
            <strong>Digital Marketing Company</strong>. We take every project as
            an urgent task and complete it with all necessary devotion and
            aspirations. Our digital marketing, web development, mobile app
            development and content development team is always there to bring
            outcomes that clients can experience in their enhance ROI and
            business popularity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
