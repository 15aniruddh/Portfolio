import React, { useCallback, useEffect, useState } from "react";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { NavLinks, Profile } from "../Data/Profile";
import useScrollSpy from "../Common/hooks/useScrollSpy";
import "./header.css";

/* "hero" is tracked but has no nav link, so nothing is highlighted up top */
const SECTION_IDS = ["hero", ...NavLinks.map((link) => link.id)];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  const close = useCallback(() => setIsOpen(false), []);

  /* Solidify the bar once the hero starts scrolling away */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock the page behind the drawer and allow Escape to dismiss it */
  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("no-scroll");
    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#hero" className="brand" onClick={close}>
          <span className="brand-mark" aria-hidden="true">
            {Profile.firstName.charAt(0)}
          </span>
          <span className="brand-text">
            {Profile.firstName}
            <span className="brand-dot">.</span>
          </span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          <ul>
            {NavLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeId === link.id ? "is-active" : ""}
                  aria-current={activeId === link.id ? "true" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt4 />}
        </button>
      </div>

      {/* Drawer stays mounted so it can animate both directions */}
      <div
        className={`nav-backdrop ${isOpen ? "is-open" : ""}`}
        onClick={close}
        aria-hidden="true"
      />
      <nav
        id="mobile-nav"
        className={`nav-mobile ${isOpen ? "is-open" : ""}`}
        aria-label="Mobile"
        aria-hidden={!isOpen}
      >
        <ul>
          {NavLinks.map((link, index) => (
            <li key={link.id} style={{ "--i": index }}>
              <a
                href={`#${link.id}`}
                onClick={close}
                className={activeId === link.id ? "is-active" : ""}
                tabIndex={isOpen ? 0 : -1}
              >
                <span className="nav-mobile-index">
                  0{index + 1}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          className="btn btn-ghost nav-mobile-cta"
          href={require("../Data/Resume.pdf")}
          download="Aniruddh-Patil-Resume.pdf"
          onClick={close}
          tabIndex={isOpen ? 0 : -1}
        >
          <FiDownload aria-hidden="true" />
          Download Resume
        </a>
      </nav>
    </header>
  );
}

export default Header;
