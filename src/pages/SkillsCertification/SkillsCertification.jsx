import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./SkillsCertification.css";

const SkillsCertification = () => {
  return (
    <DefaultLayout>
      <div className="skills-certification">
        <div className="skillTitle">
          <h1>Skills Certification</h1>
          <div className="dropdown">
            <button className="dropbtn">Download CV</button>
            <div className="dropdown-content">
              <a href="../../assets/Docs/CV/CV_Pieter-Jan_Delie.pdf" download>
                CV
              </a>
              <a
                href="../../assets/Docs/CV/LinkedIn_Pieter-Jan_Delie.pdf"
                download
              >
                LinkedIn CV
              </a>
              <a
                href="../../assets/Docs/CV/creatieve_cv_Pieter-Jan_Delie.pdf"
                download
              >
                Creatieve CV
              </a>
            </div>
          </div>
        </div>
        <Timeline />
      </div>
    </DefaultLayout>
  );
};

const Timeline = () => {
  return (
    <VerticalTimeline animate={true}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2025"
      >
        <h3 className="vertical-timeline-element-title">
          Completed XYZ Certification
        </h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024"
      >
        <h3 className="vertical-timeline-element-title">Achieved ABC Skill</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023"
      >
        <h3 className="vertical-timeline-element-title">
          Completed DEF Certification
        </h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022"
      >
        <h3 className="vertical-timeline-element-title">Achieved GHI Skill</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2021"
      >
        <h3 className="vertical-timeline-element-title">
          Completed JKL Certification
        </h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020"
      >
        <h3 className="vertical-timeline-element-title">Achieved MNO Skill</h3>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default SkillsCertification;
