import Carousel from "../components/Carousel";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PartnersSection from "./PartnersSection";
import About from "./About";
import Service from "./ServicesSection";
import ServiceWeProvide from "./ServicesWeProvide";
import CTASection from "./CTASection";
import Testimonials from "./TestimonialSection";
import Enquiry from "./EnquiryPage";
function Home() {
  return (
    <div className="home-container">
      <div className="home-carousel">
        <Carousel />
      </div>
      <PartnersSection />
      <About />
      <Service />
      <ServiceWeProvide />
      <CTASection />
      <Testimonials />
      <Enquiry />
    </div>
  );
}

export default Home;
