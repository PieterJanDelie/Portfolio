import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <MenuIcon className="menu-icon" onClick={toggleMenu} />
      <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <li className={`navbar-item ${currentPath === "/" ? "active" : ""}`}>
          <Link to="/">Home</Link>
        </li>
        <li
          className={`navbar-item ${
            currentPath === "/project" ? "active" : ""
          }`}
        >
          <Link to="/project">Project</Link>
        </li>
        <li
          className={`navbar-item ${
            currentPath === "/aboutme" ? "active" : ""
          }`}
        >
          <Link to="/aboutme">Over mij</Link>
        </li>
        <li
          className={`navbar-item ${
            currentPath === "/timeline" ? "active" : ""
          }`}
        >
          <Link to="/timeline">Tijdlijn</Link>
        </li>
        <li
          className={`navbar-item ${
            currentPath === "/contact" ? "active" : ""
          }`}
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
