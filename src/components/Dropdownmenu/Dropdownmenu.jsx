import React from "react";
import "./Dropdownmenu.css";

const DropdownMenu = () => {
  return (
  <div className="dropdown">
    <button className="dropbtn">Download CV</button>
    <div className="dropdown-content">
      {["CV_Pieter-Jan_Delie.pdf", "CV_Creative_Pieter-Jan_Delie.pdf", "LinkedIn_Pieter-Jan_Delie.pdf"].map((file) => (
        <a key={file} href={`../../assets/Docs/CV/${file}`} target="_blank" rel="noopener noreferrer">
          {file.replace(".pdf", "").replace(/_/g, " ")}
        </a>
      ))}
    </div>
  </div>)
};

export default DropdownMenu;
