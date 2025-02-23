import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Quiz Website</h2>
          <p>Enhancing knowledge through engaging quizzes.</p>
        </div>
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="social-icons">
          <a href="#" className="icon"><FaFacebook /></a>
          <a href="#" className="icon"><FaTwitter /></a>
          <a href="#" className="icon"><FaInstagram /></a>
          <a href="#" className="icon"><FaLinkedin /></a>
          <a href="#" className="icon"><FaYoutube /></a>
        </div>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Quiz Website. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
