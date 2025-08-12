import React from "react";
import "./Payment.css";
import qr from "../assets/Tools/main-qr.jpg";
import copy from "../assets/Tools/copy.png";
import bhimUpi from "../assets/Tools/bhim-upi-image.jpg";
import razorpay from "../assets/Tools/razorpay.png";
import paypal from "../assets/Tools/PayPal.png";
import { useEffect, useRef } from "react";
export default function PaymentPage() {
  const copyText = () => {
    navigator.clipboard.writeText("9643054453@okbizaxis");
    alert("UPI ID copied!");
  };

  const razorpayFormRef = useRef(null);

  useEffect(() => {
    if (!razorpayFormRef.current) return;
    const existingScript = razorpayFormRef.current.querySelector(
      "script[src='https://checkout.razorpay.com/v1/payment-button.js']"
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.setAttribute("data-payment_button_id", "pl_QDnQD1x7H6xrEn");
      script.async = true;
      razorpayFormRef.current.appendChild(script);
    }
  }, []);

  return (
    <div>
      <section className="breadcumb-section relative">
        <div className="payment-tf-container">
          <div className="title-inner center">
            <h1 className="title text-white mb-18">Payment</h1>
            <div className="title-group text-white">
              <a href="/">Home</a>
              <a href="#">Pay here</a>
            </div>
          </div>
        </div>
      </section>

      <div className="payment-wrapper">
        {/* QR Section */}
        <div className="qr-card">
          <h2 className="company-name">CodingExpo Technology Pvt.Ltd</h2>
          <p className="phone-number">+91 96430 54453</p>

          <img src={qr} alt="upi-qr" className="qr-image" />

          <div className="upi-id">
            <span>9643054453@okbizaxis</span>
            <button className="copy-btn" onClick={copyText}>
              <img src={copy} alt="copy" />
            </button>
          </div>

          <div className="bhim-upi">
            <img src={bhimUpi} alt="bhim-upi" />
          </div>

          <p className="note">* Scan from Any UPI Application to Pay.</p>
        </div>

        {/* Payment Options */}
        <div className="payment-options">
          {/* Razorpay */}
          <div className="razorpay-card">
            <img src={razorpay} alt="razorpay" className="razorpay-logo" />
            <form ref={razorpayFormRef}></form>
          </div>

          {/* PayPal */}
          <div className="paypal-card">
            <img src={paypal} alt="paypal" className="paypal-logo" />
            <form
              action="https://www.paypal.com/ncp/payment/MBRJKHYEECGJQ"
              method="post"
              target="_blank"
            >
              <input type="submit" value="Pay Now" className="paypal-btn" />{" "}
              <br />
              <img
                src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg"
                alt="cards"
                className="paypal-cards"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
