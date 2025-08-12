import React from "react";
import "./Consulting.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import image from "../../assets/bg-1.jpg";
import TechImage from "../../assets/technology1.jpg";
import LiImage from "../../assets/new-img1.png";
import {
  FaMobileAlt,
  FaPaintBrush,
  FaChartLine,
  FaBullhorn,
  FaCogs,
  FaCloud,
} from "react-icons/fa";
import css1 from "../../assets/Tools/css1.png";
import html1 from "../../assets/Tools/html5.png";
import js1 from "../../assets/Tools/js1.png";
import react1 from "../../assets/Tools/react1.png";
import shopify1 from "../../assets/Tools/shopifyy1.png";
import wordpress1 from "../../assets/Tools/wordpress-6942722_640.webp";

const services = [
  {
    id: 1,
    slug: "web-development",
    title: "Valuable Website Development Services",
    icon: <FaPaintBrush />,
    desc: "Our web developer’s squad forever researches with out-of-the-box innovation to make your website authentic so it entices your potential audience.",
  },
  {
    id: 2,
    slug: "web-app-development",
    title: "Static Website Development",
    icon: <FaMobileAlt />,
    desc: "We have a static web development team that looks after creating static websites and makes sure every project fits according to modern technology and business demands.",
  },
  {
    id: 3,
    slug: "ui-ux",
    title: "Dynamic Website Development",
    icon: <FaCogs />,
    desc: "We have created many fantastic dynamic websites that are functionally strong aesthetically appealing. Our dynamic website development work is at par excellence",
  },
  {
    id: 4,
    slug: "seo",
    title: "Ecommerce Website Development",
    icon: <FaChartLine />,
    desc: "Our group of developers is intelligent and masters in developing spectacular ecommerce websites for your online shopping business.",
  },
  {
    id: 5,
    slug: "social-media-management",
    title: "WordPress Development",
    icon: <FaBullhorn />,
    desc: "We have a WordPress web development team, and they are skilled in all types of CMS development including WordPress.",
  },
  {
    id: 6,
    slug: "pay-per-click-services",
    title: "Shopify Development",
    icon: <FaCloud />,
    desc: "Being a topmost Shopify websites, we have enhanced our visibility across different online platforms and search engines. We create customized Shopify websites for our clients.",
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
              Reputed <span className="blue">Web Development </span>
              Company{" "}
            </h1>
          </div>
        </div>
        <p className="hero-desc">
          Websites are the representation of your business when you want to take
          it to the online platform. Navika Digital is a proficient website
          development company that has produced prolific projects for different
          businesses. It has taken web development and design to the peak level.
          We have been praised in many international forums because of our
          sensible approach and client-driven thinking. We use state-of-the-art
          techniques for website development that raise the standard of business
          enhancement,
        </p>
        <button className="discuss-btn">Let’s Discuss {">"}</button>
      </section>
      {/* Detailed Services */}
      <section className="detailed-services">
        <h2>Our Result-Centric Web Development Services</h2>

        <ul>
          <li>
            <h4>Search Engine Friendly Website</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Nowadays, only creating a website is not sufficient. One must
                have a website that is SEO-friendly. The term SEO friendly means
                your website should be developed so that search engines can
                accept and allow it for indexing and crawling. The lack of SEO
                friendly website interface means you may not get an online
                presence, search engine ranking, web traffic and eventually
                business leads. Navika Digital creates and performs SEO-centric
                websites for all businesses and clients.
              </div>
            </p>
          </li>
          <li>
            <h4>Mobile Friendly Responsive Websites</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                A website needs to pass the criteria of responsive and mobile
                friendliness. Today, more than 70% of the website traffic comes
                from mobile devices. You may not be able to skip the advantages
                of web traffic coming from mobile devices. Moreover, if your
                website is not adjusting and responsive to mobile and other
                devices apart from computers and laptops, then you may lose your
                potential customers and business leads. Our website development
                comes with completely mobile friendliness and responsive nature.
              </div>
            </p>
          </li>
          <li>
            <h4>CMS Based Websites</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                We make an intuitive CM-based website that easily integrates
                with the backend, front- end and user’s perspective. One can
                easily modify, publish and delete the content present in the
                website because of robust CMS-based website development. Our CMS
                web development services can cut the time-consuming process, and
                you can update your business website quickly with one go.
              </div>
            </p>
          </li>
          <li>
            <h4>OAppealing UI/UX interfaces</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Apart from vigorous backend development, the fantastic web
                developers at Navika Digital do their tasks with complete
                devotion. Developer’s team confirms that your website appears as
                an eye-thrilling experience to all your visitors and users. Our
                developers conduct intensive research to design communicative
                and attractive UI/UX interfaces to create fantastic and
                profitable businesses that harmonize with your business’s
                purposes.
              </div>
            </p>
          </li>
          <li>
            <h4>Simple and Effortless Website Navigation</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                We have a squad of web developers who confirm that the website
                development course of action complements it with an easy
                navigation feature. It means your website’s users and visitors
                can navigate from one of the websites to another easily with no
                hurdles. Users can rapidly redirect and access different pages
                of the website without any laborious effort.
              </div>
            </p>
          </li>
          <li>
            <h4>Split Inspection Approach</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                We use split inspection approach to examine the campaigns
                fluctuation based on two sperate alternatives. After that we
                settle on the accurate and relevant approach between the both
                alternative and then prepare to send emails to interested
                recipients..
              </div>
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
          <h2>Tools We Use in web development</h2>
          <p>
            Since we have been appreciated for our sincere work in the web
            development domain, we have applied superb technologies, tools, and
            programming languages to develop websites. Our website creators have
            comprehensive knowledge of frameworks, libraries, and programming
            applications. That is why all our gifted web developers prepare
            high-grade quality that delivers spectacular user experience. Find
            out the list of technologies we utilize for website development
            services
          </p>
        </div>

        <div className="tools-grid-wrapper">
          <div className="tools-image">
            <img src={TechImage} alt="UI/UX Tools" />
          </div>
          <div className="tools-grid">
            <div className="tool">
              <img src={css1} alt="css" />
              <p>CSS</p>
            </div>
            <div className="tool">
              <img src={html1} alt="HTML" />
              <p>HTML</p>
            </div>
            <div className="tool">
              <img src={js1} alt="js" />
              <p>JavaScript</p>
            </div>
            <div className="tool">
              <img src={react1} alt="react" />
              <p>React</p>
            </div>
            <div className="tool">
              <img src={wordpress1} alt="wordpress" />
              <p>Wordpress</p>
            </div>
            <div className="tool">
              <img src={shopify1} alt="shopify" />
              <p>Shopify</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
