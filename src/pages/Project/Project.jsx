import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Project.css";

const Project = () => {
  const projects = [
    {
      title: "Tijl 801",
      description:
        "Deze website is ontworpen om de verhuur van appartement Tijl 801 te bevorderen. Het appartement wordt momenteel verhuurd via de website van immokantoor Era. Vanwege bestaande contracten mag het appartement niet op andere platforms worden verhuurd. Daarom zal er geen boekingssysteem op deze site worden geïntegreerd en zullen alle boekingen worden doorverwezen. Er wordt momenteel samengewerkt met een fotograaf om de site van hoogwaardige foto's te voorzien. De verwachte opleverdatum van deze website is maart.",
      skills: ["Github.png", "React.png", "Python.png", "HTML.png"],
      status: "construction",
    },
    {
      title: "Portfolio",
      description:
        "Deze website fungeert als mijn online CV. U bevindt zich momenteel op deze site, dus kijk gerust rond. De website is ontwikkeld met React, de programmeertaal waarin ik de meeste ervaring heb. Na jaren van experimenteren, vond ik React de meest gebruiksvriendelijke, snelle en duidelijke taal om in te programmeren.",
      skills: ["Github.png", "React.png", "Python.png", "HTML.png"],
      images: [
        { src: "Portfolio/Home.png", alt: "Homescherm" },
        { src: "Portfolio/Project.png", alt: "Project" },
        { src: "Portfolio/AboutMe.png", alt: "About me" },
        { src: "Portfolio/Timeline.png", alt: "Tijdlijn" },
        { src: "Portfolio/Contact.png", alt: "Contact" },
      ],
      github: "https://github.com/PieterJanDelie/portal",
    },
    {
      title: "Filou Oostende Portal",
      description:
        "Dit project is een portaal ontwikkeld voor Filou Oostende als onderdeel van mijn stage en bachelorproef voor de opleiding Toegepaste Informatica, specialisatie software development, aan de hogeschool Vives te Kortrijk. De entertainmentsector is zeer concurrerend. Het wordt steeds moeilijker om professioneel te blijven opereren. Veel aandacht gaat naar grote evenementen en artiesten, terwijl ook vrijwilligers veel evenementen organiseren. Daarom is het belangrijk om fans goed te entertainen zodat ze terugkomen. Dit portaal biedt unieke entertainmentopties die andere clubs niet hebben, wat zorgt voor een extra ervaring voor de fans. Dit helpt de Oostendse basketbalploeg om zich te onderscheiden. Het portaal bevat informatie over het eerste team, foto's van spelers, de kalender, stand, uitslagen, en unieke BCO-spelletjes die alleen hier te spelen zijn en gelinkt zijn aan de basketbalclub. De applicatie is ontwikkeld voor een groot touchscreen en is zo ontworpen dat er niet gescrold hoeft te worden. Het werkt het best in fullscreen. De schermen omvatten onder andere het homescherm, teamgedeelte, kalender, stand, uitslagen, en teaminformatie.",
      skills: ["Github.png", "Flask.png", "Python.png", "HTML.png"],
      images: [
        { src: "FilouOostende/Homescherm.png", alt: "Homescherm" },
        { src: "FilouOostende/Team.png", alt: "Team" },
        { src: "FilouOostende/Stand.png", alt: "Stand" },
        { src: "FilouOostende/Kalender.png", alt: "Kalender" },
        { src: "FilouOostende/Uitslagen.png", alt: "Uitslagen" },
        { src: "FilouOostende/Recensie.png", alt: "Recensie" },
        { src: "FilouOostende/Gamestart.png", alt: "Startscreen of a game" },
        {
          src: "FilouOostende/Endgame.png",
          alt: "Scherm na eindigen van een game",
        },
        { src: "FilouOostende/Quiz.png", alt: "Quiz" },
        { src: "FilouOostende/Memory.png", alt: "Memory" },
        { src: "FilouOostende/Lingo.png", alt: "Lingo" },
        { src: "FilouOostende/QuesTransfer.png", alt: "Raad de transfer" },
        { src: "FilouOostende/Rebus.png", alt: "Rebus" },
        { src: "FilouOostende/Would_you_rather.png", alt: "Wat wil je liever" },
        { src: "FilouOostende/Shotgame.png", alt: "Shotgame" },
      ],
      link: "https://www.example.com",
      github: "https://github.com/PieterJanDelie/portal",
    },
    {
      title: "Custom React CLI",
      description:
        "Ik heb mijn eigen CLI-commando's ontwikkeld, specifiek voor React-projecten. Deze commando's zorgen ervoor dat ik sneller een project kan opstarten en ontwikkelen.",
      skills: ["Github.png", "React.png", "Node.png", "Javascript.png"],
      github: "https://github.com/PieterJanDelie/Custom-CLI",
    },
  ];

  const [openProject, setOpenProject] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const toggleProject = (index) => {
    setOpenProject(openProject === index ? null : index);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <DefaultLayout>
      <div className="hero">
        <h1>Project</h1>
        <p>
          Dit zijn mijn grootste projecten waar ik trots ben op het
          gerealiseerde resultaat.
        </p>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project ${
              project.status === "construction"
                ? "under-construction-project"
                : ""
            }`}
          >
            <div
              className={`project-header ${
                project.status === "construction" ? "under-construction" : ""
              }`}
              onClick={() => toggleProject(index)}
            >
              <h2
                className={`${
                  project.status === "construction"
                    ? "under-construction-title"
                    : ""
                }`}
              >
                {project.title}{" "}
                {project.status === "construction" && "(in progress)"}
              </h2>
              <div className="project-skills-circle">
                {project.skills.sort().map((skill, skillIndex) => {
                  const skillName = skill.split(".")[0];
                  return (
                    <img
                      key={skillIndex}
                      src={require(`../../assets/Images/Projects/Skills/${skill}`)}
                      alt={skillName}
                      title={skillName}
                      className="skill-icon-circle"
                    />
                  );
                })}
              </div>
            </div>
            <div
              className={`project-content ${
                openProject === index ? "open" : ""
              }`}
            >
              <p>{project.description}</p>

              <div className="project-links">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-link"
                  >
                    <span className="blinking-dot"></span> Kijk live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kijk op GitHub
                  </a>
                )}
              </div>
              {project.images && (
                <div className="project-images">
                  <Carousel showThumbs={true} infiniteLoop={true} autoPlay>
                    {project.images.map((image, imageIndex) => (
                      <div key={imageIndex} onClick={() => openModal(image)}>
                        <img
                          src={require(`../../assets/Images/Projects/${image.src}`)}
                          alt={image.alt}
                          className="project-image"
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {modalImage && (
        <div className="overlay" onClick={closeModal}>
          <div className="modal">
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
            <img
              src={require(`../../assets/Images/Projects/${modalImage.src}`)}
              alt={modalImage.alt}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default Project;
