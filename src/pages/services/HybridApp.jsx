import React from "react";
import "./Consulting.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import image from "../../assets/bg-1.jpg";
import TechImage from "../../assets/technology1.jpg";
import LiImage from "../../assets/new-img1.png";
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

const Consulting = () => {
  return (
    <div className="consulting-page">
      {/* Hero Section */}
      <section className="consulting-hero">
        <div className="hero-top">
          <div className="hero-image">
            <img src={image} alt="Consulting Banner" />
          </div>
          <div className="hero-title">
            <h1>
              Prominent{" "}
              <span className="blue">
                Digital & Web Solutions Consulting Services{" "}
              </span>
              Consulting Services{" "}
            </h1>
          </div>
        </div>
        <p className="hero-desc">
          Occupied with the industry’s finest brain and research-driven approach
          in web solutions and the digital arena, Coding Expo has curated
          scalable and profitable services for all sorts of businesses. As an
          accountable digital marketing company, we evaluate customers’
          behavior, buying patterns, intended audience and essential insights.
          Our core intention is to eventually elevate website traffic, user
          engagement, search engine ranking, and business leads. It is a
          diamond-grabbing opportunity to receive immense assistance and
          growth-centric website development, mobile app development and digital
          marketing services from us. Our exceptionally well-versed and talented
          web and digital marketing consultants provide you with the finest plan
          to establish your business in the web world and enhance your
          business’s digital visibility.
        </p>
        <button className="discuss-btn">Let’s Discuss {">"}</button>
      </section>
      {/* Detailed Services */}
      <section className="detailed-services">
        <h2>
          Restructure Your Business with Our Web and Digital Consulting Services
        </h2>
        <ul>
          <li>
            <h4>Digital Strategy Consulting</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Our digital marketing consulting company easily comprehends your
                aspirations. We line up existing and anticipated business
                outcomes, pushing your business to a high peak. Evaluating your
                web marketing service requirement, creating an extreme level of
                online marketing approach, and planning tactical organic and
                paid marketing are our fully-fledged policies for starting any
                project.
              </div>
            </p>
          </li>
          <li>
            <h4>Website Design Consulting</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Our digital marketing consulting company easily comprehends your
                aspirations. We line up existing and anticipated business
                outcomes, pushing your business to a high peak. Evaluating your
                web marketing service requirement, creating an extreme level of
                online marketing approach, and planning tactical organic and
                paid marketing are our fully-fledged policies for starting any
                project.
              </div>
            </p>
          </li>
          <li>
            <h4>Website Development Consulting</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Our digital marketing consulting company easily comprehends your
                aspirations. We line up existing and anticipated business
                outcomes, pushing your business to a high peak. Evaluating your
                web marketing service requirement, creating an extreme level of
                online marketing approach, and planning tactical organic and
                paid marketing are our fully-fledged policies for starting any
                project.
              </div>
            </p>
          </li>
          <li>
            <h4>Optimizing Emails</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Our digital marketing consulting company easily comprehends your
                aspirations. We line up existing and anticipated business
                outcomes, pushing your business to a high peak. Evaluating your
                web marketing service requirement, creating an extreme level of
                online marketing approach, and planning tactical organic and
                paid marketing are our fully-fledged policies for starting any
                project.
              </div>
            </p>
          </li>
          <li>
            <h4>Mobile App Development Consulting</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Our digital marketing consulting company easily comprehends your
                aspirations. We line up existing and anticipated business
                outcomes, pushing your business to a high peak. Evaluating your
                web marketing service requirement, creating an extreme level of
                online marketing approach, and planning tactical organic and
                paid marketing are our fully-fledged policies for starting any
                project.
              </div>
            </p>
          </li>
        </ul>
      </section>

      {/* Service Highlights */}
      <section className="service-highlights">
        <h2>Determine the Potent</h2>
        <p className="subheading">
          What Establishes <span className="blue">YourCompany</span> as a
          Prominent Web & Digital Consulting Company
        </p>
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
            </div>
          ))}
        </div>
      </section>
      <section className="uiux-tools-section">
        <div className="tools-heading">
          <h2>Tools We Use in UI/UX design</h2>
          <p>
            UX design applies to both physical and digital services/products. It
            helps in creating framework design solutions for obstacles that
            users meet while using the product or website. It focuses on
            improving the complete user experience from the beginning to the
            final phase. The objective of UX design is to deliver a product that
            makes users contented because of their efficiency. While UI design
            applies only to digital services and products. User interface design
            distillates visual aspects that enable users to align with the
            product. UI involves in making a blend of images, animation, colors,
            typography etc. User Interface design (UI) aims to customize a
            product that provides creative and visual satisfaction to users. We
            use software for UI/UX designs:
          </p>
        </div>

        <div className="tools-grid-wrapper">
          <div className="tools-image">
            <img src={TechImage} alt="UI/UX Tools" />
          </div>
          <div className="tools-grid">
            <div className="tool">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                alt="Figma"
              />
              <p>Figma</p>
            </div>
            <div className="tool">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
                alt="Photoshop"
              />
              <p>PhotoShop</p>
            </div>
            <div className="tool">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
                alt="Illustrator"
              />
              <p>Illustrator</p>
            </div>
            <div className="tool">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
                alt="Corel Draw"
              />
              <p>Corel Draw</p>
            </div>
            <div className="tool">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                alt="Canva"
              />
              <p>Canva</p>
            </div>
            <div className="tool">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
                alt="InDesign"
              />
              <p>InDesign</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
