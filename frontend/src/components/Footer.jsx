import React from 'react';
import './Footer.css'; // Custom CSS file for footer styling
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = ({ id }) => {
  return (
    <footer id={id} className="footer-container">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-about">
          <h3>About Aurumcare</h3>
          <p>
            Since 1945, Aurumcare Hospital has been dedicated to providing exceptional 
            medical care. With cutting-edge technology and compassionate professionals, 
            we are here to support your health journey.
          </p>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>📍 123 Alfred Place, Colombo, Sri Lanka</li>
            <li>📞 Hotline: +94 11 9153492</li>
            <li>✉️ Email: info@aurumcare.lk</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2025 Aurumcare Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
