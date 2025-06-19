import React from 'react';
import '../styles/components/_features.scss';

const features = [
  {
    icon: '🛠️',
    title: 'Custom Software',
    description: 'Tailored solutions built to meet your specific business needs.',
  },
  {
    icon: '⚡',
    title: 'Fast Delivery',
    description: 'From idea to launch, we move quickly and efficiently.',
  },
  {
    icon: '🔒',
    title: 'Secure Systems',
    description: 'We ensure your data and platforms stay protected.',
  },
  {
    icon: '☁️',
    title: 'Cloud Ready',
    description: 'Deploy anywhere, scale infinitely, serve globally.',
  },
];

const Features = () => {
  return (
    <section className="features" id="features">
      <h2>What We Offer</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <span className="icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
