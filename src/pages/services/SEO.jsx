import React from "react";
import "./Consulting.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import image from "../../assets/bg-1.jpg";
import TechImage from "../../assets/technology1.jpg";
import LiImage from "../../assets/new-img1.png";
import GoogleTrend from "../../assets/Tools/google-trends.png";
import SearchConsole from "../../assets/Tools/google-search-console-logo.avif";
import Ahref from "../../assets/Tools/Ahrefs.jpg";
import Semrush from "../../assets/Tools/semrush.jpeg";
import RankTraker from "../../assets/Tools/rank-tracker.jpg";
import Backlink from "../../assets/Tools/backlink-checker-icon.avif";
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
    title: "Long-Term Genuine Results",
    icon: <FaPaintBrush />,
    desc: "Suppose you seek the expected results from SEO services in India and ensure genuine results by providing high-quality SEO services. No company can match Coding Expo's talent and devotion in that case.",
  },
  {
    id: 2,
    title: "Ethical SEO practices",
    icon: <FaMobileAlt />,
    desc: "We believe in ethical and standardized SEO services to get long-term results in search engines.",
  },
  {
    id: 3,
    title: "Proficient SEO Professionals",
    icon: <FaCogs />,
    desc: "We are filled with proficient digital marketing specialists and SEO experts who are aware of the latest search engine algorithms and work according to them to get top results.",
  },
  {
    id: 4,
    title: "Huge & Loyal Customer Base",
    icon: <FaChartLine />,
    desc: "We have a large clientele network all over India, and our valuable clients are 100% satisfied with our work Strategy.",
  },
  {
    id: 5,
    title: "Monitoring of Analytics",
    icon: <FaBullhorn />,
    desc: "After sending emails, it is also important to analyze the results and feedback. Email markers closely observe the results and then make strategy accordingly.",
  },
  {
    id: 6,
    title: "Inspecting SEO Campaigns",
    icon: <FaCloud />,
    desc: "Before sending email, we analyze every email campaign to find out whether it is relevant, error free and spam free.",
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
              <span className="blue">Best SEO Services Provider</span>
            </h1>
          </div>
        </div>
        <p className="hero-desc">
          Coding Expo is an absolutely unmatched SEO Company worldwide. We
          deliver superb internet marketing services. We have an up-to-date
          mechanism of search engine algorithm and encapsulate result-driven
          tactics to make your business website perform on top ranking in SERP
          (Search Engine Results page). We endeavor to devise a determined
          promotion approach that helps elevate the business's revenue and
          production. We are a modern and advanced digital marketing firm,
          delivering out-of- the-box results so your business gets tangible
          exposure.
        </p>
        <button className="discuss-btn">Let’s Discuss {">"}</button>
      </section>
      {/* Detailed Services */}
      <section className="detailed-services">
        <h2>How Coding Expo Start SEO Process for Clients and Businesses</h2>
        <ul>
          {/* <li>
            <p>
              The significance of the internet is undeniable from this current
              business perspective, and search engines are the most appropriate
              platforms on which your website can get a probable audience.
              Search engine optimization promotes your website and business
              according to well-planned, structured search engine algorithms.
              Basically, the search engine works from the user perspective so
              that the website gets noticed by users and you can get potential
              customers for your business. It helps you to get a high ranking in
              various search engines, including Google, Yahoo, and Bing. SEO
              works like a fertilizer for your business, creating links and
              connections (backlinks in SEO terms) that make your website
              user-friendly. Making your website viral on the search engine is
              our responsibility. We have a world-class team of digital
              marketing experts who know advanced techniques and search engine
              algorithms. They implement standardized patterns, which could
              benefit your website and business. Our SEO process includes: -
            </p>
          </li> */}
          <li>
            <h4>Consult With The Client And Define Objectives.</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                The initial action is to communicate and meet with the client.
                It is imperative to know about the organizational aims, intended
                consumers, business rivals, and their hopes for us. We help
                clients decide on web marketing purposes, including boosting
                search positions, fostering consumer interactions, and enhancing
                web traffic.
              </div>
            </p>
          </li>
          <li>
            <h4>Inspection Of The Website And Analysis</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                We practice client website inspection and study it to learn
                about technological inconsistency, content requirements, and
                existing SEO scores. The inspection includes backlink count,
                On-Page SEO, loading speed, mobile responsiveness, broken links,
                and more.
              </div>
            </p>
          </li>
          <li>
            <h4>Researching Keywords And Building Strategy</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Our search engine optimization professional practices profound
                keyword study to identify the most leveraging search terms
                applicable to your business. We also study your competitor's
                marketing tactics and their keyword approach. On the basis of
                our study and inspection, we drafted a SEO approach that
                includes targeting keywords, optimization, and content
                development.
              </div>
            </p>
          </li>
          <li>
            <h4>On-Page And Technical SEO</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Performing on-page SEO activities is vital to start an SEO
                campaign for any website. We ensure we put relevant keywords,
                create meta tags, use heading tags, interlink, and create rich
                and fresh content for on-page optimization. Technical SEO
                modification includes improving website loading time, ensuring
                the website is user- and search- engine-friendly, developing
                search-engine-friendly URLs, using HTTPS security protocols,
                optimizing crawl budget, redirecting or removing broken links,
                etc.
              </div>
            </p>
          </li>
          <li>
            <h4>Generating Fresh and High-Quality Content</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Content is the soul of an SEO campaign, and we ensure that we
                write quality content that is highly optimized according to
                search engine algorithms. We use intended keywords and reflect
                user intention in the content so that your customers can easily
                engage with your website and business.
              </div>
            </p>
          </li>
          <li>
            <h4>Creating High DA PA Backlinks</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Backlinks or link building are necessary parts of off-page SEO.
                On-page SEO alone is not sufficient to drive traffic and gain
                top search engine rankings. Creating top-grade backlinks and
                link-building is also essential. So, we do it with proven
                tactics and case studies to achieve elevated web traffic and
                rankings.
              </div>
            </p>
          </li>
          <li>
            <h4>Tracking SEO Progress and Reporting</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                We apply the finalized SEO approach with the team and client.
                After that, we will keep track of the website's progress by
                utilizing analysis tools such as Search Console and Google
                Analytics. We keep a record of every week's ranking, web
                traffic, customer engagement, and everyday reports to the
                client. We perform modifications according to the metrics and
                information from the analysis tools.
              </div>
            </p>
          </li>
        </ul>
      </section>

      {/* Service Highlights */}
      <section className="service-highlights">
        <h2>Determine the Potent</h2>
        <p className="subheading">
          Why Settle on Coding Expo Company for SEO Services
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
          <h2>Tools and SEO Tactics, we use</h2>
          <p>
            Coding Expo has already set milestones in providing outstanding
            results and performance for the business and website. We are
            consistently doing better work with the appreciation of our clients
            and the fraternity of Digital marketing. We use plenty of tools to
            make our SEO process fruitful and beneficial for clients.
          </p>
        </div>

        <div className="tools-grid-wrapper">
          <div className="tools-image">
            <img src={TechImage} alt="UI/UX Tools" />
          </div>
          <div className="tools-grid">
            <div className="tool">
              <img src={GoogleTrend} alt="GoogleTrend" />
              <p>Google Trends</p>
            </div>
            <div className="tool">
              <img src={SearchConsole} alt="search console" />
              <p>Search Console</p>
            </div>
            <div className="tool">
              <img src={Ahref} alt="Ahref" />
              <p>Ahref</p>
            </div>
            <div className="tool">
              <img src={Semrush} alt="semrush" />
              <p>SEMRUSH</p>
            </div>
            <div className="tool">
              <img src={RankTraker} alt="rank traker" />
              <p>Rank Tracker</p>
            </div>
            <div className="tool">
              <img src={Backlink} alt="Backlink" />
              <p>Backlink Checker</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
