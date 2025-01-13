import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
        <img src="src/assets/Logo.png" alt="logo" />
        </div>
        <div className="navbar-menu">
          
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/doctors" className="navbar-item">Doctors</Link>
          <Link to="/about" className="navbar-item">About</Link>
         
         
          <Link to="/appointments" className="navbar-item">Appointments</Link>
            <Link to="/login" className="navbar-item">Login</Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
