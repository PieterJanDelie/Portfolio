import React, { useState, useEffect } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import SkillBackground from "../../components/Skillbackground/Skillbackground";
import "./Home.css";

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

// Maak een lange lijst zodat de achtergrond volledig gevuld is
const repeatedSkills = Array.from(
  { length: 2000 },
  (_, i) => skills[i % skills.length]
);

const Home = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = `<span class="codecolorone">const</span> Person = {
  <span class="codecolortwo">Name:</span> <span class="codecolorthree"><a href="/aboutme" class="link">"Pieter-Jan Delie"</a></span>,
  <span class="codecolortwo">Studies:</span> [<span class="codecolorthree"><a href="/timeline" class="link">"Software Development"</a></span>,
  <span class="codecolorthree"><a href="/timeline" class="link">"AI"</a></span>, <span class="codecolorthree"><a href="/timeline" class="link">"International Management"</a></span>]};
  
<span class="codecolorone">Person</span>.say(<span class="codecolorfor"><a href="/contact" class="link">"Let's get in touch!"</a></span>);`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <DefaultLayout>
        <div className="content">
          <MemoizedSkillBackground />
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

const MemoizedSkillBackground = React.memo(() => (
  <SkillBackground skills={repeatedSkills} />
));

export default Home;
