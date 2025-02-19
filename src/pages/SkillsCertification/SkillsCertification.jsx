import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import "react-vertical-timeline-component/style.min.css";
import "./SkillsCertification.css";
import Timeline from "../../components/Timeline/Timeline";
import DropdownMenu from "../../components/Dropdownmenu/Dropdownmenu";

const SkillsCertification = () => {
  return (
    <DefaultLayout>
      <div className="hero">
        <div className="skillTitle">
          <h1>Tijdlijn</h1>
          <div className="dropdown">
            <DropdownMenu />
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
