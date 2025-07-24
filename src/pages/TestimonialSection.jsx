import React from "react";
import "./TestimonialSection.css";

const testimonials = [
  {
    id: 1,
    platformIcon: "/icons/instagram.svg",
    quote:
      "I must confess that Navika Digital is an excellent company with which to collaborate...",
    name: "Sundaram Prakash",
    role: "CEO (Out Thought Taxation)",
    avatar: "/avatars/avatar1.jpg",
    rating: "4.9",
  },
  {
    id: 2,
    platformIcon: "/icons/facebook.svg",
    quote:
      "I was planning to set up my startup business... helped me get potential leads.",
    name: "Tayo",
    role: "",
    avatar: "/avatars/avatar2.jpg",
    rating: "4.9",
  },
  {
    id: 3,
    platformIcon: "/icons/twitter.svg",
    quote:
      "Being a business owner, I have to look after all operations... helped my business grow.",
    name: "Lusia Oates",
    role: "Founder (Net Capital)",
    avatar: "/avatars/avatar3.jpg",
    rating: "4.9",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-wrapper">
      <div className="testimonial-left">
        <h5 className="testimonial-subtitle">Clients Testimonials</h5>
        <h2 className="testimonial-title">
          How Our Clients Have Praised Our Business Services
        </h2>
        <div className="testimonial-dots">
          <span className="dot active" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>

      <div className="testimonial-cards">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <div className="testimonial-top">
              <span className="quote-mark">“</span>
              <img
                src={item.platformIcon}
                alt="platform"
                className="platform-icon"
              />
            </div>
            <p className="testimonial-quote">{item.quote}</p>
            <div className="testimonial-user">
              <img src={item.avatar} alt="user" className="user-avatar" />
              <div>
                <h4 className="user-name">{item.name}</h4>
                <p className="user-role">{item.role}</p>
              </div>
              <div className="rating-badge">
                <span className="star">★</span> {item.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
