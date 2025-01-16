
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>We'd love to hear from you! Reach out to us via the following methods:</p>
        </div>
        <div className="footer-contact-info">
          <div className="footer-item">
            <strong>Email:</strong>
            <p>AurumcareHospital@gmail.com</p>
          </div>
          <div className="footer-item">
            <strong>Phone:</strong>
            <p>(+94) 113-456-789</p>
          </div>
          <div className="footer-item">
            <strong>Address:</strong>
            <p>N0.12/63, Medical St, Colombo 05, Sri Lanka</p>
          </div>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;