import React from "react";
import Slider from "react-slick";
import "./Carousel.css";
import s1 from "../assets/slide1.jpg";
import s2 from "../assets/slide2.jpg";
import mask from "../assets/mask.png";
const slides = [
  {
    bg: s1,
    title: "Robust Web and Digital Solution to build To build a Brand",
    subtitle1: " 700+ trusted our clients",
    subtitle2: "This is the first slide subtitle ",
    buttonText: "Explore our Services",
    buttonLink: "#",
    animatedImg: mask,
  },
  {
    bg: s2,
    title: "Robust Web and Digital Solution To build a Brand",
    subtitle1: "700+ trusted our clients",
    subtitle2: "Here’s some more info on slide two",
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
              <a href={s.buttonLink} className="btn">
                {s.buttonText}
              </a>
            </div>
            <img src={s.animatedImg} alt="" className="animated-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
