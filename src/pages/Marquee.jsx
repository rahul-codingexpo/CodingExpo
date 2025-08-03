import React from "react";
import "./Marquee.css";

const MarqueePage = () => {
  const items = [
    "Website Design & Development",
    "Mobile App Development",
    "E-Commerce Development",
    "SEO Services",
    "SMM Services",
    "PPC Services",
  ];

  const renderItems = () =>
    items.map((text, idx) => (
      <React.Fragment key={idx}>
        <i className="icon-asterisk"></i>
        <span className="text-slider">{text}</span>
      </React.Fragment>
    ));

  return (
    <section className="section-marque-text bb-blog">
      <div className="marquee-wrapper text-slider">
        <div className="marquee-inner to-left">
          <ul className="marqee-list d-flex marquee-track">
            <li className="marquee-item">{renderItems()}</li>
            <li className="marquee-item">{renderItems()}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MarqueePage;
