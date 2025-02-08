import React, { useState, useEffect } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./Home.css";

const Home = () => {
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

  const shuffleSkills = (skillsArray) => {
    for (let i = skillsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [skillsArray[i], skillsArray[j]] = [skillsArray[j], skillsArray[i]];
    }
    return skillsArray;
  };

  const shuffledSkills = shuffleSkills([...skills]);

  const repeatedSkills = [];
  while (repeatedSkills.length < 2000) {
    repeatedSkills.push(...shuffledSkills);
  }

  const [displayedText, setDisplayedText] = useState("");
  const fullText = `<span class="codecolorone">const</span> Person = {
  <span class="codecolortwo">Name:</span> <span class="codecolorthree">"Pieter-Jan Delie"</span>,
  <span class="codecolortwo">Studies:</span> [<span class="codecolorthree">"Software Development"</span>,
  <span class="codecolorfive">"AI"</span>, <span class="codecolorsix">"International Management"</span>]
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
        <div className="content">
          <div className="skills-background">
            {repeatedSkills.map((skill, index) => (
              <span key={index} className="skill-word">
                {skill}
              </span>
            ))}
          </div>
          <section className="welcome">
            <div className="welcome-text">
              <h1>
                <pre>
                  <code dangerouslySetInnerHTML={{ __html: displayedText }} />
                  <span className="cursor">
                    <span className="transparent">|</span>
                  </span>
                </pre>
              </h1>
            </div>
          </section>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default Home;
