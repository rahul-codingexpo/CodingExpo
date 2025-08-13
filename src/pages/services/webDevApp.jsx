import React from "react";
import "./Consulting.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import image from "../../assets/bg-1.jpg";
import TechImage from "../../assets/technology1.jpg";
import LiImage from "../../assets/new-img1.png";
import react1 from "../../assets/Tools/react1.png";
import angular1 from "../../assets/Tools/angular2.png";
import postgre1 from "../../assets/Tools/postgreSql.png";
import python1 from "../../assets/Tools/python-img.jpeg";
import mongo1 from "../../assets/Tools/mongodb-img.png";
import node1 from "../../assets/Tools/nodeJs.png";
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
    title: "Web Portals",
    icon: <FaPaintBrush />,
    desc: "Our web application team crafts bespoke web portals that deliver streamlined accessibility to important details and practices, enhance business, and improve customer experience.",
  },
  {
    id: 2,
    title: "Analytic Web Apps",
    icon: <FaMobileAlt />,
    desc: "Our analytic web apps are useful for providing supportive features for risk management, big data analysis, business intelligence, customer acquisition, and many more.",
  },
  {
    id: 3,
    title: "Supply Chain Management Apps",
    icon: <FaCogs />,
    desc: "Our supply chain management web apps are useful for businesses to handle inventory, channelize logistics and smooth other business operations.",
  },
  {
    id: 4,
    title: "Enterprises Web Apps",
    icon: <FaChartLine />,
    desc: "We create the most updated and expandable enterprise web apps that enhance efficiency and support flawless interaction.",
  },
  {
    id: 5,
    title: "Online Web Services",
    icon: <FaBullhorn />,
    desc: "We have already developed a range of online web services, including XaaS, SaaS, IaaS and PaaS, that deliver agile solutions for organizations.",
  },
  {
    id: 6,
    title: "Customer-Facing Apps",
    icon: <FaCloud />,
    desc: "We have crafted interactive and robust customer-facing web apps that accelerate customer communication, channelize services and boos user’s contentment.",
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
              <span className="blue">
                Trusted Web Application Development Services{" "}
              </span>
            </h1>
          </div>
        </div>
        <p className="hero-desc">
          Coding Expo has achieved perfection in creating web applications and
          software for different business niches. People and businesses have
          trusted us for scalable web application development services. As an
          extremely trusted web application development company, we craft web
          applications that resonate with modern business requirements. Invest
          in authentic web programming expertise, flexible project management
          structure and secure development framework with Coding Expo. Our web
          application developers are qualified enough to design web portals,
          customer-facing applications, enterprise web apps, supply chain
          management apps, ecommerce web apps and more.
        </p>
        <button className="discuss-btn">Let’s Discuss {">"}</button>
      </section>
      {/* Detailed Services */}
      <section className="detailed-services">
        <h2>Why Pick Coding Expo As your Web App Development Company</h2>
        <ul>
          <li>
            <h4>Evolving development actions:</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                With respect to web app development services, we make certain to
                present safe and maintainable projects through agile web-based
                application development. We begin with a first-time discussion
                and complete it to accomplish the end project. Our intuitive
                focus on detailing and devotion to brilliance in the program has
                become indomitable. Taking honor of a web application
                development firm, our wise creators blend contemporary
                techniques with aesthetic design to provide web apps that
                surpass the customer’s hopes.
              </div>
            </p>
          </li>
          <li>
            <h4>On-time project accomplishment and delivery:</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                We have a set history of accomplishing projects before and
                within the deadline. Our intelligent web application masters
                operate things wisely to match with your time frame and targets.
                We ensure the readiness and testing authenticity of web apps
                before they go live for the public domain.
              </div>
            </p>
          </li>
          <li>
            <h4>Continuous and clear interaction:</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                We sustain honest, clear and consistent interaction with our
                clients. We keep them informed about the progress and current
                happenings in their project so that they can keep monitoring our
                work. We also recommend any inputs if they want. Our web
                application professionals keep you in the loop in every phase of
                creation.
              </div>
            </p>
          </li>
          <li>
            <h4>Advanced framework usage</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Our experience has exceeded a decade, and we have developed web
                apps for various industries and businesses, including ecommerce,
                B2B, B2C, travel, healthcare, online education, finance and many
                more. Our web application squad has fruitfully completed and
                delivered projects to more than 500 clients. We use technologies
                including Node.js, React.Js, MongoDB, Vue.js, Python etc.
              </div>
            </p>
          </li>
          <li>
            <h4>Robust and fast accessing front end for web apps:</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Your web apps need to have quick loading time, great user
                experience, and up-to-date UI/UX design to stand ahead of your
                rivals. We make certain that your business performs excellently
                and sets you apart from others through our flourishing web apps.
              </div>
            </p>
          </li>
          <li>
            <h4>Eliminate Web Obstacles with Veteran Consultants:</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                many companies can develop web apps, but few can build
                technically strong, secure, standardized, universally acclaimed
                web apps, and Coding Expo is one of them. Our crew crafts web
                apps that synchronize technology with your business to make it
                accessible, easy to use and acceptable among your potential
                users.
              </div>
            </p>
          </li>
        </ul>
      </section>

      {/* Service Highlights */}
      <section className="service-highlights">
        <h2>Determine the Potent</h2>
        <p className="subheading">Types of Web Apps We Deliver</p>
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
          <h2>
            What Technologies We Use in Developing Fantastic Web Applications
          </h2>
          <p>
            Coding Expo, an extremely appreciated custom web application
            development agency in India, prepares industry-centric web apps and
            delivers holistic functionality. Our web applications are secure,
            encrypted and backed with high-safety features.
          </p>
        </div>

        <div className="tools-grid-wrapper">
          <div className="tools-image">
            <img src={TechImage} alt="UI/UX Tools" />
          </div>
          <div className="tools-grid">
            <div className="tool">
              <img src={react1} alt="react" />
              <p>React</p>
            </div>
            <div className="tool">
              <img src={angular1} alt="angular" />
              <p>Angular</p>
            </div>
            <div className="tool">
              <img src={postgre1} alt="postgre" />
              <p>PostgreSQL</p>
            </div>
            <div className="tool">
              <img src={node1} alt="node" />
              <p>Node.js</p>
            </div>
            <div className="tool">
              <img src={mongo1} alt="mongodb" />
              <p>MongoDB</p>
            </div>
            <div className="tool">
              <img src={python1} alt="python" />
              <p>Python</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
