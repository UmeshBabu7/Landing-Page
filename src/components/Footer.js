import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <span>© {new Date().getFullYear()} Aakash Labs. All rights reserved.</span>
      <div className="social-links">
        <a href="https://facebook.com/aakashlabs" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com/aakashlabs" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com/company/aakashlabs" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://instagram.com/aakashlabs" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
  </footer>
);

export default Footer; 