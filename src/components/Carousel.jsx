import React, { useEffect } from "react";
import Slider from "react-slick";
import "./Carousel.css";
import s1 from "../assets/slide1.jpg";
import s2 from "../assets/slide2.jpg";
import mask from "../assets/mask.png";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [
  {
    bg: s1,
    title: "Robust Web and Digital Solution to Build A Brand",
    subtitle1: " 700+ trusted our clients",
    subtitle2:
      "8+ Years of Expertise in Accelerating Web and Digital Solutions ",
    buttonText: "Explore our Services",
    buttonLink: "#",
    animatedImg: mask,
  },
  {
    bg: s2,
    title: "Robust Web and Digital Solution to Build A Brand",
    subtitle1: "700+ trusted our clients",
    subtitle2:
      "8+ Years of Expertise in Accelerating Web and Digital Solutions",
    buttonText: "Explore our Services",
    buttonLink: "#",
    animatedImg: mask,
  },
];

export default function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    fade: true,
    speed: 1000,
    cssEase: "linear",
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        {slides.map((s) => (
          <div className="slide">
            <img src={s.bg} alt="bg_image" />
            <div className="overlay"></div>
            <div className="content">
              <h2>
                ↗ &nbsp; <u>{s.subtitle1}</u>
              </h2>
              <h1>{s.title}</h1>
              <p>{s.subtitle2}</p>
              <div className="slide-btn">
                <a href={s.buttonLink} className="btn">
                  {s.buttonText}
                </a>
              </div>
            </div>
            <img src={s.animatedImg} alt="" className="animated-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
