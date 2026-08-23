import React, { useEffect, useState } from "react";
import { FiArrowDownRight, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaGitlab } from "react-icons/fa";
import { Profile, Stats } from "../../Data/Profile";
import { SocialData } from "../../Data/Social";
import TechIcon from "../../Common/TechIcon/tech-icon";
import "./hero.css";

const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  gitlab: FaGitlab,
};

/* Decorative tech ring around the hero artwork. `slot` maps to a position
   class in hero.css; they are grouped by which edge of the frame they sit on. */
const FLOATING_CHIPS = [
  // top edge
  { slot: "mongo", label: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { slot: "redis", label: "Redis", icon: "devicon-redis-plain colored" },
  { slot: "typescript", label: "TypeScript", icon: "devicon-typescript-plain colored" },
  // right edge
  { slot: "aws", label: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
  { slot: "serverless", label: "Serverless", icon: "si:serverless" },
  // bottom edge
  { slot: "python", label: "Python", icon: "devicon-python-plain colored" },
  { slot: "postgres", label: "Postgres", icon: "devicon-postgresql-plain colored" },
  // left edge
  { slot: "docker", label: "Docker", icon: "devicon-docker-plain colored" },
  { slot: "node", label: "Node.js", icon: "devicon-nodejs-plain colored" },
  { slot: "javascript", label: "JavaScript", icon: "devicon-javascript-plain colored" },
];

/** Cycles the role line, pausing on each word before swapping. */
function useRoleRotator(roles, interval = 2600) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || roles.length < 2) return;

    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % roles.length),
      interval
    );
    return () => window.clearInterval(id);
  }, [roles, interval]);

  return roles[index];
}

function Hero() {
  const currentRole = useRoleRotator(Profile.roles);

  return (
    <section id="hero" className="hero">
      {/* Ambient background — decorative only */}
      <div className="hero-ambient" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="grid-overlay" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          {Profile.available && (
            <p className="availability">
              <span className="availability-dot" aria-hidden="true" />
              {Profile.availableLabel}
            </p>
          )}

          <p className="hero-greeting">
            {Profile.greeting} <span aria-hidden="true">👋</span> I am
          </p>

          <h1 className="hero-name">
            <span className="text-gradient">{Profile.name}</span>
          </h1>

          <p className="hero-role">
            <span className="hero-role-prefix">&lt;/&gt;</span>
            {/* Announce role changes politely rather than interrupting */}
            <span className="hero-role-word" key={currentRole} aria-live="polite">
              {currentRole}
            </span>
          </p>

          <p className="hero-summary">{Profile.summary}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View my work
              <FiArrowDownRight aria-hidden="true" />
            </a>
            <a
              className="btn btn-ghost"
              href={require("../../Data/Resume.pdf")}
              download="Aniruddh-Patil-Resume.pdf"
            >
              <FiDownload aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <ul className="hero-socials">
            {SocialData.map((social) => {
              const Icon = SOCIAL_ICONS[social.icon];
              return (
                <li key={social.platform}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${Profile.name} on ${social.platform}`}
                  >
                    {Icon ? <Icon aria-hidden="true" /> : social.platform}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hero-visual">
          <div className="art-frame">
            <div className="art-glow" aria-hidden="true" />
            <img
              src={require("../../../Pics/Coding.webp")}
              alt={`${Profile.name}, ${Profile.role}`}
              className="art"
              width="520"
              height="520"
              decoding="async"
              fetchpriority="high"
            />
          </div>

          {FLOATING_CHIPS.map((chip, index) => (
            <div
              key={chip.slot}
              className={`floating-chip chip-${chip.slot}`}
              style={{ animationDelay: `${index * -1.1}s` }}
              aria-hidden="true"
            >
              <TechIcon icon={chip.icon} />
              {chip.label}
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <ul className="stats-strip reveal">
          {Stats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
