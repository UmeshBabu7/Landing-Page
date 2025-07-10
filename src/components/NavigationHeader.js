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

  const handleNav = (sectionId) => (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then scroll
      setTimeout(() => scrollToSection(sectionId), 200);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <nav className="navigation-header">
      <div className="logo" style={{cursor: 'pointer'}} onClick={() => navigate('/')}>Aakash Labs</div>
      <ul>
        <li><a href="#slider" onClick={handleNav('slider')}>Home</a></li>
        <li><a href="#about" onClick={handleNav('about')}>About Us</a></li>
        <li><a href="#team" onClick={handleNav('team')}>Our Team</a></li>
        <li><a href="#contact" onClick={handleNav('contact')}>Contact Us</a></li>
        <li><Link to="/functional">Functional Page</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationHeader; 