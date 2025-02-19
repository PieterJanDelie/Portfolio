import React from "react";
import "./Aboutsection.css";

const AboutSection = ({ title, content }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

export default AboutSection;
