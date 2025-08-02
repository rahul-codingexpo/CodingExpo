import "./Header.css";
import { HiOutlineMail } from "react-icons/hi";
import {
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="header-top">
      <div className="header-left">
        <div className="icon-text">
          <div>
            <HiOutlineMail />
          </div>
          <div>
            <span>info@codingexpo.org</span>
          </div>
        </div>
        <div className="icon-text">
          <FaMapMarkerAlt />
          <a
            href="https://maps.app.goo.gl/839nbkHRZ74BJDyN6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>S2, G-34, Block G, Sec-3, Noida, Uttar Pradesh, India</span>
          </a>
        </div>
      </div>
      <div className="header-right">
        <a
          href="https://www.facebook.com/codingexpo"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.twitter.com/codingexpo"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/company/codingexpo-technology-private-limited/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.youtube.com/@codingexpo"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default Header;
