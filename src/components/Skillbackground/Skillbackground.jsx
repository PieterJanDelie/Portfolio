import React from "react";
import "./Skillbackground.css";

const SkillBackground = ({ skills }) => {
  return (
    <div className="skills-background">
      {skills.map((skill, index) => (
        <span key={index} className="skill-word">
          {skill}
        </span>
      ))}
    </div>
  );
};

export default SkillBackground;
