import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './NavigationHeader.css';

const scrollToSection = (id) => {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100); // Wait for route change and DOM update
};

const NavigationHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="navigation-header">
      <div className="logo" style={{cursor: 'pointer'}} onClick={() => navigate('/home')}>Aakash Labs</div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/our-team">Our Team</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/functional">Functional Page</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationHeader; 