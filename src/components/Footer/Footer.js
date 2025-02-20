import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/reservation">Reservation</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>123 Street, New York, USA</p>
          <p>+012 345 67890</p>
          <p>info@example.com</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Opening</h3>
          <p>Monday - Saturday: 09AM - 09PM</p>
          <p>Sunday: 10AM - 08PM</p>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe for the latest updates.</p>
          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button>Sign Up</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Your Site Name, All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/cookies">Cookies</a></li>
          <li><a href="/help">Help</a></li>
          <li><a href="/faqs">FAQs</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
