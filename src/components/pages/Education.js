import React from 'react';
import './WorkExperience.css';

function Education() {
  const entries = [
    {
      degree: 'B.Tech — Electronics & Telecommunication',
      institute: 'CV Raman Global University',
      duration: '2016 – 2020',
      score: 'CGPA: 7.8',
    },
    {
      degree: 'XII — Science',
      institute: 'MNPS JSR',
      duration: '2014 – 2015',
      score: '88%',
    },
  ];

  return (
    <section className='section-block'>
      <h2 className='section-block-title'>Education</h2>
      <div className='timeline'>
        {entries.map((e, i) => (
          <div className='timeline-item' key={i}>
            <div className='timeline-header'>
              <div>
                <h3 className='timeline-role'>{e.degree}</h3>
                <p className='timeline-company'>{e.institute}</p>
              </div>
              <span className='timeline-duration'>{e.duration}</span>
            </div>
            <div className='timeline-tags'>
              <span className='timeline-tag'>{e.score}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
