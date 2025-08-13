import React from "react";
import "./Consulting.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import image from "../../assets/bg-1.jpg";
import TechImage from "../../assets/technology1.jpg";
import LiImage from "../../assets/new-img1.png";
import react1 from "../../assets/Tools/react1.png";
import flutter from "../../assets/Tools/flutter.png";
import android from "../../assets/Tools/android-studio.png";
import kotlin from "../../assets/Tools/kotlin-img1.png";
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
    title: "Developing Client-Focused Hybrid Apps",
    icon: <FaPaintBrush />,
    desc: "Our specialty is composing customer-driven apps with an intuitive user interface, design, and, ultimately, consumer contentment.",
  },
  {
    id: 2,
    title: "Upgradeable Apps Development Concept",
    icon: <FaMobileAlt />,
    desc: "We confirm that every hybrid app that represents a specific business doesn't suffer because of its lack of scalability scope.",
  },
  {
    id: 3,
    title: "Light on Your Budget",
    icon: <FaCogs />,
    desc: "You don't have to stress out about the pricing and expenses associated with developing the app because we confirm that we only charge reasonable fees.",
  },
  {
    id: 4,
    title: "Maintenance is Easy",
    icon: <FaChartLine />,
    desc: "We save all coding and programming data in a shared cloud, which facilitates our maintenance.",
  },
  {
    id: 5,
    title: "Optimizing App Loading Time",
    icon: <FaBullhorn />,
    desc: "Our hybrid apps load quickly because all codes, content, and photos are easily displayed in the central directory and on the app's front page.",
  },
  {
    title: "Inspecting Campaigns",
    icon: <FaCloud />,
    desc: "Before sending email, we analyze every email campaign to find out whether it is relevant, error free and spam free.",
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
                Hybrid Mobile Application Development Company
              </span>
            </h1>
          </div>
        </div>
        <p className="hero-desc">
          Coding Expo is a foremost hybrid mobile app development company that
          has thought- thrilling expertise in developing hybrid apps. We have a
          crew of hybrid app developers who are competent in software
          development, visual design, UI/UX design, and so on. Our familiarity
          with the digital ecosystem leads us to craft the ideal combination of
          functionality, invention, and artistic and visual fineness. We consult
          with you to pick the optimum and robust hybrid development tools. We
          also apply high-tech systems to make the framework of customized
          applications that appropriately complement your business aspirations.
        </p>
        <button className="discuss-btn">Let’s Discuss {">"}</button>
      </section>
      {/* Detailed Services */}
      <section className="detailed-services">
        <h2>What Includes Hybrid App Development Services</h2>
        <ul>
          <li>
            <h4>Hybrid Application Development</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                We have appointed seasoned app developers to bring first-rate
                hybrid app development services worldwide, irrespective of
                business category and industry. Whether you have a seed stage
                company, established business, big corporation, or enterprise,
                our task force can customize remedies in accordance with your
                business prerequisite.
              </div>
            </p>
          </li>
          <li>
            <h4>Hybrid Application Design</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Coding Expo is a guiding force in capitalizing on hybrid
                application design and composing robustly responsive,
                client-focused, and expandable hybrid apps for the varied
                platforms, screen sizes, frameworks, browsers, or devices
                comprising Android or iOS. We have a high- caliber workforce
                with the brain and heart to construct such impressive apps.
              </div>
            </p>
          </li>
          <li>
            <h4>Hybrid Application Integration</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Performing as a frontrunner, Coding Expo's app developers are
                masterful with upgraded mechanisms and techniques for the
                precise incorporation of hybrid apps with other third- party
                apps.
              </div>
            </p>
          </li>
          <li>
            <h4>Flutter Native Development</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Acting as a savvy Hybrid mobile apps creator, we employ Flutter
                to build multiplatform apps with impeccable efficiency,
                appealing interfaces, and stunning solutions.
              </div>
            </p>
          </li>
          <li>
            <h4>Hybrid Apps Maintenance & Assistance</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                We also harness unrivaled hybrid app maintenance and Assistance,
                which confirms that applications maximize productivity
                throughout the elevated rush hours..
              </div>
            </p>
          </li>
          <li>
            <h4>HTML5 App Development</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                We employ a cluster of accomplished and adept app developers
                grasping profound insights to present safe, expandable, and
                demand-based HTML5 apps. We will compose these apps to
                accomplish your expectations. We deploy hybrid app engineers who
                are incredibly practiced and familiar with correct learning to
                construct an app that matches your desires.
              </div>
            </p>
          </li>
          <li>
            <h4>React Native App Development</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                With rapid, strong, and up-to-the-mark efficiency, our
                developers are well-read to capitalize on React Native's
                competency to make vigorous, enlightening, and client-driven
                hybrid mobile apps.
              </div>
            </p>
          </li>
          <li>
            <h4>Hybrid App Migration</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Switching from one technology to another and updating hybrid app
                programming and architecture is right with our contemporary
                application migration acumen. One can achieve perfect
                productivity through the app without even being concerned about
                migration issues because we perform hybrid app migration with
                high caliber.
              </div>
            </p>
          </li>
        </ul>
      </section>

      {/* Service Highlights */}
      <section className="service-highlights">
        <h2>Determine the Potent</h2>
        <p className="subheading">
          Why Join Hands with Coding Expo Hybrid Mobile App Development Company
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
          <h2>Explore Futuristic Hybrid Mobile App Architecture</h2>
          <p>
            Take benefits of authentic caliber and more than 10 years of
            familiarity and adeptness in nurturing revolutionary apps in all
            hybrid architecture. We hand over demand-based, breathtaking, and
            long-standing hybrid apps by harnessing the following technologies.
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
              <img src={flutter} alt="flutter" />
              <p>Flutter</p>
            </div>
            <div className="tool">
              <img src={android} alt="android studio" />
              <p>Android Studio</p>
            </div>
            <div className="tool">
              <img src={kotlin} alt="kotlin" />
              <p>Kotlin</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
