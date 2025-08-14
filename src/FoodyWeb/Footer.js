import React, { useContext } from "react";
import "../Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import UserContext from "../utils/userContext";

function Footer() {
  const {loggedinUser}= useContext(UserContext)

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
          <h3>Contact Us : (CEO - {loggedinUser})</h3>
          <p>📧 Email: support@foody.com </p>
          <p>📞 Phone: +91 98765 43210</p>
          <p>📍 Address: Sector 17, Gurgaon, Haryana</p>
        </div>

        <div className="footer-section social" style={{marginLeft:"50%"}}>
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
