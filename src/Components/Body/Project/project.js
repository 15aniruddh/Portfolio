import React from 'react'
import ProjectCard from './project-card';
import { ProjectData } from '../../Data/Projects'
import './project.css'
import Separator from '../../Common/Separator/separator';

function Project() {
  const data = ProjectData;
  return (
    <div className='projects'>
      <Separator />
      <label className='section-title'>Projects</label>
      <div>
          {data.map(( project )=> {
            return (
              <ProjectCard project={ project } />              
            )
          })}
      </div>
    </div>
  )
}

export default Project;