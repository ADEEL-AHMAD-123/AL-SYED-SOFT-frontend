import React from 'react';
import '../styles/components/_clients.scss';

// Import images
import airbusLogo from '../assets/airbus-logo.png';
import cocaColaLogo from '../assets/coca-cola-logo.png';
import costcoLogo from '../assets/costco-logo (1).png';
import healthAdeLogo from '../assets/health-ade-logo.png';
import hiltonLogo from '../assets/hilton-logo.png';
import hpLogo from '../assets/hp-logo.png';
import hunterDouglasLogo from '../assets/hunter-douglas-logo.png';
import illyLogo from '../assets/illy-logo.png';
import krohneLogo from '../assets/krohne-logo.png';
import mercuryLogo from '../assets/mercury-logo.png';
import sothebysLogo from '../assets/sothebys-logo.png';
import volkswagenLogo from '../assets/volkswagen-logo.png';

const clientLogos = [
  airbusLogo,
  cocaColaLogo,
  costcoLogo,
  healthAdeLogo,
  hiltonLogo,
  hpLogo,
  hunterDouglasLogo,
  illyLogo,
  krohneLogo,
  mercuryLogo,
  sothebysLogo,
  volkswagenLogo,
];

const Clients = () => {
  return (
    <section className="clients">
      <h2 className="label">Trusted by teams at</h2>
      <div className="logo-strip">
        {clientLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Client ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default Clients;
