import React from "react";
import "./Consulting.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import image from "../../assets/bg-1.jpg";
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
    title: "Relentless Devotion to Work and Project",
    icon: <FaPaintBrush />,
    desc: "We keep learning and learning during the work assignment.",
  },
  {
    id: 2,
    slug: "web-app-development",
    title: "Apply Only Validated Strategies",
    icon: <FaMobileAlt />,
    desc: "Once we get the project, we will perform rigorous research to identify the business’s potential consumers, target visitors, motive of the marketing campaign, and more.",
  },
  {
    id: 3,
    slug: "ui-ux",
    title: "Regular Monitoring and Reporting",
    icon: <FaCogs />,
    desc: "We monitor projects in every phase to ensure everything goes according to quality, standards, and client aspirations.",
  },
  {
    id: 4,
    slug: "seo",
    title:
      "Partner with Top Performing Web Development & Digital Marketing Company",
    icon: <FaChartLine />,
    desc: "Thousands of clients have partnered with us and received beyond their expectations.",
  },
  {
    id: 5,
    slug: "social-media-management",
    title: "Keeping Client in A Loop",
    icon: <FaBullhorn />,
    desc: "We have a principle that if a task or project is assigned, we must maintain continuous communication with the client.",
  },
  {
    id: 6,
    slug: "pay-per-click-services",
    title: "Complete Transparency and Honest Collaboration",
    icon: <FaCloud />,
    desc: "Our only motive is to deliver as per our commitment to our client. We believe in transparency, and our work excludes malpractice or unethical means.",
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
                Designing a website is not a hard task for competent web
                designers. But here, we don’t just design websites to complete
                the task; instead, we research rigorously and come up with a
                visionary and victorious conclusion to create a lucrative and
                business-gaining website. The website designers who work with
                our company have the pure intent and expertise to turn your idea
                into a living example. Our website design consultants always
                give businesses and clients fresh ideas, inputs and
                recommendations.
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
                The ability to implement programming skills to develop a
                brilliant website is our fundamental agenda. Coding Expo has a
                group of website developers with masters in different
                programming skills, including CSS, HTML, React.JS, JavaScript,
                and more. We have developed a myriad of websites for various
                industries and businesses. No matter what the nature of your
                business, our web development consulting team will provide you
                with the appropriate guidance to develop a robust and profitable
                website for your business.
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
                Writing and drafting emails is not sufficient, because a simple
                email cannot appeal anyone. Acting as a frontrunning email
                marketing service provider in India, we look into the email and
                make it presentable. We optimize email and make it appealing for
                the recipients. We also utilized state of the art tools
                including segmentation, analytics, recipient history to confirm
                that the recipient receive the email in accurate email address.
                We conduct A/B testing to augment open and click through rates.
                We employ relevant efforts to produce emails that precisely
                customized for your business welfare.
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
                Apart from website design and development, our agency also has
                experience delivering state-of- the-art mobile app development
                projects. Today, you don’t need an office to run a business but
                the internet and a mobile device. Mobile app interfaces are more
                interactive and user-friendly than websites. A website needs a
                browser to operate, but mobile apps don’t require it to
                function. Our mobile apps consulting team will provide the best
                recommendations for developing accurate mobile apps representing
                your business or needs.
              </div>
            </p>
          </li>
          <li>
            <h4>Planning Digital Campaign</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                The motto of our digital and web solution consulting service is
                to provide a complete plan of action for website creation,
                digital marketing, and mobile app development. We can create
                compatible and user-friendly websites. Whenever you need
                suggestions or great advice, you can easily contact our team,
                and we will guide you with a foolproof strategy to meet your
                needs.
              </div>
            </p>
          </li>
        </ul>
      </section>

      {/* Service Highlights */}
      <section className="service-highlights">
        <h2>Determine the Potent</h2>
        <p className="service-subheading">
          What Establishes YourCompany as a Prominent Web & Digital Consulting
          Company
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
    </div>
  );
};

export default Consulting;
