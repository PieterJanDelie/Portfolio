import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import "react-vertical-timeline-component/style.min.css";
import "./SkillsCertification.css";
import Timeline from "../../components/Timeline/Timeline";

const SkillsCertification = () => {
  return (
    <DefaultLayout>
      <div className="hero">
        <div className="skillTitle">
          <h1>Tijdlijn</h1>
          <div className="dropdown">
            <button className="dropbtn">Download CV</button>
            <div className="dropdown-content">
              <a
                href="../../assets/Docs/CV/CV_Pieter-Jan_Delie.pdf"
                target="_blank"
              >
                CV
              </a>
              <a
                href="../../assets/Docs/CV/CV_Creative_Pieter-Jan_Delie.pdf"
                target="_blank"
              >
                Creatieve CV
              </a>
              <a
                href="../../assets/Docs/CV/LinkedIn_Pieter-Jan_Delie.pdf"
                target="_blank"
              >
                LinkedIn CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-certification">
        <Timeline />
      </div>
    </DefaultLayout>
  );
};

export default SkillsCertification;
