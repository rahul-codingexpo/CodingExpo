import React from "react";
import "./Consulting.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import image from "../../assets/bg-1.jpg";
// import TechImage from "../../assets/technology1.jpg";
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
    title: "In-depth Experience and Aptitude",
    icon: <FaPaintBrush />,
    desc: "Our android app developers have been filled with in-depth experience and aptitude in android app development.",
  },
  {
    id: 2,
    title: "Usage of Contemporary Tools and Techniques",
    icon: <FaMobileAlt />,
    desc: "We keep updating as an app development company by using the most recent tools, methodologies and techniques to develop mobile apps.",
  },
  {
    id: 3,
    title: "Quality Driven and Business centric Apps",
    icon: <FaCogs />,
    desc: "The motive of our android app developer squad is to make apps that drive quality, business revenue and raise customer base.",
  },
  {
    id: 4,
    title: "Swift and flexible development approach",
    icon: <FaChartLine />,
    desc: "We conduct profound story and analysis before developing android mobile app. After we collect all inputs and study.",
  },
  {
    id: 5,
    title: "Economical Pricing",
    icon: <FaBullhorn />,
    desc: "Our prices are light on your pocket because we understand how hard you have generated money from your job or business. That is why our pricing is economical and standard according to market.",
  },
  {
    id: 6,
    title: "Unstoppable Assistance and Consultation",
    icon: <FaCloud />,
    desc: "We assist our clients round the clock and give them valuable consultation about the suitable android mobile app for their business and individual purpose.",
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
              Access Quality-Driven{" "}
              <span className="blue">Android App Development Services</span>
            </h1>
          </div>
        </div>
        <p className="hero-desc">
          Android has sustained its stature as a front positioned mobile
          operating platform globally in 2024. The market share of android app
          is almost 72% while its biggest competitor, Apple’s iOS has only 28%
          market share throughout the similar year. It shows the dominance of
          android app development and its unending mandate in the technology
          sphere. Selecting and settling on appropriate android app development
          company can transform business operations and marketing perspectives
          for topmost brands. Starting from designing, conceptualizing,
          prototyping, development, to deployment, testing and all- time support
          is our unique selling point. Our head to toe android app development
          solutions facilitate crafting apps with robust architecture and
          encrypted outlines. Coding Expo is a salient android app development
          agency in India and squeezes a valued status in developing
          functionally rich android apps for different browser and platforms. It
          doesn’t bother our squad of android app engineer if the operating
          system, processor and size of screen are numerous, we keep
          restructuring the app with needed competence and knowhow.
        </p>
        <button className="discuss-btn">Let’s Discuss {">"}</button>
      </section>
      {/* Detailed Services */}
      <section className="detailed-services">
        <h2>What Includes in our Android Mobile App Development Services</h2>
        <ul>
          <li>
            <h4>Android App Consultation</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                You may be clueless to decide which direction you need to go
                while thinking of creating android application. Holding
                familiarity and aptitude in producing android application has
                made us the unrivaled Android Mobile App Development agency. Our
                app developers are proficient in material designing of all
                android apps. Our deep familiarity with android app creation can
                help in constructing bespoke solutions and formulate prototyping
                of the user interface and experience with the support of HTML5,
                CSS3 and other technologies
              </div>
            </p>
          </li>
          <li>
            <h4>Analysis of Architecture and Framework</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                We facilitate clients in chasing the appropriate architecture,
                framework and software engineering procedure to produce
                indomitable android app for mobile, web, native and hybrid
                platforms. We study your business rivals and detect the accurate
                perspective and method is suitable for your business. Our
                android app development journey satiates your demands with
                in-depth analysis, competence and novelty. Allow us to
                understand your business aims and we will construct a highly
                agile, relevant and user-helping mobile and web based android
                app consequently. Our contemporary know-how and information on
                accurate tools usage facilitate us in crafting android apps
                quickly than other contenders without bargaining with
                excellence.
              </div>
            </p>
          </li>
          <li>
            <h4>Analysis of Architecture and Framework</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Marketing automation is avital ingredient of email campaign. It
                facilitates a business to set powerful and durable relation with
                its audience. We have proficiency in using robust automation
                tools to send emails to the accurate audience timely.
                Subscription renewal, personalized wishes, product branding and
                other reminders are the part of automated emails.
              </div>
            </p>
          </li>
          <li>
            <h4>Guaranteed Excellence and Untiring Assistance</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Coding Expo has continued its android app development domain. It
                has sworn that the complete energy is focused on raising the
                fineness of the work and heighten the user-oriented perspective.
                Our android app gurus will make severe efforts to make android
                app qualitative and functionally advanced. In the digital
                premise, our assurance is to prepare a forum and convenience for
                your business so that it can retain significant capability to
                produce elevated ROI for you.
              </div>
            </p>
          </li>
        </ul>
      </section>

      {/* Service Highlights */}
      <section className="service-highlights">
        <h2>Determine the Potent</h2>
        <p className="subheading">
          Why Coding Expo is a Reliable Android App Development Company
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
          <h2>Work with us for Bugs-Free Android Apps development</h2>
          <p>
            We recognize the value of mobile apps today and almost every
            business and companies are heading towards to make it possible. Now
            your business is in your mobile and only one tap is enough to
            interact with consumers. Expect the fantastic android app for your
            business and make it available for all your targeted consumers with
            Coding Expo.
          </p>
        </div>
        {/* <div className="tools-grid-wrapper">
          <div className="tools-image">
            <img src={TechImage} alt="UI/UX Tools" />
          </div>
          <div className="tools-grid">
            <div className="tool">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                alt="Figma"
              />
              <p>Figma</p>
            </div>
            <div className="tool">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
                alt="Photoshop"
              />
              <p>PhotoShop</p>
            </div>
            <div className="tool">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
                alt="Illustrator"
              />
              <p>Illustrator</p>
            </div>
            <div className="tool">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
                alt="Corel Draw"
              />
              <p>Corel Draw</p>
            </div>
            <div className="tool">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                alt="Canva"
              />
              <p>Canva</p>
            </div>
            <div className="tool">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
                alt="InDesign"
              />
              <p>InDesign</p>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Consulting;
