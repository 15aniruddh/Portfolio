import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillGitlab } from "react-icons/ai";
import "./project-card.css";

function ProjectCard({ project, index }) {
  /* Alternate image/text sides down the list */
  const flipped = index % 2 === 1;

  return (
    <article
      className={`card project-card reveal ${flipped ? "is-flipped" : ""}`}
    >
      <div className="project-media">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="project-photo"
          loading="lazy"
          decoding="async"
        />
        <span className="project-index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-about">{project.about}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
            <a
              className="link-button"
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} on GitHub`}
            >
              <FaGithub aria-hidden="true" />
              GitHub
            </a>
          )}
          {project.gitlab && (
            <a
              className="link-button"
              href={project.gitlab}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} on GitLab`}
            >
              <AiFillGitlab aria-hidden="true" />
              GitLab
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
