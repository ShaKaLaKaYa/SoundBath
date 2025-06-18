import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from '../../assets/logo.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="Into Sound Healing Logo" className="logo-img" />
        <div className="logo-text">
          <h1>Into Sound Healing</h1>
          <p>Premier Sound Bath Experience</p>
        </div>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/story">Story</Link>
        <Link to="/membership">Membership</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
