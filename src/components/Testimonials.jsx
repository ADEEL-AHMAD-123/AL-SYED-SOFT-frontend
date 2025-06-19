import React from 'react';
import '../styles/components/_testimonials.scss';

const testimonials = [
  { 
    name: 'Sarah Johnson',
    company: 'TechNova Inc.',
    quote:
      'AL SYED SOFT delivered an incredible platform that exceeded our expectations. Their process was transparent and efficient.',
  },
  {
    name: 'Ahmed Latif',
    company: 'CloudCore',
    quote:
      'We needed a team that could move fast and stay flexible. They understood our vision and helped us grow.',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <p className="quote">“{t.quote}”</p>
            <p className="author">
              — {t.name}, <span>{t.company}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials
