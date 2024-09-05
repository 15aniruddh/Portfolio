import React from 'react';
import ExperienceCard from './experience-card';
import { ExperienceData } from '../../Data/Experiences';
import './experience.css';
import Separator from '../../Common/Separator/separator';

function Experience() {
  const data = ExperienceData;
  return (
    <div className='experiences'>
      <Separator />
      <label className='section-title'>Experiences</label>
      <div>
          {data.map(( experience )=> {
            return (
              <ExperienceCard experience={ experience } />              
            )
          })}
      </div>
    </div>
  )
}

export default Experience;