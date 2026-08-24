import React from "react";
import ProjectCard from "./project-card";
import { ProjectData } from "../../Data/Projects";
import "./project.css";

function Project() {
  return (
    <div className="container section projects">
      <div className="section-head reveal">
        <span className="section-eyebrow">Selected work</span>
        <h2 className="section-title">
          Things I've <span className="text-gradient">built</span>
        </h2>
        <p className="section-subtitle">
          Side projects and full-stack builds where I owned the whole thing —
          data model, API, interface and deployment.
        </p>
      </div>

      <div className="project-list">
        {ProjectData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Project;
