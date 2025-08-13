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
    title: "Tireless Assistance with a stubborn commitment",
    icon: <FaPaintBrush />,
    desc: "Access the perk of tireless support and staunch devotion. We listen to all users' issues, and problems.",
  },
  {
    id: 2,
    title: "Open Approach with Clarity",
    icon: <FaMobileAlt />,
    desc: "Our supple conceptualization allows consumers to get their desired iOS application in reality.",
  },
  {
    id: 3,
    title: "Organized project handling",
    icon: <FaCogs />,
    desc: "We will assign your development issues, complications, and aspirations to the allocated project manager",
  },
  {
    id: 4,
    title: "Quick Project Deliverance",
    icon: <FaChartLine />,
    desc: "Our app engineers can create an exact timeframe to deliver the project fruitfully",
  },
  {
    id: 5,
    title: "Collaborative Involvement of Team and Client",
    icon: <FaBullhorn />,
    desc: "We empower our workflows and office atmosphere with agile framework applications to fruitfully abridge the communication gap",
  },
  {
    id: 6,
    title: "Shake Hands with Us",
    icon: <FaCloud />,
    desc: "We have vowed that quality and excellence will always be our main factors in iOS app development.",
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
              <span className="blue">IOS Mobile App Development Services</span>
            </h1>
          </div>
        </div>
        <p className="hero-desc">
          Ecommerce businesses have changed their gear from websites to
          smartphones. Now, people use smartphones extensively for online
          shopping instead of laptops or PC. It eventually compels us to develop
          an e-commerce mobile app to make the shopping experience better and
          more enjoyable. Ecommerce app development is not a new thing for
          businesses, but in a couple of years, it has tremendously drawn
          attention. Various businesses have begun to so that they can provide
          their services and goods online via ecommerce apps. If you want to
          remain in the competition in the ecommerce industry, then developing
          an ecommerce app should be your priority. Coding Expo is an ecommerce
          app development agency . We present mobile app development, including
          ecommerce apps. Tailored app development is our unique selling point.
          We practice making a spectacular app for your online shopping business
          or retail store so that it can easily align with your business aims.
          Our motive is to eventually raise your revenue, ROI, and sales, as
          well as deliver a great user experience to your consumers. Coding Expo
          is a rare blend of functionally rich and artistically soothing in
          terms of app development for online shopping businesses. Our
          accomplished and well-read ecommerce app developers hold diligence in
          next-generation technology to establish a superb ecommerce mobile
          application. Our app development can ensure that your business will
          reach the peak of achievement. Furthermore, we present extensible and
          reasonably-priced products.
        </p>
        <button className="discuss-btn">Let’s Discuss {">"}</button>
      </section>
      {/* Detailed Services */}
      <section className="detailed-services">
        <h2>Our IOS App Development Services Include</h2>
        <ul>
          <li>
            <h4>iWatch App Development</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Our capability also comprises developing fantastic WatchOS
                applications in which entire in-app features complement your
                aspirations. Moreover, we make certain that the iWatch app
                development we allocate to our app developers becomes the finest
                and one-of-a-kind product that will supply unending perks for
                consumers and users. Our iOS app development mastery enhances
                the iWatch application's usage and relevance.
              </div>
            </p>
          </li>
          <li>
            <h4>iPad App Development</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Coding Expo offers iPad subscribers a flourishing experience
                through a blend of in-depth observation, insightful metrics, and
                interactive UX/UI design. Moreover, the apps we develop aren't
                restricted to the business category. Still, we ensure that we
                develop apps in other important niches, such as games, movies,
                and service-based apps.
              </div>
            </p>
          </li>
          <li>
            <h4>Enterprise iOS App Development</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Our competent iOS app developers have the calibre to develop
                enterprise iOS apps in which they design tailored software to
                facilitate plenty of chores in organizations and businesses.
                These apps assist in reorganizing workflows, automating
                assignments, and increasing work efficiency. iOS developers
                understand integrating apps with robust features and aligning
                with organizational objectives. Our enterprise iOS apps can
                process things according to advanced technology and are flexible
                enough to adjust to evolving business desires.
              </div>
            </p>
          </li>
          <li>
            <h4>Apple TV App Development</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                We have a flock of application developers and engineers who
                draft and originate suitable TVOS apps according to your needs.
                Our iOS development mastery allows subscribers to fetch perks of
                different facilities that are usually not available on
                conventional mobile apps. Our motive is simple: to provide a
                competitive and unique product to our consumers so that they can
                get an edge in their business.
              </div>
            </p>
          </li>
          <li>
            <h4>Integrating Along with Migrating</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                We have decades of supremacy and practice in building iOS apps.
                In addition to development, we have the caliber to deliver
                all-in-one integration and migration for iOS apps. Our actions
                can elevate your stature in the online arena.
              </div>
            </p>
          </li>
          <li>
            <h4>Tailored iOS App Development</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Coding Expo has a favorable atmosphere for all budding as well
                as established app developers. They all have the penetrated
                capacity to handle tasking ambience and generate advanced
                quality strictures for your rationalized iOS app.
              </div>
            </p>
          </li>
        </ul>
      </section>

      {/* Service Highlights */}
      <section className="service-highlights">
        <h2>Determine the Potent</h2>
        <p className="subheading">
          Why Pick Coding Expo as Your iOS Mobile App Development Service
          Provider
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
