import React from "react";
import "./TestimonialSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  FaQuoteLeft,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaStar,
} from "react-icons/fa";

const testimonials = [
  {
    text: "I must confess that Navika Digital is an excellent company with which to collaborate. I hired them to create my e-commerce website, and they have done a commendable job. They provided me with the website before the deadline",
    name: "Sundaram Prakash",
    title: "CEO (Out Thought Taxation)",
    rating: 4.9,
    platform: "instagram",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    text: "I was planning to set up my startup business, and I was in search of a team that could develop a robust, innovative and magnificent mobile app for my business. Surprisingly Navika Digital helped me to get potential leads and queries coming from my app.",
    name: "Tayo",
    title: "",
    rating: 4.9,
    platform: "facebook",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    text: "Being a business owner, I have to look after all the operations of my businesses. I have been fortunate enough to hire Navika Digital for digital marketing. I am delighted with their work, and they have helped my business grow.",
    name: "Lusia Oates",
    title: "Founder (Net Capital)",
    rating: 4.9,
    platform: "twitter",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    text: "I must confess that Navika Digital is an excellent company with which to collaborate. I hired them to create my e-commerce website, and they have done a commendable job. They provided me with the website before the deadline",
    name: "Sundaram Prakash",
    title: "CEO (Out Thought Taxation)",
    rating: 4.9,
    platform: "instagram",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    text: "I was planning to set up my startup business, and I was in search of a team that could develop a robust, innovative and magnificent mobile app for my business. Surprisingly Navika Digital helped me to get potential leads and queries coming from my app.",
    name: "Tayo",
    title: "",
    rating: 4.9,
    platform: "facebook",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    text: "Being a business owner, I have to look after all the operations of my businesses. I have been fortunate enough to hire Navika Digital for digital marketing. I am delighted with their work, and they have helped my business grow.",
    name: "Lusia Oates",
    title: "Founder (Net Capital)",
    rating: 4.9,
    platform: "twitter",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

const platformIcons = {
  instagram: <FaInstagram color="#E1306C" />,
  facebook: <FaFacebook color="#1877F2" />,
  twitter: <FaTwitter color="#1DA1F2" />,
};

const TestimonialPage = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-wrapper">
        <div className="testimonial-header">
          <h4>Clients Testimonials</h4>
          <h2>How Our Clients Have Praised Our Business Services</h2>
        </div>
        <div className="testimonial-content">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2000 }}
            loop={true}
            speed={2000}
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={35}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1, slidesPerGroup: 1 },
              640: { slidesPerView: 1, slidesPerGroup: 1 },
              768: { slidesPerView: 2, slidesPerGroup: 1 },
              1024: { slidesPerView: 3, slidesPerGroup: 1 },
            }}
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-card">
                  <div className="testimonial-quote-top">
                    <FaQuoteLeft size={40} />
                    <span className="testimonial-platform-icon">
                      {platformIcons[item.platform]}
                    </span>
                  </div>
                  <hr className="testimonial-quote-divider" />
                  <p className="testimonial-text">{item.text}</p>

                  <div className="testimonial-footer">
                    <div className="testimonial-bubble">
                      <img src={item.image} alt={item.name} />
                      <div className="testimonial-info">
                        <strong>{item.name}</strong>
                        {item.title && <p>{item.title}</p>}
                      </div>
                      <span className="testimonial-rating">
                        <FaStar size={12} /> {item.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialPage;
