import React, { useContext } from "react";
import "../Footer.css";
import {  FaInstagram,  FaLinkedinIn, FaGithub } from "react-icons/fa";
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

        <div className="footer-section social" style={{marginLeft:"41%"}}>
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/iamhimanshuu_0?igsh=MTR6OTdyYmZkbmg3Nw=="><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/himanshu-sharma-533b42287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn /></a>
            <a href="https://github.com/Himanshuu-02"><FaGithub /></a>
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
