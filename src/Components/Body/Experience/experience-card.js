import React from 'react';
import './experience-card.css';

function ExperienceCard({ experience }) {
  const listItems = experience.about
    .split('\n')
    .filter(item => item.trim() !== '')
    .map((item, index) => (
      <li key={index}>{item.trim().replace(/^–\s*/, '')}</li>
    ));

  return (
    <div className='experience-card'>
      <div className='experience-info'>
        <div className='experience-header'>
          <label className='experience-title'>{experience.title}</label>
          <label className='experience-date'>{experience.date}</label>
        </div>
        <div className='experience-tags'>
          {experience.tags.map((tag, index) => (
            <label key={index} className='tag'>{tag}</label>
          ))}
        </div>
        <ul className='experience-about'>
          {listItems}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;