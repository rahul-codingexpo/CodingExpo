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
import SMM from "../pages/services/SMM";
import MailMarketing from "../pages/services/MailMarketing";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/consulting" element={<Consulting />} />
      <Route path="/WebDevelopment" element={<WebDev />} />
      <Route path="/webAppDev" element={<WebDevApp />} />
      <Route path="/uiUx" element={<UIUX />} />
      <Route path="/eCommerce" element={<ECommerce />} />
      <Route path="/hybridApp" element={<HybridApp />} />
      <Route path="/androidApp" element={<AndroidApp />} />
      <Route path="/ios" element={<IOS />} />
      <Route path="/seo" element={<SEO />} />
      <Route path="/ppc" element={<PPC />} />
      <Route path="/smm" element={<SMM />} />
      <Route path="/mailMarketing" element={<MailMarketing />} />
    </Routes>
  );
}
