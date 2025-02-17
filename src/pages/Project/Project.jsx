import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Project.css";

const Project = () => {
  const projects = [
    {
      title: "Tijl 801",
      description: "Test",
      skills: ["Github.png", "React.jpg", "Python.png", "HTML.png"],
      status: "construction",
    },
    {
      title: "Filou Oostende Portal",
      description:
        "Deze website werd ontwikkeld gedurende mijn stage bij Filou Oostende. Deze draaide op een scherm aan de ingang. De applicatie toont 2 grote delen. Een algemeen deel met Kalender, Team, Stand, Aankomende matchen en een plaats voor Feedback. Daarnaast was er ook nog een Gamecenter. Hierin stonden 7 games die speciaal ontwikkeld zijn voor de fans met een BCO-touch. Op deze manier konden we de fans een unieke beleving geven vanaf het binnentreden van de arena.",
      skills: ["Github.png", "Flask.png", "Python.png", "HTML.png"],
      images: [
        { src: "FilouOostende/Homescherm.png", alt: "Homescherm" },
        { src: "FilouOostende/Team.png", alt: "Team" },
        { src: "FilouOostende/Stand.png", alt: "Stand" },
        { src: "FilouOostende/Kalender.png", alt: "Kalender" },
        { src: "FilouOostende/Uitslagen.png", alt: "Uitslagen" },
      ],
      link: "https://www.example.com",
      github: "https://www.github.com",
    },
    {
      title: "Custom React CLI",
      description: "Test",
      skills: ["Github.png", "React.jpg", "Node.jpeg", "Javascript.jpg"],
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
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <div
              className={`project-header ${
                project.status === "construction" ? "under-construction" : ""
              }`}
              onClick={() => toggleProject(index)}
            >
              <h2>
                {project.title}{" "}
                {project.status === "construction" && "(Under Construction)"}
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
                    <span className="blinking-dot"></span> See live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
              {project.images && (
                <div className="project-images">
                  <Carousel
                    showThumbs={true}
                    infiniteLoop={true}
                    autoPlay
                  >
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
