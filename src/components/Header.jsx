import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/_header.scss';
import { FaBars, FaTimes } from 'react-icons/fa'; // Install: npm install react-icons

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">AL SYED SOFT</Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link>
          <Link to="/solutions" className={location.pathname === '/solutions' ? 'active' : ''}>Solutions</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>

        <Link to="/contact" className="talk-btn">Talk to Us</Link>
      </div>
    </header>
  );
};

export default Header;
