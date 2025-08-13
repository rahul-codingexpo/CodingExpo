import React from "react";
import "./Consulting.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import image from "../../assets/bg-1.jpg";
import TechImage from "../../assets/technology1.jpg";
import LiImage from "../../assets/new-img1.png";
import MailChimp from "../../assets/Tools/mailChimp.jpeg";
import Sendinblue from "../../assets/Tools/sendinBlue.png";
import Mailerlite from "../../assets/Tools/mailerLite.jpeg";
import ZohoCampaign from "../../assets/Tools/zoho-campaigns.png";
import Converkit from "../../assets/Tools/convertKit.jpeg";
import Brevo from "../../assets/Tools/brevo.png";
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
    title: "Interaction with Different Audiences",
    icon: <FaPaintBrush />,
    desc: "Email marketing helps you to get potential users and also you can connect with different audience. These audience can be your loyal customers.",
  },
  {
    id: 2,
    title: "Develop customer loyalty",
    icon: <FaMobileAlt />,
    desc: "Email marketing is not only about pitching for your service and products, but it is also about getting in touch with your audience. You can send them wishes from time to time",
  },
  {
    id: 3,
    title: "Business expansion",
    icon: <FaCogs />,
    desc: "One of the trusted ways to expand your business is to enhance your customer acquisition skills. Email marketing is the best practice for customer acquisition and reaching to your potential clients.",
  },
  {
    id: 4,
    title: "Quick and Time Saving",
    icon: <FaChartLine />,
    desc: "Email marketing tools can help you sending thousands of mails within couple of minutes. You kust need professional email marketers to perform the job.",
  },
  {
    id: 5,
    title: "Monitoring of Analytics",
    icon: <FaBullhorn />,
    desc: "After sending emails, it is also important to analyze the results and feedback. Email markers closely observe the results and then make strategy accordingly.",
  },
  {
    id: 6,
    title: "Inspecting Email Campaigns",
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
              Business Leads,{" "}
              <span className="blue">Growth and Customer Acquisitions </span>
              That is What Email Marketing Does
            </h1>
          </div>
        </div>
        <p className="hero-desc">
          More than 3 billion users across the globe utilize email daily for
          interaction. The active users of emails are far more than any other
          platform. Now can you imagine what does your business is missing while
          not getting email marketing as a tool for getting customers and leads?
          Are you capitalizing the perks of email marketing in your business
          marketing and promotion? If not, then what is the use of holding your
          mind anymore. Catch the chance to align your business with the
          appropriate audience at the correct time and improve your sales with
          Coding Expo email marketing services. We are first rate email
          marketing agency that perform whatever it takes to amplify the
          business revenue of the client. Therefore, appoint Coding Expo as your
          email marketing agency for business-driven email campaigns. We will
          compose campaign that complement your organizational purpose
          precisely.
        </p>
        <button className="discuss-btn">Let’s Discuss {">"}</button>
      </section>
      {/* Detailed Services */}
      <section className="detailed-services">
        <h2>What Involve in Our Email Marketing Campaigns</h2>
        <ul>
          <li>
            <h4>Studying of Targeted Audience</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                An email marketing campaign become fruitful and profitable when
                you have accurate identification of your actual interested
                audience. When you study your audience behavior, pattern and
                interest, it allows you to under their choice, hopes and
                intention of mal recipients. We compose precise email sign up
                forms to extract entire details needed for study. We also ensure
                that we don’t overburden this form and make it easy for
                recipient.
              </div>
            </p>
          </li>
          <li>
            <h4>Campaign Tracking and Reporting</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Regular inspection and reporting of campaign reflect its
                progress and scope of development. Evaluating campaign is
                essential because it can provide you the insights on how your
                campaign is going and what you need to do for the improvement.
                At Coding Expo, we extensively inspect the campaign outcomes to
                understand all insights and data. Moreover, our email marketing
                leaders also provide their valuable inputs and prepare report.
                They also give their recommendations on revision of the campaign
                to make it successful.
              </div>
            </p>
          </li>
          <li>
            <h4>Marketing Automation</h4>
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
            <h4>Optimizing Emails</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                Writing and drafting emails is not sufficient, because a simple
                email cannot appeal anyone. Acting as a frontrunning email
                marketing service provider in India, we look into the email and
                make it presentable. We optimize email and make it appealing for
                the recipients. We also utilized state of the art tools
                including segmentation, analytics, recipient history to confirm
                that the recipient receive the email in accurate email address.
                We conduct A/B testing to augment open and click through rates.
                We employ relevant efforts to produce emails that precisely
                customized for your business welfare.
              </div>
            </p>
          </li>
          <li>
            <h4>Strategizing Campaign</h4>
            <p>
              <div className="p-img">
                <img src={LiImage} alt="css-image" />
              </div>
              <div className="p-content">
                A unified and eye-pleasing email template and design ensure the
                campaign’s success. Our email marketers are well learned in
                giving business profiting email that can address your business
                concerns. Our effectively designed emails can attract
                recipient’s mind. We compose appealing and useful CTAs which can
                influence email recipient to respond actively and act. We
                construct email for the accomplishment of your commercial goals
                that can be targeting fresh audience or refocusing on old one.
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
          Why Email Marketing is Effective for your business
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
          <h2>Tools We Use in Email Marketing</h2>
        </div>

        <div className="tools-grid-wrapper">
          <div className="tools-image">
            <img src={TechImage} alt="UI/UX Tools" />
          </div>
          <div className="tools-grid">
            <div className="tool">
              <img src={MailChimp} alt="Mailchimp" />
              <p>Mailchimp</p>
            </div>
            <div className="tool">
              <img src={Sendinblue} alt="Sendinblue" />
              <p>Sendinblue</p>
            </div>
            <div className="tool">
              <img src={Mailerlite} alt="MailerLite" />
              <p>MailerLite</p>
            </div>
            <div className="tool">
              <img src={ZohoCampaign} alt="ZohoCampaign" />
              <p>Zoho Campaign</p>
            </div>
            <div className="tool">
              <img src={Converkit} alt="convertkit" />
              <p>ConvertKit</p>
            </div>
            <div className="tool">
              <img src={Brevo} alt="Brevo" />
              <p>Brevo</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
