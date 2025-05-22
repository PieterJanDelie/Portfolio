import React from "react";
import "./Dropdownmenu.css";

const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <button className="dropbtn">Download CV</button>
      <div>
        <a
          href={require(`../../assets/Docs/CV/BiometrIQ-Demoraport.pdf`)}
          target="_blank"
          rel="noopener noreferrer"
          className="raport"
        >
          raport
        </a>
      </div>
      <div className="dropdown-content">
        {[
          "CV.pdf",
          "CV_Creative.pdf",
          "LinkedIn.pdf",
        ].map((file) => (
          <a
            key={file}
            href={require(`../../assets/Docs/CV/${file}`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {file.replace(".pdf", "").replace(/_/g, " ")}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
