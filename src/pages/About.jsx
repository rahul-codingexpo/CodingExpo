import React, { useEffect, useRef } from "react";
import "./About.css";
import TeamImage from "../assets/new-team-bg.jpg";

const About = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Image on Left */}
        <div className="about-image">
          <img src={TeamImage} ref={imgRef} alt="Navika Digital Team" />
        </div>

        {/* Text Content on Right */}
        <div className="about-content">
          <span className="about-subtitle">About Us</span>
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
