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
    title: "Interactive Features and Solutions",
    icon: <FaPaintBrush />,
    desc: "Customers and users admire dynamic apps that update automatically if any recent development happens. We can grasp the psyche of the market.",
  },
  {
    id: 2,
    title: "Breathtaking UI/UX Designs",
    icon: <FaMobileAlt />,
    desc: "Alluring UI and Smooth UX amalgamation can make an ecommerce app fruitful and beneficial.",
  },
  {
    id: 3,
    title: "One-Time Investment",
    icon: <FaCogs />,
    desc: "Once you invest in an e-commerce app through Coding Expo, you are making the smartest investment decision of your life.",
  },
  {
    id: 4,
    title: "Progressive Technology",
    icon: <FaChartLine />,
    desc: "Coding Expo certifies that the commerce apps we built are the result of employing futuristic tech systems and cohesive techniques.",
  },
  {
    id: 5,
    title: "High-Caliber Quality",
    icon: <FaBullhorn />,
    desc: "Functioning as a premier ecommerce app development company in India, our programmers and app developers have long-standing wisdom .",
  },
  {
    id: 6,
    title: "Demand Based Apps",
    icon: <FaCloud />,
    desc: "Uninterrupted shopping adventure and a Proficient UI/UX mechanism make our ecommerce app better.",
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
              Coding Expo:{" "}
              <span className="blue">
                Innovative Ecommerce App Development{" "}
              </span>
              Company in India
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
        <h2>
          Why Coding Expo is Ideal for E-Commerce Application Development?
        </h2>
        <ul>
          <li>
            <h4>Functionally Robust and Visually Pleasing Apps</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                We wisely handle the synchronization among programming, visual
                effects, market insights, and breakthrough technology. Every app
                and development project at Coding Expo must undergo testing and
                auditing before going live.
              </div>
            </p>
          </li>
          <li>
            <h4>Proficiency in Cross Platform App Development</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Our ecommerce app coders prepare coding in a way that it can
                easily accepted and adjusted on all platforms. For example, if
                we have coded an app for the Android platform, then it will
                reflect the same in iOS, and we don't need to code again for the
                other platform.
              </div>
            </p>
          </li>
          <li>
            <h4>Seasoned and Committed In-House Task Force</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Our programmers and developers are all part of our in-house
                workforce, which eventually means that we don't give work to any
                outsourcing agency or freelancer. Our flock of programmers and
                app developers has already infused evolved programming into
                their veins.
              </div>
            </p>
          </li>
          <li>
            <h4>Agility in Selecting the Finest Resources</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Our customers have the liberty to pick one of our talented,
                mastered, and veteran app developers from our fantastic
                workforce. All our app programmers are the biggest assets for us
                and our clients.
              </div>
            </p>
          </li>
          <li>
            <h4>An Inclusive Package</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                We obtain an inclusive bundle of project managers, UI/UX
                developers, mobile app developers, digital marketers, web
                developers, website designers, and content writers to accomplish
                your business's desires.
              </div>
            </p>
          </li>
          <li>
            <h4>Continuous Journey in Ecommerce App Development</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                We are close to celebrating our achievement every second in the
                ecommerce domain because of our fruitful delivery, customer
                contentment, and round-the-time assistance. We have wholesome
                understanding, familiarity, and an extensive assortment of
                wisdom throughout this expedition that keeps us innovative every
                time.
              </div>
            </p>
          </li>
        </ul>
      </section>

      {/* Service Highlights */}
      <section className="service-highlights">
        <h2>Determine the Potent</h2>
        <p className="subheading">
          What Benefits Businesses Will Get with Our Customized eCommerce App
          Development?
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
