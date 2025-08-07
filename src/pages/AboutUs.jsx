import React, { useEffect, useState } from "react";
import "./AboutUs.css";
import AboutImg from "../assets/about1_img.jpg";
import { FiCheck } from "react-icons/fi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import mainImage from "../assets/about2.jpg";
import avatar2 from "../assets/avt-team2.jpg";
import avatar1 from "../assets/avt-team1.jpg";
import avatar3 from "../assets/avt-team3.jpg";
import avatar4 from "../assets/avt-team4.jpg";
import Marquee from "./Marquee";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import VideoAbout from "../assets/video-about.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/pagination";
import reviewer1 from "../assets/reviewer/Zubair-Ahmad.jpeg";
import reviewer2 from "../assets/reviewer/Sundaram Prakash.jpeg";
import reviewer3 from "../assets/reviewer/Tayo.jpeg";
import reviewer4 from "../assets/reviewer/Lusia-Oates.jpg";
import reviewer5 from "../assets/reviewer/Krishna-Kumar.jpeg";
import Clutch from "../assets/partnerAboutLogo/clutch.png";
import Facebook from "../assets/partnerAboutLogo/facebook.png";
import Codeable from "../assets/partnerAboutLogo/codeable.png";
import Goodfirms from "../assets/partnerAboutLogo/goodfirms.png";
import Google from "../assets/partnerAboutLogo/google.png";

const testimonials = [
  {
    img: reviewer1,
    text: "I recently hired Coding Expo to revamp my website and am thrilled with the results I recently hired Coding Expo to revamp my website and am thrilled with the results I recently hired Coding Expo to revamp my website and am......",
    name: "Zubair Ahmad",
    role: "",
  },
  {
    img: reviewer2,
    text: "Coding Expo is a great company to work with. I use them for much more than just building a website...",
    name: "Sundaram Prakash J. Hare",
    role: "CEO (Out Thought Taxation)",
  },
  {
    img: reviewer3,
    text: "As a small business owner, I was intimidated by branding and promoting online. Coding Expo made it easy...",
    name: "Tayo",
    role: "",
  },
  {
    img: reviewer4,
    text: "I recently hired Coding Expo to revamp my website and am happy with the results...",
    name: "Lusia Oates",
    role: "Founder (Net Capital)",
  },
  {
    img: reviewer5,
    text: "This company is AMAZING. They are very professional. I hired them to build my website...",
    name: "Krishna Kumar",
    role: "Founder (krishnaflower.com)",
  },
];
const logos = [Facebook, Google, Codeable, Goodfirms, Clutch];

const AboutUs = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const { ref: funfactsRef, inView: funfactsInView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  const getSlideClass = (index) => {
    if (index === current) return "active";
    if (index === (current - 1 + total) % total) return "prev";
    if (index === (current + 1) % total) return "next";
    return "inactive";
  };

  return (
    <div>
      {/* Breadcrumb Section */}
      <section className="breadcumb-section relative">
        <div className="AboutUs-tf-container">
          <div className="title-inner center">
            <h1 className="title text-white mb-18">About Us</h1>
            <div className="title-group text-white">
              <a href="/">Home</a>
              <a href="#">About Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-about-us about-us-page pd-section relative">
        <div className="tf-container about-us-grid">
          {/* Left Content */}
          <div className="left-content">
            <div className="about-us-content">
              <div className="heading-title">
                <span className="sub-title texts-blue font-man">About Us</span>
                <h2 className="title">
                  Adopt Modernized Designing, and Marketing Approach with
                  <span className="texts-blue"> Coding Expo</span>
                </h2>
              </div>
              <ul className="icon-listing">
                <li className="flex-three">
                  <i className="icon-Check">
                    <FiCheck />
                  </i>
                  <p className="font-man">Competent and Well-versed Squad</p>
                </li>
                <li className="flex-three">
                  <i className="icon-Check">
                    <FiCheck />
                  </i>
                  <p className="font-man">
                    Assured Results with Proven Strategies
                  </p>
                </li>
              </ul>
              <a href="#" className="button-src">
                Read More {" >"}
                <i className="icon-angle-right"></i>
              </a>
            </div>
          </div>
          {/* Middle Image */}
          <div className="middle-content relative">
            <div className="about-us-images">
              <img src={AboutImg} alt="image" />
            </div>
          </div>

          {/* Right Counter */}
          <div className="right-content">
            <div className="about-us-counter">
              <h3 className="title">
                Result-Driven Web Design <a href="#">and </a> Development
                Company
                <br />
                in India
              </h3>
              <p className="des">
                Coding Expo has been functioning as a frontrunning
                <b>
                  Web Development, Mobile App Development and Digital Marketing
                  Company.
                </b>{" "}
                We take every project as an urgent task and complete it with all
                necessary devotion and aspirations. Our digital marketing, web
                development, mobile app development and content development team
                is always there to bring outcomes that clients can experience in
                their enhance ROI and business popularity.
              </p>
              <div className="line"></div>
              <div className="flex-one" ref={aboutRef}>
                <div className="counter-style1 tf-counters">
                  <div className="icon">
                    <i className="icon-costumer-11">
                      <FaPeopleGroup />
                    </i>
                  </div>
                  <div className="number-counter">
                    <span className="counter-number">
                      {aboutInView ? (
                        <CountUp start={0} end={700} duration={3} suffix="+" />
                      ) : (
                        "0+"
                      )}
                    </span>
                  </div>
                  <p className="des">Satisfied Customers</p>
                </div>
                <div className="counter-style1 tf-counters">
                  <div className="icon">
                    <i className="icon-costumer-11">
                      <FaPeopleGroup />
                    </i>
                  </div>
                  <div className="number-counter">
                    <span className="counter-number">
                      {aboutInView ? (
                        <CountUp start={0} end={750} duration={3} suffix="+" />
                      ) : (
                        "0+"
                      )}
                    </span>
                  </div>
                  <p className="des">Project Complete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="tf-container-full feature-about-wrap">
          <div className="feature-grid">
            <div className="tf-icon-box">
              <div className="icon">
                <i className="icon-expert">
                  <FaHandshake />
                </i>
              </div>
              <h2 className="title">
                <a href="#">Passionate</a>
              </h2>
              <p className="des">
                We are thoroughly passionate in our digital marketing, web
                development and mobile app development skills and always ensure
                to work sincerely and complete the commitment on time
              </p>
            </div>
            <div className="tf-icon-box">
              <div className="icon">
                <i className="icon-hands">
                  <FaHandshake />
                </i>
              </div>
              <h2 className="title">
                <a href="#">Respectful</a>
              </h2>
              <p className="des">
                Our relation with clients and their project is always admirable
                and respectful. We love our work and respect every individual
                effort in making this company top of the town
              </p>
            </div>
            <div className="tf-icon-box">
              <div className="icon">
                <i className="icon-ownership">
                  <FaHandshake />
                </i>
              </div>
              <h2 className="title">
                <a href="#">Ownership</a>
              </h2>
              <p className="des">
                Coding Expo is a firm that has a dare to take the ownership of
                every project and provide the digital marketing and web
                solutions that client has demanded from us.
              </p>
            </div>
            <div className="tf-icon-box">
              <div className="icon">
                <i className="icon-wrench">
                  <FaHandshake />
                </i>
              </div>
              <h2 className="title">
                <a href="#">Clients Services</a>
              </h2>
              <p className="des">
                Our way of handling client’s project is exactly same as we are
                feeding ourselves with excellence, seamlessness, accuracy and
                wisdom.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*quote section*/}
      <section className="pd-section">
        <div className="tf-container">
          <div className="quote-container">
            <div className="quote-image">
              <img src={mainImage} alt="Person" />
            </div>
            <div className="quote-content">
              <p className="quote-text">
                " Overnight success is an illusion because a winning day comes
                only after consistently doing effortful practices with
                commitment. So never hesitate to think big and put in more
                effort because your actions decide your life".
              </p>
              <span className="quote-author">--- Harriet Tubman</span>

              <div className="quote-bottom">
                <ul className="avatar-list">
                  <li>
                    <img src={avatar1} alt="Customer 1" />
                  </li>
                  <li>
                    <img src={avatar2} alt="Customer 2" />
                  </li>
                  <li>
                    <img src={avatar3} alt="Customer 3" />
                  </li>
                  <li>
                    <img src={avatar4} alt="Customer 4" />
                  </li>
                </ul>
                <div className="trusted-text">
                  <p>10m+ Trusted Global Customers</p>
                  <div className="underline-shape"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Marquee />
      <section className="funfacts-section" ref={funfactsRef}>
        <div className="tf-container">
          <div className="fact-widget">
            {/* Left Side Text */}
            <div className="funfacts-text">
              <span className="funfacts-subtitle">Company Fun Fact</span>
              <h2 className="funfacts-title">
                Behind the Scenes <br />
                Surprising Fun Facts <br />
                About Coding Expo
              </h2>
            </div>

            {/* Right Side Counters */}
            <div className="funfacts-counters">
              <div className="counter-item">
                <div className="counter-icon">
                  <FaCheckCircle />
                </div>
                <div className="counter-content">
                  <h3>
                    {funfactsInView && (
                      <CountUp start={0} end={750} duration={3} suffix="+" />
                    )}
                  </h3>

                  <p>Project Complete</p>
                </div>
              </div>

              <div className="counter-item">
                <div className="counter-icon">
                  <FaStar />
                </div>
                <div className="counter-content">
                  <h3>
                    {funfactsInView && (
                      <CountUp start={0} end={700} duration={3} suffix="+" />
                    )}
                  </h3>

                  <p>Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="video-about-us">
        <div className="video-container">
          <div className="video-row">
            <div className="col-lg-12">
              <div className="video-about">
                <img
                  src={VideoAbout}
                  alt="About Video"
                  className="video-image"
                />
                <div className="btn-video">
                  <button className="play-button">
                    <FaPlay />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-video">
        <div className="tf-container">
          <div className="testimonial-heading-title center">
            <span className="testimonial-sub-title">Our Testimonials</span>
            <h2 className="testimonial-title">
              700+ Clients Say <span>About Us</span>
            </h2>
          </div>

          <div className="testimonial-slider-wrapper">
            {testimonials.map((item, index) => (
              <div
                className={`about-testimonial-card testimonial-slide ${getSlideClass(
                  index
                )}`}
                key={index}
              >
                <div className="about-testimonial-image">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="about-testimonial-content">
                  <p className="about-testimonial-text">{item.text}</p>
                  <div className="about-testimonial-bottom">
                    <p className="about-testimonial-name">
                      {item.name}
                      {item.role && (
                        <>
                          <span>/</span>
                          <span className="about-testimonial-role">
                            {item.role}
                          </span>
                        </>
                      )}
                    </p>
                    <div className="about-testimonial-stars">★★★★★</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="partners-section">
        <div className="partners-container">
          <div className="partners-heading">
            <span className="sub-title">Global Partners</span>
            <h2>
              We’ve 700+ Global <span className="highlight">partners</span>
            </h2>
          </div>

          {/* Top Swiper (Right to Left) */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={3000}
            className="partners-swiper"
          >
            {logos.concat(logos).map((logo, index) => (
              <SwiperSlide key={`top-${index}`}>
                <div className="partner-card">
                  <img src={logo} alt="Partner Logo" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Swiper (Left to Right) */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            className="partners-swiper"
          >
            {logos.concat(logos).map((logo, index) => (
              <SwiperSlide key={`bottom-${index}`}>
                <div className="partner-card">
                  <img src={logo} alt="Partner Logo" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
