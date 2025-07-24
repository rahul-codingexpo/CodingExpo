import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./PartnersSection.css";
import clutch from "../assets/brand_logo/clutch.png";
import Codeable from "../assets/brand_logo/codeable.png";
import GoodFirms from "../assets/brand_logo/goodfirms.png";
import Facebook from "../assets/brand_logo/facebook.png";
import Google from "../assets/brand_logo/google.png";
import { GiBullseye } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { PiHandCoinsDuotone } from "react-icons/pi";

const logos = [
  {
    name: "Codeable",
    img: Codeable,
  },
  {
    name: "GoodFirms",
    img: GoodFirms,
  },
  {
    name: "Clutch",
    img: clutch,
  },
  {
    name: "Facebook",
    img: Facebook,
  },
  {
    name: "Google",
    img: Google,
  },
  {
    name: "Codeable",
    img: Codeable,
  },
  {
    name: "GoodFirms",
    img: GoodFirms,
  },
  {
    name: "Clutch",
    img: clutch,
  },
  {
    name: "Facebook",
    img: Facebook,
  },
  {
    name: "Google",
    img: Google,
  },
];

const InfoBox = ({ icon, title, description }) => {
  return (
    <div className="col-md-4">
      <div className="icon-box">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <h3 className="title">{title}</h3>
        <p className="des">{description}</p>
      </div>
    </div>
  );
};

const PartnersSection = () => {
  return (
    <section className="section-partner bg-1">
      <div className="tf-container">
        {/* Logo Slider */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={5}
              spaceBetween={10}
              loop={true}
              speed={4000}
              grabCursor={true}
              freeMode={true}
              freeModeMomentum={false}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              className="brand-logo"
            >
              {logos.map((logo, i) => (
                <SwiperSlide key={i}>
                  <img src={logo.img} alt={logo.name} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Info Boxes */}
        <div className="row mb--10em">
          <InfoBox
            icon={<GiBullseye />}
            title="Digitized Solutions"
            description="We believe in delivering excellent digitized solutions in an innovative way and perspective"
          />
          <InfoBox
            icon={<HiOutlineLightBulb />}
            title="Industry Expertise"
            description="Our web development and Digital experts are masters in their field and execute what industry needs"
          />
          <InfoBox
            icon={<PiHandCoinsDuotone />}
            title="Proven Results"
            description="Our web development and digital services provide proven result with budget friendly expenses"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
