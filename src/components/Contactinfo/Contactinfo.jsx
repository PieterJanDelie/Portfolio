import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import "./Contactinfo.css";

const Contactinfo = () => {
  return (
    <div className="contact-box">
      <a href="mailto:pieterjan.delie@gmail.com" className="contact-item">
        <EmailIcon />
        <span className="contact-text">pieterjan.delie@gmail.com</span>
      </a>
      <a href="tel:+32478739144" className="contact-item">
        <CallIcon />
        <span className="contact-text">+32478739144</span>
      </a>
      <a
        href="https://www.linkedin.com/in/pieter-jan-delie/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <LinkedInIcon />
        <span className="contact-text">Pieter-Jan Delie</span>
      </a>
    </div>
  );
};

export default Contactinfo;
