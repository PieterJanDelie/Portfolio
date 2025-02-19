import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footerbox">
      <footer className="footer">
        <p>&copy; {currentYear} - Pieter-Jan Delie</p>
      </footer>
    </div>
  );
};

export default Footer;
