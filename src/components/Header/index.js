import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>ALIGN WITH KEIRA</h1>
        <p>Sound. Mindfulness.</p>
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
