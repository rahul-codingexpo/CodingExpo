import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
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
import Enquiry from "../pages/EnquiryPage";
import Login from "../pages/login";
import PaymentPage from "../pages/payment";
import AdminPanel from "../pages/admin/AdminPanel";
import Dashboard from "../pages/admin/Dashboard";
import Leads from "../pages/admin/leads";
export default function AllRoutes({ isAuthenticated, setIsAuthenticated }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route
          path="/admin-panel"
          element={<AdminPanel setIsAuthenticated={setIsAuthenticated} />}
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="leads" element={<Leads />} />
        </Route>
        <Route path="/about-company" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/payment" element={<PaymentPage />} />
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
