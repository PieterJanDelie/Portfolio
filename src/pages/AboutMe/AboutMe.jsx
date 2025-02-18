import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <DefaultLayout>
      <div className="hero">
        <h1>About me</h1>
        <p>Hallo!</p>
      </div>
      <div>
        <p>About Me</p>
      </div>
    </DefaultLayout>
  );
};

export default AboutMe;
