import React from "react";
import "./Consulting.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import image from "../../assets/bg-1.jpg";
import TechImage from "../../assets/technology1.jpg";
import LiImage from "../../assets/new-img1.png";
import figma1 from "../../assets/Tools/figma.avif";
import photoshop1 from "../../assets/Tools/photoshop.png";
import illustrator1 from "../../assets/Tools/illustrator.png";
import coral1 from "../../assets/Tools/corel-draw.jpeg";
import canva1 from "../../assets/Tools/canva.png";
import indesign1 from "../../assets/Tools/indesign.png";
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
    title: "UX Audit",
    icon: <FaPaintBrush />,
    desc: "Our expert UI/UX designer conducts an in-depth analysis of your website or digital product and drafts an inclusive UX audit report. Such insights help in creating excellent UX/UI designs.",
  },
  {
    id: 2,
    title: "Wireframing & Prototyping",
    icon: <FaMobileAlt />,
    desc: "Our Prototyping and wireframing practices focus on presenting fundamental design, interactive design & highly trusted project models.",
  },
  {
    id: 3,
    title: "Web app UI UX Design",
    icon: <FaCogs />,
    desc: "Coding Expo presents UI UX design for web applications so that these apps deliver the outcomes that the customers expect.",
  },
  {
    id: 4,
    title: "Mobile App UI UX Design",
    icon: <FaChartLine />,
    desc: "The success of a mobile app depends on its user interface and user experience. That is why we focus on and work on robust mobile app UI UX design.",
  },
  {
    id: 5,
    title: "UI UX Design Consulting",
    icon: <FaBullhorn />,
    desc: "Apart from creating seamless designs, our UX and UI designers give their valuable feedback and consultancy for the welfare of digital products and web and mobile apps.",
  },
  {
    id: 6,
    title: "UX Testing",
    icon: <FaCloud />,
    desc: "After creating intuitive and user-centric UX designs for websites and apps, we conduct UX testing to ensure that the design is interactive.",
  },
];

const UIUX = () => {
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
              <span className="blue">UI UX Design Services</span>
            </h1>
          </div>
        </div>
        <p className="hero-desc">
          With respect to the honor of becoming a rapidly elevating UI UX design
          company, Coding Expo has woven visually fantastic and functionally
          robust web solutions along with nurturing clients' demands. We have a
          myriad of UI/UX design solutions and groundbreaking competence, which
          allow us to present interactive and visually sound designs for
          websites and other digital products. A website and digital product
          that provides easy navigation, appealing look, and aesthetic elements
          in the design are under user interface (UI) and user experience design
          (UX). Often, people are confused by both these terms and consider them
          to be the same, but actually, they are different from each other.
          Though both have a single objective, which is to deliver a unified and
          interactive experience to the users, both UI and UX designs are
          separate from each other.
        </p>
        <button className="discuss-btn">Let’s Discuss {">"}</button>
      </section>
      {/* Detailed Services */}
      <section className="detailed-services">
        <h2>
          How Navika Digital is Unique and Better from Other UI/UX Design
          Companies
        </h2>
        <ul>
          <li>
            <h4>Data-Backed Inputs:</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                We study data related to the product and present it to the
                client. We gather information on the basis of performance
                indicators and convert data into practical intuitions. The
                benefit of a data-backed decision is that we easily understand
                the accurate direction to go. Surpassing competitors and
                boosting profitability becomes flawless when we adopt
                data-driven inputs.
              </div>
            </p>
          </li>
          <li>
            <h4>Matching User's Aspirations:</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                It is the biggest challenge to search for the correct emotions
                and words showcased in the project for users. You may end up
                creating a blunder if you cannot represent the features and
                interactions that the user doesn't understand. The user's
                emotion mapping tools are helpful to monitor and find selling
                and shopping behavior. Our UX designer implements such
                applications and makes certain that all good happens to the
                final product.
              </div>
            </p>
          </li>
          <li>
            <h4>User-Focused:</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                The objective of UI and UX design services is to pay attention
                to the user's perspective and aspirations. Once we understand
                the needs of users, we will take actions to make the project
                fruitful. Our UI? UX design solutions always concentrate on
                developing enhanced ROI for the consumers and improving user
                engagement. We cope with business motives with design
                components. We adopt interactive features to create flexible and
                forward-thinking designs.
              </div>
            </p>
          </li>
          <li>
            <h4>Building Spectacular UI/UX Designs:</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Building Spectacular UI/UX Designs: Our interactive UI and UX
                designs complement the expectations of different businesses. We
                blend technology, creativity and commercial aspects of business
                altogether. Our designs have tactically benefitted from making
                extensive & user-friendly interfaces.
              </div>
            </p>
          </li>
        </ul>
      </section>

      {/* Service Highlights */}
      <section className="service-highlights">
        <h3>Our Services</h3>
        <h2>Determine the Potent</h2>
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
      {/* UI/UX Tools Section */}
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
              <img src={figma1} alt="Figma" />
              <p>Figma</p>
            </div>
            <div className="tool">
              <img src={photoshop1} alt="Photoshop" />
              <p>PhotoShop</p>
            </div>
            <div className="tool">
              <img src={illustrator1} alt="Illustrator" />
              <p>Illustrator</p>
            </div>
            <div className="tool">
              <img src={coral1} alt="Corel Draw" />
              <p>Corel Draw</p>
            </div>
            <div className="tool">
              <img src={canva1} alt="Canva" />
              <p>Canva</p>
            </div>
            <div className="tool">
              <img src={indesign1} alt="InDesign" />
              <p>InDesign</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UIUX;
