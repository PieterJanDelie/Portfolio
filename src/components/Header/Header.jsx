import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className={`navbar-item ${currentPath === '/' ? 'active' : ''}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`navbar-item ${currentPath === '/project' ? 'active' : ''}`}>
          <Link to="/project">Project</Link>
        </li>
        <li className={`navbar-item ${currentPath === '/aboutme' ? 'active' : ''}`}>
          <Link to="/aboutme">About Me</Link>
        </li>
        <li className={`navbar-item ${currentPath === '/skillscertification' ? 'active' : ''}`}>
          <Link to="/skillscertification">Skills & Certification</Link>
        </li>
        <li className={`navbar-item ${currentPath === '/contact' ? 'active' : ''}`}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;