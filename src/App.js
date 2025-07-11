import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavigationHeader from './components/NavigationHeader';
import Slider from './components/Slider';
import AboutUs from './components/AboutUs';
import OurTeam from './components/OurTeam';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import FunctionalPage from './components/FunctionalPage';
import './App.css';

function LandingPage() {
  const location = useLocation();
  React.useEffect(() => {
    let sectionId = null;
    switch (location.pathname) {
      case '/home':
        sectionId = 'slider';
        break;
      case '/about-us':
        sectionId = 'about';
        break;
      case '/our-team':
        sectionId = 'team';
        break;
      case '/contact-us':
        sectionId = 'contact';
        break;
      default:
        break;
    }
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.pathname]);
  return (
    <>
      <NavigationHeader />
      <Slider />
      <AboutUs />
      <OurTeam />
      <ContactUs />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about-us" element={<LandingPage />} />
        <Route path="/our-team" element={<LandingPage />} />
        <Route path="/contact-us" element={<LandingPage />} />
        <Route path="/functional" element={<><NavigationHeader /><FunctionalPage /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;
