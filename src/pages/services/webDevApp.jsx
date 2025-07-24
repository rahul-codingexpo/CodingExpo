import React from "react";
import "./Consulting.css";
import image from "../../assets/bg-1.jpg";

const WebDevApp = () => {
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
          in web solutions and the digital arena, Navika Digital has curated
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
            {/* <img
              src="https://navikadigital.com/services/..\assets\images\image-box\new-img1"
              alt=""
            /> */}
            <p>
              Our digital marketing consulting company easily comprehends your
              aspirations. We line up existing and anticipated business
              outcomes, pushing your business to a high peak. Evaluating your
              web marketing service requirement, creating an extreme level of
              online marketing approach, and planning tactical organic and paid
              marketing are our fully-fledged policies for starting any project.
            </p>
          </li>
          <li>
            <h4>Website Design Consulting</h4>
            <p>
              Our digital marketing consulting company easily comprehends your
              aspirations. We line up existing and anticipated business
              outcomes, pushing your business to a high peak. Evaluating your
              web marketing service requirement, creating an extreme level of
              online marketing approach, and planning tactical organic and paid
              marketing are our fully-fledged policies for starting any project.
            </p>
          </li>
          <li>
            <h4>Website Development Consulting</h4>
            <p>
              Our digital marketing consulting company easily comprehends your
              aspirations. We line up existing and anticipated business
              outcomes, pushing your business to a high peak. Evaluating your
              web marketing service requirement, creating an extreme level of
              online marketing approach, and planning tactical organic and paid
              marketing are our fully-fledged policies for starting any project.
            </p>
          </li>
          <li>
            <h4>Optimizing Emails</h4>
            <p>
              Our digital marketing consulting company easily comprehends your
              aspirations. We line up existing and anticipated business
              outcomes, pushing your business to a high peak. Evaluating your
              web marketing service requirement, creating an extreme level of
              online marketing approach, and planning tactical organic and paid
              marketing are our fully-fledged policies for starting any project.
            </p>
          </li>
          <li>
            <h4>Mobile App Development Consulting</h4>
            <p>
              Our digital marketing consulting company easily comprehends your
              aspirations. We line up existing and anticipated business
              outcomes, pushing your business to a high peak. Evaluating your
              web marketing service requirement, creating an extreme level of
              online marketing approach, and planning tactical organic and paid
              marketing are our fully-fledged policies for starting any project.
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
        <div className="grid">
          {[
            "Relentless Devotion to Work and Project",
            "Apply Only Validated Strategies",
            "Regular Monitoring and Reporting",
            "Keeping Client in a Loop",
            "Complete Transparency and Honest Collaboration",
            "Partner with Top Performing Web Development & Digital Marketing Company",
          ].map((title, i) => (
            <div key={i} className={`grid-item `}>
              <h4>0{i + 1}</h4>
              <h3>{title}</h3>
              <p>↗</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WebDevApp;
