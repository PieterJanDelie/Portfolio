import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footerbox">
      <footer className="footer">
        <p>&copy; {currentYear} My Website</p>
      </footer>
    </div>
  );
};

export default Footer;
