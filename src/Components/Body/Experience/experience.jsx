import React from "react";
import ExperienceCard from "./experience-card";
import { ExperienceData } from "../../Data/Experiences";
import "./experience.css";

function Experience() {
  return (
    <div className="container section experiences">
      <div className="section-head reveal">
        <span className="section-eyebrow">Career</span>
        <h2 className="section-title">
          Where I've <span className="text-gradient">shipped</span>
        </h2>
        <p className="section-subtitle">
          Roles where I owned production systems end to end — from API design
          through to the infrastructure underneath them.
        </p>
      </div>

      <ol className="timeline">
        {ExperienceData.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </ol>
    </div>
  );
}

export default Experience;
