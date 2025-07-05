// Footer.tsx

import React from 'react';
import './footer.css';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section company-info">
          <div className="company-logo">
            <span className="logo-icon">ST</span>
            <span className="company-name">SniperThink</span>
          </div>
          <p className="company-description">
            Transforming businesses through intelligent automation and data-driven solutions. Your partner in
            digital transformation and operational excellence.
          </p>
          <div className="contact-item">
            <i className="email-icon">✉️</i>
            <span>hello@sniperthink.com</span>
          </div>
          <div className="contact-item">
            <i className="phone-icon">📞</i>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="contact-item address">
            <i className="location-icon">📍</i>
            <span>123 Innovation Drive<br />Tech Valley, CA 94043</span>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/work-process">Work Process</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-section our-services">
          <h3>Our Services</h3>
          <ul>
            <li><a href="/data-analytics">Data Analytics</a></li>
            <li><a href="/process-automation">Process Automation</a></li>
            <li><a href="/system-integration">System Integration →</a></li>
            <li><a href="/performance-optimization">Performance Optimization</a></li>
            <li><a href="/data-management">Data Management</a></li>
            <li><a href="/growth-analytics">Growth Analytics</a></li>
          </ul>
        </div>

        <div className="footer-section stay-connected">
          <h3>Stay Connected</h3>
          <p className="newsletter-text">
            Subscribe to our newsletter for the latest insights and updates.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" aria-label="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-links">
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          © 2025 SniperThink. All rights reserved.
        </div>
        <div className="legal-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/cookie-policy">Cookie Policy</a>
          <a href="/data-protection">Data Protection</a>
        </div>
        <div className="edit-with-lovable">
          <span>Edit with</span> <img src="https://sniperthink-web-forge.lovable.app/lovable-logo.png" alt="Lovable Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;