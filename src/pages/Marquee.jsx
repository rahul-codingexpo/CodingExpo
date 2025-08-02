import React from "react";
import "./Marquee.css";

const MarqueePage = () => {
  return (
    <section className="section-marque-text bb-blog">
      <div className="marquee-wrapper text-slider">
        <div className="marquee-inner to-left">
          <ul className="marqee-list d-flex">
            <li className="marquee-item">
              <i className="icon-asterisk"></i>
              <span className="text-slider">Website Design & Development</span>
              <i className="icon-asterisk"></i>
              <span className="text-slider">Mobile App Development</span>
              <i className="icon-asterisk"></i>
              <span className="text-slider">E-Commerce Development</span>
              <i className="icon-asterisk"></i>
              <span className="text-slider">SEO Services</span>
              <i className="icon-asterisk"></i>
              <span className="text-slider">SMM Services</span>
              <i className="icon-asterisk"></i>
              <span className="text-slider">PPC Services</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MarqueePage;
