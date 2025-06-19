import React from 'react';
import '../styles/components/_final-cta.scss';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="final-cta">
      <div className="content">
        <h2>Ready to Build Something Great?</h2>
        <p>Let’s bring your vision to life with world-class software solutions.</p>
        <Link to="/contact" className="cta-btn">Start a Project</Link>
      </div>
    </section>
  );
};

export default FinalCTA;
