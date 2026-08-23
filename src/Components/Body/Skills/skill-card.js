import React from "react";
import TechIcon from "../../Common/TechIcon/tech-icon";
import "./skill-card.css";

function SkillCard({ skill }) {
  return (
    <li className="skill-card">
      <span className="skill-icon" aria-hidden="true">
        <TechIcon icon={skill.icon} />
      </span>
      <span className="skill-name">{skill.name}</span>
    </li>
  );
}

export default SkillCard;
