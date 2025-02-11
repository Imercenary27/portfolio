// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of project 1",
      image: "/path-to-image1.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/project1"
    },
    {
        id: 1,
        title: "Project 1",
        description: "Description of project 1",
        image: "/path-to-image1.jpg",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "https://github.com/yourusername/project1"
      },
      {
        id: 1,
        title: "Project 1",
        description: "Description of project 1",
        image: "/path-to-image1.jpg",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "https://github.com/yourusername/project1"
      },
      {
        id: 1,
        title: "Project 1",
        description: "Description of project 1",
        image: "/path-to-image1.jpg",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "https://github.com/yourusername/project1"
      },
      {
        id: 1,
        title: "Project 1",
        description: "Description of project 1",
        image: "/path-to-image1.jpg",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "https://github.com/yourusername/project1"
      },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
