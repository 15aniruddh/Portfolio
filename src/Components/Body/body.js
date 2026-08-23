import React from "react";
import Hero from "./Hero/hero";
import About from "./About/about";
import Experience from "./Experience/experience";
import Project from "./Project/project";
import Skills from "./Skills/skills";
import Contact from "./Contact/contact";
import "./body.css";

function Body() {
  return (
    <main id="main" className="body">
      <Hero />

      <section id="about" aria-label="About">
        <About />
      </section>

      <section id="experience" aria-label="Experience">
        <Experience />
      </section>

      <section id="projects" aria-label="Projects">
        <Project />
      </section>

      <section id="skills" aria-label="Skills">
        <Skills />
      </section>

      <section id="contact" aria-label="Contact">
        <Contact />
      </section>
    </main>
  );
}

export default Body;
