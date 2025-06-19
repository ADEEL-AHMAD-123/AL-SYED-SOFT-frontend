import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/_header.scss';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">AL SYED SOFT</Link>
        <nav className="nav">
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
