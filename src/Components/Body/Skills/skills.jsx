import React from "react";
import { SkillData } from "../../Data/Skills";
import SkillCard from "./skill-card";
import "./skills.css";

function Skills() {
  return (
    <div className="container section skills">
      <div className="section-head reveal">
        <span className="section-eyebrow">Toolkit</span>
        <h2 className="section-title">
          What I <span className="text-gradient">work with</span>
        </h2>
        <p className="section-subtitle">
          The stack I reach for across the frontend, the services behind it and
          the pipeline that ships it.
        </p>
      </div>

      <div className="skills-container">
        {SkillData.map((group, groupIndex) => (
          <section
            key={group.type}
            className="card skills-group reveal"
            style={{ transitionDelay: `${groupIndex * 100}ms` }}
            aria-labelledby={`skills-${group.type}`}
          >
            <header className="skills-group-head">
              <h3 id={`skills-${group.type}`}>{group.type}</h3>
              <p>{group.caption}</p>
            </header>

            <ul className="skills-list">
              {group.list.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Skills;
