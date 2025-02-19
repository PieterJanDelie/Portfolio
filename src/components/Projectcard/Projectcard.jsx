import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Projectcard.css";

const ProjectCard = ({ project, onToggleProject, isOpen, onOpenModal }) => {
  return (
    <div
      className={`project ${
        project.status === "construction" ? "under-construction-project" : ""
      }`}
    >
      <div
        className={`project-header ${
          project.status === "construction" ? "under-construction" : ""
        }`}
        onClick={onToggleProject}
      >
        <h2
          className={
            project.status === "construction" ? "under-construction-title" : ""
          }
        >
          {project.title} {project.status === "construction" && "(in progress)"}
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

      <div className={`project-content ${isOpen ? "open" : ""}`}>
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
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              Kijk op GitHub
            </a>
          )}
        </div>
        {project.images && (
          <div className="project-images">
            <Carousel showThumbs={true} infiniteLoop={true} autoPlay>
              {project.images.map((image, imageIndex) => (
                <div key={imageIndex} onClick={() => onOpenModal(image)}>
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
  );
};

export default ProjectCard;
