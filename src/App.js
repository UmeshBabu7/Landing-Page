import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationHeader from './components/NavigationHeader';
import Slider from './components/Slider';
import AboutUs from './components/AboutUs';
import OurTeam from './components/OurTeam';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import FunctionalPage from './components/FunctionalPage';
import './App.css';

function LandingPage() {
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
        <Route path="/functional" element={<><NavigationHeader /><FunctionalPage /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;
