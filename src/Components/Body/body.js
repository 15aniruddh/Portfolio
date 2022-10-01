import React from 'react'
import About from './About/about'
import Contact from './Contact/contact'
import Project from './Project/project'
import Skills from './Skills/skills'
import './body.css'

function Body() {
  return (
    <div className='body'>
        <section id='about'>
          <About />
        </section>
        <section id='project'>
          <Project />
        </section>
        <section id='skills'>
          <Skills />
        </section>
        <section id='contact'>
          <Contact />
        </section>        
    </div>
  )
}

export default Body;