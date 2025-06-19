import React from 'react';
import '../styles/components/_under-development.scss';
import { FaTools } from 'react-icons/fa';

const UnderDevelopment = () => {
  return (
    <section className="under-development">
      <div className="content">
        <FaTools className="icon" />
        <h2>We're Working on It!</h2>
        <p>This section is currently under development. Check back soon for updates!</p>
      </div> 
    </section>
  );
};

export default UnderDevelopment;
