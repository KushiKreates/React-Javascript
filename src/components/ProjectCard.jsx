import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import './projectsCard.css';

function ProjectCard(props) {
  // Function to extract text after '#Kushicode:' if it exists
  const extractButtonText = (link) => {
    const prefix = '#Kushicode:';
    if (link.startsWith(prefix)) {
      return link.substring(prefix.length);
    }
    return null;
  };

  return (
    <div className="project-card">
      <img src={props.imgPath} alt="Project" className="project-image" />
      <div className="project-details">
        <h2 className="project-title">{props.title}</h2>
        <p className="project-description">{props.description}</p>
        <div className="project-buttons">
          {props.ghLink ? (
            <a href={props.ghLink} target="_blank" rel="noopener noreferrer" className="btn github-button">
              <BsGithub /> {props.isBlog ? 'Blog' : 'GitHub'}
            </a>
          ) : (
            <span className="btn disabled-button">
              <BsGithub /> Private
            </span>
          )}
          {props.demoLink && (
            <a href={props.demoLink} target="_blank" rel="noopener noreferrer" className="btn demo-button">
              <CgWebsite /> {extractButtonText(props.demoLink) || 'Demo'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
