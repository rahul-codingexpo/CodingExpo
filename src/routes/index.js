import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Consulting from "../pages/services/Consulting";
import WebDev from "../pages/services/WebDev";
import WebDevApp from "../pages/services/webDevApp";
import UIUX from "../pages/services/UIUx";
import ECommerce from "../pages/services/Ecommerce";
import HybridApp from "../pages/services/HybridApp";
import AndroidApp from "../pages/services/AndroidApp";
import IOS from "../pages/services/Ios";
import SEO from "../pages/services/SEO";
import PPC from "../pages/services/PPC";
import ScrollToTop from "../components/ScrollToTop";
import SMM from "../pages/services/SMM";
import MailMarketing from "../pages/services/MailMarketing";
export default function AllRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-company" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/services">
          <Route path="consulting" element={<Consulting />} />
          <Route path="web-development" element={<WebDev />} />
          <Route path="web-app-development" element={<WebDevApp />} />
          <Route path="ui-ux" element={<UIUX />} />
          <Route path="eCommerce-app-development" element={<ECommerce />} />
          <Route path="hybrid-mobile-app-development" element={<HybridApp />} />
          <Route path="android-app-development" element={<AndroidApp />} />
          <Route path="ios-development" element={<IOS />} />
          <Route path="seo" element={<SEO />} />
          <Route path="pay-per-click-services" element={<PPC />} />
          <Route path="social-media-management" element={<SMM />} />
          <Route path="email-Marketing" element={<MailMarketing />} />
        </Route>
      </Routes>
    </>
  );
}
