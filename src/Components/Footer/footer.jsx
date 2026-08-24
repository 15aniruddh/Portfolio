import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { NavLinks, Profile } from "../Data/Profile";
import "./footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-credit">
          Made with <span aria-hidden="true">🔥</span> by {Profile.firstName}
          <span className="footer-year">
            © {new Date().getFullYear()}
          </span>
        </p>

        <nav className="footer-nav" aria-label="Footer">
          <ul>
            {NavLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#hero" className="back-to-top" aria-label="Back to top">
          <FiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
