import React from "react";
import "./experience-card.css";

/**
 * Splits the multi-line `about` string from the data layer into bullets.
 *
 * The source content is authored with leading "-" / "–" markers and inline
 * <b>/<u> emphasis, so each line is trimmed of its marker and rendered as
 * HTML. This content is authored in-repo, not user supplied.
 */
function toBullets(about) {
  return about
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^[-–—]\s*/, ""));
}

function ExperienceCard({ experience }) {
  const bullets = toBullets(experience.about);

  return (
    <li className="timeline-item reveal">
      <span className="timeline-marker" aria-hidden="true" />

      <article className="card experience-card">
        <header className="experience-header">
          <div>
            <h3 className="experience-title">{experience.title}</h3>
            <div className="experience-tags">
              {experience.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="experience-date">{experience.date}</span>
        </header>

        <ul className="experience-about rich">
          {bullets.map((bullet, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: bullet }}
            />
          ))}
        </ul>
      </article>
    </li>
  );
}

export default ExperienceCard;
