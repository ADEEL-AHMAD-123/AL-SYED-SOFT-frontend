import React from 'react';
import '../styles/components/_hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Build Custom Software at Scale</h1>
        <p>
          For Startups, Enterprises, and Innovators who want to move fast.
          We turn your vision into scalable solutions.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">See How It Works</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
