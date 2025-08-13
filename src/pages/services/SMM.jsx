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
    title: "Brand Goodwill and Loyalty",
    icon: <FaPaintBrush />,
    desc: "With social media management, you can Increase social visibility and brand loyalty for your business.",
  },
  {
    id: 2,
    title: "Improves Web Traffic",
    icon: <FaMobileAlt />,
    desc: "Our social media campaign will help businesses bring massive web traffic to the landing page.",
  },
  {
    id: 3,
    title: "Uplift User Engagement and Interaction",
    icon: <FaCogs />,
    desc: "Social media optimization, marketing, and management help boost followers and engagement and acquire potential consumers.",
  },
  {
    id: 4,
    title: "Create a Favorable Atmosphere for Profit-making",
    icon: <FaChartLine />,
    desc: "Our campaign can make your business more profitable and viral.",
  },
  {
    id: 5,
    title: "Improve Customer Service",
    icon: <FaBullhorn />,
    desc: "Social media marketing campaigns also help improve customer service because advertisers know what clients actually want and how to maximize their benefits.",
  },
  {
    id: 6,
    title: "Retarget Skipped Customers",
    icon: <FaCloud />,
    desc: "With our rigorous social media ads campaign, we can also retarget skipped users who have paid attention to the services but skipped them because of some reason.",
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
              <span className="blue">Magnificent Social Media </span>
              Management Company
            </h1>
          </div>
        </div>
        <p className="hero-desc">
          With the enhancement of digitalization, several businesses have formed
          a new texture for growth. Social media management has become an
          integral part of branding and promotion strategy. Digital presence and
          online exposure of many businesses are trending. Now, managing social
          reputation through various popular social media channels becomes
          necessary. Coding Expo is functioning as a dominant social media
          management company in India. Social media branding is getting massive
          responses as well as providing a large customer base for your
          business. Not just one business but every industry is going through
          with this spellbound social media era. It is the biggest medium to
          connect with your customers or followers and makes them aware of your
          entire future venture. Now, you can see TV personalities, film actors,
          and other reputed organizations that are using social media for their
          image branding.
        </p>
        <button className="discuss-btn">Let’s Discuss {">"}</button>
      </section>
      {/* Detailed Services */}
      <section className="detailed-services">
        <h2>Coding Expo Social Media Company Services</h2>
        <ul>
          <li>
            <h4>Planning a Social Media Approach for Business</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Planning a social media approach for businesses involves
                assigning a devoted social media manager. Our organization
                strategizes a social media plan of action in which we decide and
                discuss with the client how we will utilize social media to
                capitalize on their business aims. This plan may include work
                such as content creation, detecting the intended audience, and
                studying competitors.
              </div>
            </p>
          </li>
          <li>
            <h4>Preparing Content for Social Media</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Content with original ideas, creative aspects, and alignment
                with the consumer's perspective is vital for social media
                management and marketing. Social media content creation includes
              </div>
            </p>
          </li>
          <li>
            <h4>Using Graphic and Images</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Graphic design and images are essential to making your social
                media campaign lucrative and fruitful. This can involve creating
                GIFs, memes, videos, and infographics to present your brand tone
                and character to your expected followers.
              </div>
            </p>
          </li>
          <li>
            <h4>Social Media Advertising & Marketing</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Occupying the role of a market leader, Coding Expo uses social
                media advertising and marketing to convey messages and services
                to the end users. We are innovators in composing social media
                ads, posts, and videos through paid ad campaigns, ad copy
                creation, and visual designs. Our SMM will definitely help
                businesses get leads from interested buyers and eventually raise
                their revenue.
              </div>
            </p>
          </li>
          <li>
            <h4>Examining and Preparing Reports on Social Media Campaigns</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Acting like a premier social media management company, we track
                all social media campaigns and make necessary revisions based on
                feedback and insights. Additionally, we send daily reports of
                the campaign's progress and success to the client, which gives
                them a sense of trust that we are doing our work with complete
                perseverance.
              </div>
            </p>
          </li>
          <li>
            <h4>Influencer Marketing</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                During social media management, we keep managing all social
                media platforms and reverting back to responses through posts,
                comments, and messages. Additionally, we apply promotion
                strategies such as contests to increase user engagement on
                Facebook and Twitter. We also Communicate and connect with other
                pages, communities, and groups to improve your brand visibility.
                Moreover, we also take the help of social media influencers to
                expand the reach of your brand.
              </div>
            </p>
          </li>
        </ul>
      </section>

      {/* Service Highlights */}
      <section className="service-highlights">
        <h2>Determine the Potent</h2>
        <p className="subheading">
          What You Get from Social Media Management and Marketing
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
          <h2>Hire Coding Expo as Your Social Media Management Company</h2>
          <p>
            Once you associate with Coding Expo, you will definitely get
            elevated social media management services that naturally enhance
            your brand credibility and customer engagement.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
