import React from 'react';
import './Slider.css';

const slides = [
  { title: 'Welcome to Aakash Labs', desc: 'Innovating Digital Experiences', img: 'https://aakashlabs.com/images/slider1.jpg' },
  { title: 'Your Digital Partner', desc: 'Web, Mobile, and Beyond', img: 'https://aakashlabs.com/images/slider2.jpg' },
  { title: 'Grow With Us', desc: 'Let’s build your brand together', img: 'https://aakashlabs.com/images/slider3.jpg' },
];

const Slider = () => {
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="slider" id="slider">
      <img src={slides[current].img} alt={slides[current].title} className="slider-img" />
      <div className="slider-content">
        <h1>{slides[current].title}</h1>
        <p>{slides[current].desc}</p>
      </div>
    </section>
  );
};

export default Slider; 