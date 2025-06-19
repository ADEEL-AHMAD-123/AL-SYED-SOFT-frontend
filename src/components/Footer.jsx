import React from 'react';
import '../styles/components/_footer.scss';
import { Link } from 'react-router-dom';
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-about">
          <h3>AL SYED SOFT</h3>
          <p>
            Building innovative, scalable software solutions for clients around the world.
          </p>
          <div className="contact-info">
            <p><FaEnvelope /> info@alsyedsoft.com</p>
            <p><FaPhoneAlt /> +92 300 1234567</p>
            <p><FaMapMarkerAlt /> Lahore, Pakistan</p>
          </div>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AL SYED SOFT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
