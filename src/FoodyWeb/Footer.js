import React from "react";
import "../Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>🍴 Foody</h2>
          <p>
            Foody is your go-to platform to explore the best restaurants near you. Whether you want
            to dine in, order online, or discover new tastes – we've got you covered!
          </p>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>📧 Email: support@foody.com</p>
          <p>📞 Phone: +91 98765 43210</p>
          <p>📍 Address: Sector 17, Gurgaon, Haryana</p>
        </div>

        <div className="footer-section-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Foody. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
