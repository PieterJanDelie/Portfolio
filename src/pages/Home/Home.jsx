import React, { useState, useEffect } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./Home.css";

const Home = () => {
  const images = [
    { src: require("../../assets/Images/Header/image1.png"), alt: "image1" },
    { src: require("../../assets/Images/Header/image1.png"), alt: "image1" },
    { src: require("../../assets/Images/Header/image1.png"), alt: "image1" },
    { src: require("../../assets/Images/Header/image1.png"), alt: "image1" },
    { src: require("../../assets/Images/Header/image1.png"), alt: "image1" },
    { src: require("../../assets/Images/Header/image1.png"), alt: "image1" },
    { src: require("../../assets/Images/Header/image1.png"), alt: "image1" },
    { src: require("../../assets/Images/Header/image1.png"), alt: "image1" },
    { src: require("../../assets/Images/Header/image1.png"), alt: "image1" },
    { src: require("../../assets/Images/Header/image1.png"), alt: "image1" },
  ];

  const skills = [
    "Java",
    "Javascript",
    "React",
    "C#",
    "Kotlin",
    "Angular",
    "HTML5",
    "CSS",
    "Python",
    "Node",
    "Docker",
    "K8s",
    "Machine learning",
    "Deep learning",
    "Google cloud console",
    "MariaDB",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "Git",
    "Github",
    "Rest API",
    "Flask",
    "FastAPI",
    "Spring",
    "asp .net",
    "React-native",
    "Expo GO",
  ];

  const isPhone = window.innerWidth <= 600;

  const displayedImages = isPhone ? images.slice(0, 5) : images;

  const shuffleSkills = (skillsArray) => {
    for (let i = skillsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [skillsArray[i], skillsArray[j]] = [skillsArray[j], skillsArray[i]];
    }
    return skillsArray;
  };

  const shuffledSkills = shuffleSkills([...skills]).join(", ");
  const repeatedSkills = new Array(20).fill(shuffledSkills).join(", ");

  const [displayedText, setDisplayedText] = useState("");
  const fullText = `
<span class="codecolorone">const</span> Person = {
  <span class="codecolortwo">Name:</span> <span class="codecolorthree">"Pieter-Jan Delie"</span>,
  <span class="codecolortwo">Studies:</span> [<span class="codecolorthree">"Software Development"</span>,<br> <span class="codecolorfive">"AI"</span>, <span class="codecolorsix">"International Management"</span>]
};

<span class="codecolorone">Person</span>.say(<span class="codecolorseven">"Let's get in touch!"</span>);`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <DefaultLayout>
        <div className="skills-background">{repeatedSkills}</div>
        <section className="welcome">
          <div className="welcome-text">
            <h1>
              <pre>
                <code dangerouslySetInnerHTML={{ __html: displayedText }} />
                <span class="cursor"><span class="transparent">|</span></span>
              </pre>
            </h1>
          </div>
          {/*{displayedImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`floating-image ${
                index % 2 === 0 ? "top-to-bottom" : "bottom-to-top"
              }`}
              style={{
                left: `${index * 15}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 7 + 5}s`,
                width: isPhone ? "20%" : "10%",
              }}
            />
          ))}*/}
        </section>
      </DefaultLayout>
    </div>
  );
};

export default Home;
