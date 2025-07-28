import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ServicesSection.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import ChatLogo from "../assets/chat1.png";
import imageRightservice from "../assets/slide2.jpg";
import {
  FaMobileAlt,
  FaPaintBrush,
  FaChartLine,
  FaBullhorn,
  FaCogs,
  FaCloud,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    slug: "web-development",
    title: "Website Design & Development",
    icon: <FaPaintBrush />,
    desc: "Our mobile app development team have developed plenty of mobile apps for various businesses.",
  },
  {
    id: 2,
    slug: "web-app-development",
    title: "Mobile App Development",
    icon: <FaMobileAlt />,
    desc: "Our mobile app development team have developed plenty of mobile apps for various businesses.",
  },
  {
    id: 3,
    slug: "ui-ux",
    title: "UI/UX Design",
    icon: <FaCogs />,
    desc: "Our mobile app development team have developed plenty of mobile apps for various businesses.",
  },
  {
    id: 4,
    slug: "seo",
    title: "SEO Services",
    icon: <FaChartLine />,
    desc: "Our mobile app development team have developed plenty of mobile apps for various businesses.",
  },
  {
    id: 5,
    slug: "social-media-management",
    title: "SMM Services",
    icon: <FaBullhorn />,
    desc: "Our mobile app development team have developed plenty of mobile apps for various businesses.",
  },
  {
    id: 6,
    slug: "pay-per-click-services",
    title: "PPC Services",
    icon: <FaCloud />,
    desc: "Our mobile app development team have developed plenty of mobile apps for various businesses.",
  },
];

const ServicesSection = () => {
  useEffect(() => {
    const circles = document.querySelectorAll(".progress-circle");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const percent = parseInt(el.getAttribute("data-percentage"), 10);

            // Animate circle stroke
            el.style.setProperty("--percentage", percent);
            el.classList.add("active");

            // Animate number count-up
            const numberEl = el.querySelector(".percentage");
            let current = 0;
            const duration = 5000; // 1 second
            const stepTime = Math.max(Math.floor(duration / percent), 15);

            const counter = setInterval(() => {
              current++;
              numberEl.textContent = `${current}%`;
              if (current >= percent) clearInterval(counter);
            }, stepTime);

            observer.unobserve(el); // animate once
          }
        });
      },
      { threshold: 0.5 }
    );

    circles.forEach((circle) => observer.observe(circle));
  }, []);

  return (
    <div className="services-wrapper">
      <div className="services-heading">
        <p className="subheading">Popular Services</p>
        <h2 className="main-heading">Services We Provide</h2>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-id">{`0${service.id}`}</div>
            <h3>{service.title}</h3>
            {service.desc && (
              <>
                <p className="description">{service.desc}</p>
                <div className="service-icon">{service.icon}</div>
              </>
            )}
            <span className="service-arrow">
              <FaArrowUpRightFromSquare />
            </span>

            <Link to={`/services/${service.slug}`} className="read-more">
              Read More {">"}
            </Link>
          </div>
        ))}
      </div>
      <div className="cta-box">
        <img src={ChatLogo} alt="chat icon" className="cta-icon" />
        <p>
          Get Free Consultations For Tech Solutions{" "}
          <a href="#" className="cta-link">
            Get A Quote <span> {">"} </span>
          </a>
        </p>
      </div>
      <div className="experience-section">
        <div className="experience-left">
          <h4 className="experience-subtitle">
            360-Degree Digital Web Solutions
          </h4>
          <h2 className="experience-title">
            Consider us as your Digital & Web Solution Provider
          </h2>
          <p className="experience-description">
            Backed with some of the vibrant and crazy heads in website
            development and digital solutions has made us the foremost web
            design, development digital marketing firm. Our established work
            history and success client’s portfolio can express our stature in
            digital arena.
          </p>
          <div className="experience-stats">
            <div className="stat-box">
              <div className="progress-circle" data-percentage="68">
                <svg>
                  <circle cx="40" cy="40" r="35"></circle>
                  <circle
                    cx="40"
                    cy="40"
                    r="35"
                    className="animated-circle"
                  ></circle>
                </svg>
                <div className="percentage">68%</div>
              </div>
              <div>
                <p className="stat-title">Business</p>
                <p className="stat-subtitle">Strategy</p>
              </div>
            </div>

            <div className="stat-box">
              <div className="progress-circle" data-percentage="93">
                <svg>
                  <circle cx="40" cy="40" r="35"></circle>
                  <circle
                    cx="40"
                    cy="40"
                    r="35"
                    className="animated-circle"
                  ></circle>
                </svg>
                <div className="percentage">93%</div>
              </div>
              <div>
                <p className="stat-title">Technology</p>
                <p className="stat-subtitle">Solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-right">
          <img
            src={imageRightservice}
            alt="Experience"
            className="experience-image"
          />
          <div className="experience-card">
            <h2>8+</h2>
            <p>
              <u>Years Of Experience</u>
            </p>
            <div className="rating">
              <span>★★★★★</span>
              <p>Trustpoint</p>
            </div>
            <div className="rating-box">
              <p>4.9★</p>
            </div>
          </div>
        </div>
      </div>
      <section className="section-marque-text bb-blog">
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <i className="icon-asterisk"></i>
                <span className="text-slider">
                  Website Design & Development
                </span>
                <i className="icon-asterisk"></i>
                <span className="text-slider">Mobile App Development</span>
                <i className="icon-asterisk"></i>
                <span className="text-slider">E-Commerce Development</span>
                <i className="icon-asterisk"></i>
                <span className="text-slider">SEO Services</span>
                <i className="icon-asterisk"></i>
                <span className="text-slider">SMM Services</span>
                <i className="icon-asterisk"></i>
                <span className="text-slider">PPC Services</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
