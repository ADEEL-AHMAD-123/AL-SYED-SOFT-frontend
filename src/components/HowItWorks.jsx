import React from 'react';
import '../styles/components/_how-it-works.scss';

const steps = [
  {
    step: '1',
    title: 'Share Your Idea',
    description: 'Tell us what you want to build — features, goals, and audience.',
  },
  {
    step: '2',
    title: 'We Design & Build',
    description: 'Our team crafts beautiful, scalable software tailored to your needs.',
  },
  {
    step: '3',
    title: 'Launch & Grow',
    description: 'Go live confidently with a robust, modern, and cloud-ready app.',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="process">
      <h2>How It Works</h2>
      <div className="steps">
        {steps.map((item, index) => (
          <div className="step-card" key={index}>
            <div className="circle">{item.step}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
