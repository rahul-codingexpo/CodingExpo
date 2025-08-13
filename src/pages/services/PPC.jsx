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
    title: "Search Ads",
    icon: <FaPaintBrush />,
    desc: "Search ads are displayed in the search engine when a user searches for keywords or any products and gets results in the text form.",
  },
  {
    id: 2,
    title: "Shopping ads",
    icon: <FaMobileAlt />,
    desc: "Shopping displays are the uppermost part of the search engine, where images of products, prices, e-commerce websites, and more are given.",
  },
  {
    id: 3,
    title: "Video Ads",
    icon: <FaCogs />,
    desc: "A fruitful video ad in a Google campaign can help you target the right customers. Creating eye-catching videos can grab your audience's attention.",
  },
  {
    id: 4,
    title: "Display Ads",
    icon: <FaChartLine />,
    desc: "Display ads are generally used for branding and impressions. They are banner ads you can see on Google and their partner sites.",
  },
  {
    id: 5,
    title: "Video Campaigns",
    icon: <FaBullhorn />,
    desc: "Video campaigns are a great way to get consumers' attention.",
  },
  {
    id: 6,
    title: "App Campaigns",
    icon: <FaCloud />,
    desc: "App campaigns are for mobile or web apps that allow users to install or download ads.",
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
              Business Leads, <span className="blue">PPC Services </span>
              Campaign Management{" "}
            </h1>
          </div>
        </div>
        <p className="hero-desc">
          PPC (Pay per Click) services are provided by a Search engine, which
          allows customers to get web traffic and business leads through paid
          campaigns. It is an instant method to get visibility and online
          presence in search engines. PPC is generally a pain campaign
          management focused on buying traffic and queries through paid listing,
          ad copy, high- value business-oriented keywords, Geolocation targets,
          etc. It requires expertise and deep knowledge of search engine paid
          marketing. Therefore, choosing a prevalent digital marketing firm that
          can easily accomplish a PPC campaign for your website and drive
          optimum ROI (Return on Investment) for your business becomes
          significant. Coding Expo is a spellbound PPC management Company and
          all over the world.
        </p>
        <button className="discuss-btn">Let’s Discuss {">"}</button>
      </section>
      {/* Detailed Services */}
      <section className="detailed-services">
        <h2>Our PPC Management and Strategy</h2>
        <ul>
          <li>
            <h4>Business-Oriented Keyword Suggestion</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Our PPC specialist applies advanced tactics for deep keyword
                analysis per your business's requirements. We classify that
                keyword as one that could get you enormous web traffic and
                queries that naturally grow your business.
              </div>
            </p>
          </li>
          <li>
            <h4>Campaign Setting and Structure</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Our PPC gurus are adept at setting campaigns effectively based
                on the client's business theme. A structured campaign is the
                first ladder of success in PPC advertisement, and we understand
                it better because of our consistent learning in a campaign
                setting.
              </div>
            </p>
          </li>
          <li>
            <h4>Compelling PPC Ad Copy</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                PPC ad copy should be attractive and customized so that users
                click on the website and go through the business. Our talented
                content writers write catchy, business-oriented ads that
                influence customers. We are the finest PPC Services in Noida
                that focus on consumer benefits..
              </div>
            </p>
          </li>
          <li>
            <h4>Structured Bid Management</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                We are PPC experts and want your money to be invested in the
                right place. Our team of PPC experts ensures that you place bids
                only on keywords that can fetch web traffic and business for
                you. We target keywords that are less competitive but highly
                searchable by users.
              </div>
            </p>
          </li>
          <li>
            <h4>Landing Page Optimization</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                If a landing page is not optimized smartly, your PPC ad will
                likely not yield the desired ROI. Landing page optimization can
                improve your click-through rate, ad quality score, and,
                eventually, ROI on ad spend.
              </div>
            </p>
          </li>
          <li>
            <h4>Conversion Tracking Setup</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                We monitor leads and conversions through the paid ad campaign.
                Our conversion tracking setup ensures that conversions and leads
                are coming from which source. We make certain that the campaign
                tracking setup can provide insights into campaign progress.
              </div>
            </p>
          </li>
        </ul>
      </section>

      {/* Service Highlights */}
      <section className="service-highlights">
        <h2>Determine the Potent</h2>
        <p className="subheading">
          Our PPC Company in Noida provides services that include
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
          <h2>Hire us for your PPC Services.</h2>
          <p>
            Once you hire us for PPC management services, we can assure you that
            we will only rest once we bring the expected outcomes. We recognize
            the psyche of every business, and after observing your business
            theme and objective, it is our duty to run a fruitful PPC campaign
            and fetch the anticipated ROI
          </p>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
