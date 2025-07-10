import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationHeader.css';

const NavigationHeader = () => (
  <nav className="navigation-header">
    <div className="logo">Aakash Labs</div>
    <ul>
      <li><a href="#slider">Home</a></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#team">Our Team</a></li>
      <li><a href="#contact">Contact Us</a></li>
      <li><Link to="/functional">Functional Page</Link></li>
    </ul>
  </nav>
);

export default NavigationHeader; 