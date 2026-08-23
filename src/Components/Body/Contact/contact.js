import React from "react";
import { FaGithub, FaLinkedinIn, FaGitlab } from "react-icons/fa";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { SocialData } from "../../Data/Social";
import { Profile } from "../../Data/Profile";
import "./contact.css";

const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  gitlab: FaGitlab,
};

function Contact() {
  return (
    <div className="container section contact">
      <div className="contact-panel reveal">
        <div className="contact-glow" aria-hidden="true" />

        <div className="contact-copy">
          <span className="section-eyebrow">Get in touch</span>
          <h2 className="section-title">
            Let's build something <span className="text-gradient">together</span>
          </h2>
          <p className="section-subtitle">
            Whether it's a role, a project or just a good engineering problem —
            I'm happy to hear about it. Reach me on any of these platforms.
          </p>

          <a
            className="btn btn-primary contact-resume"
            href={require("../../Data/Resume.pdf")}
            download="Aniruddh-Patil-Resume.pdf"
          >
            <FiDownload aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <ul className="contact-socials">
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
                  <span className="contact-social-icon" aria-hidden="true">
                    {Icon && <Icon />}
                  </span>
                  <span className="contact-social-text">
                    <strong>{social.platform}</strong>
                    <span>{social.handle}</span>
                  </span>
                  <FiArrowUpRight
                    className="contact-social-arrow"
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Contact;
