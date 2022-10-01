import React from 'react'
import './project-card.css'
import { AiFillGitlab } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className='project-card'>
        <div className='project-info'>
            <label className='project-title'>{ project.title }</label>
            <div className='project-links'>
                { project.gitlab && (
                    <a className='project-link' href={ project.gitlab } >
                        <div className='link-button'><AiFillGitlab />&nbsp;GitLab</div>
                    </a> )}
                { project.github && (
                    <a className='project-link' href={ project.github } >
                        <div className='link-button'><FaGithub />&nbsp;GitHub</div>
                    </a> )}
            </div>
            <p>{ project.about }</p>
            <div className='project-tags'>
            { project.tags.map((tag)=> {
                return (
                    <label className='tag'>{ tag }</label>
                )
            })}
            </div>
        </div>
        <img src={ project.image } className='project-photo' alt='projectImg' />
    </div>
  )
}

export default ProjectCard;