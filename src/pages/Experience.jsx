import React, { useEffect } from "react";
import "./Experience.css";
import imageRightservice from "../assets/slide2.jpg";

const ExperiencePage = () => {
  useEffect(() => {
    const circles = document.querySelectorAll(".progress-circle");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const percent = parseInt(el.getAttribute("data-percentage"), 10);
            el.style.setProperty("--percentage", percent);
            el.classList.add("active");
            const numberEl = el.querySelector(".percentage");
            let current = 0;
            const duration = 5000;
            const stepTime = Math.max(Math.floor(duration / percent), 15);
            const counter = setInterval(() => {
              current++;
              numberEl.textContent = `${current}%`;
              if (current >= percent) clearInterval(counter);
            }, stepTime);

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    circles.forEach((circle) => observer.observe(circle));
  }, []);

  return (
    <div className="experience-section">
      <div className="experience-left">
        <h4 className="experience-subtitle">
          360-Degree Digital Web Solutions
        </h4>
        <h2 className="experience-title">
          Consider us as your Digital & Web Solution Provider
        </h2>
        <p className="experience-description">
          Backed with some of the vibrant and crazy heads in website development
          and digital solutions has made us the foremost web design, development
          digital marketing firm. Our established work history and success
          client’s portfolio can express our stature in digital arena.
        </p>
        <div className="experience-stats">
          <div className="stat-box">
            <div className="progress-circle" data-percentage="68">
              <svg>
                <circle cx="40" cy="40" r="35"></circle>
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  className="animated-circle"
                ></circle>
              </svg>
              <div className="percentage">0%</div>
            </div>
            <div>
              <h5 className="stat-title">Business</h5>
              <h5 className="stat-subtitle">Strategy</h5>
            </div>
          </div>

          <div className="stat-box">
            <div className="progress-circle" data-percentage="93">
              <svg>
                <circle cx="40" cy="40" r="35"></circle>
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  className="animated-circle"
                ></circle>
              </svg>
              <div className="percentage">0%</div>
            </div>
            <div>
              <h5 className="stat-title">Technology</h5>
              <h5 className="stat-subtitle">Solutions</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="experience-right">
        <img
          src={imageRightservice}
          alt="Experience"
          className="experience-image"
        />
        <div className="experience-card">
          <h2>8+</h2>
          <p>Years Of Experience</p>
          <div class="icon-svg">
            <svg
              width="148"
              height="5"
              viewBox="0 0 148 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M136.265 0.615385C133.055 0.5 129.789 0.384615 126.524 0.269231C125.472 0.230769 124.365 0.230769 123.314 0.192308C120.989 0.153846 118.664 0.115385 116.34 0.0769231C115.067 0.0384615 113.738 0.0384615 112.465 0C112.078 0 111.691 0 111.359 0C110.528 0 109.698 0 108.813 0C104.994 0 101.175 0 97.3557 0C96.4701 0 95.5292 0 94.6437 0.0384615C92.3744 0.0769231 90.1606 0.0769231 87.8913 0.115385C85.3454 0.153846 82.7994 0.153846 80.2534 0.192308C76.1577 0.269231 72.0067 0.346154 67.911 0.423077C65.5311 0.461538 63.1511 0.5 60.7712 0.538462C56.6755 0.653846 52.5798 0.769231 48.4841 0.884615C46.2149 0.961538 44.001 1 41.7318 1.07692C37.47 1.26923 33.2083 1.42308 28.9466 1.57692C26.6773 1.65385 24.4081 1.73077 22.1389 1.84615C17.9325 2.07692 13.6708 2.34615 9.46437 2.61538C8.57881 2.65385 7.63791 2.73077 6.69701 2.76923C4.9259 2.88462 3.09944 3.07692 1.27299 3.23077C1.16229 3.23077 1.0516 3.26923 0.940902 3.26923C0.719513 3.26923 0.553472 3.34615 0.38743 3.46154C0.110694 3.65385 0 3.88462 0 4.11539C0 4.34615 0.110694 4.57692 0.38743 4.73077C0.608819 4.88462 0.996249 5 1.27299 5C3.48687 4.84615 5.64541 4.65385 7.8593 4.5C9.90715 4.38462 11.955 4.26923 14.0028 4.15385C16.2167 4.03846 18.4306 3.88462 20.6998 3.76923C21.5854 3.73077 22.471 3.65385 23.4119 3.61538C26.8987 3.5 30.3303 3.34615 33.8171 3.23077C35.9757 3.15385 38.1342 3.07692 40.2927 3C41.1783 2.96154 42.0639 2.92308 42.9494 2.88462C46.3809 2.76923 49.8125 2.69231 53.244 2.57692C55.3472 2.53846 57.395 2.46154 59.4982 2.42308C60.2177 2.42308 60.8819 2.38462 61.6014 2.38462C65.3097 2.30769 69.0179 2.26923 72.7262 2.19231C74.774 2.15385 76.8772 2.11538 78.9251 2.07692C79.6446 2.07692 80.4195 2.03846 81.139 2.03846C84.9579 2 88.7769 2 92.6512 1.96154C95.0311 1.96154 97.411 1.92308 99.791 1.92308C103.831 1.92308 107.927 1.92308 111.967 1.96154C112.742 1.96154 113.572 2 114.347 2C116.617 2.03846 118.83 2.07692 121.1 2.15385C122.76 2.19231 124.476 2.23077 126.136 2.26923C127.354 2.30769 128.516 2.34615 129.734 2.38462C133.221 2.5 136.763 2.65385 140.25 2.80769C141.135 2.84615 142.021 2.88462 142.906 2.92308C143.847 2.96154 144.844 3 145.784 3.07692C145.951 3.07692 146.061 3.11539 146.227 3.15385C146.615 3.19231 146.947 3.19231 147.279 3.03846C147.611 2.92308 147.832 2.69231 147.943 2.46154C148.164 1.96154 147.722 1.42308 146.947 1.26923C146.283 1.15385 145.618 1.11538 145.01 1.03846C144.567 1 144.124 0.961538 143.681 0.961538C142.796 0.884615 141.91 0.884615 141.08 0.807692C139.53 0.769231 137.87 0.692308 136.265 0.615385Z"
                fill="currentcolor"
              ></path>
            </svg>
          </div>
          <div className="rating">
            <span>★ ★ ★ ★ ★</span>
            <p>Trustpoint</p>
          </div>
          <div className="rating-box">
            <p>4.9★</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
