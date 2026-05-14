import React from 'react';
import './WorkExperience.css';

function WorkExperience() {
  return (
    <section className='section-block'>
      <h2 className='section-block-title'>Work Experience</h2>
      <div className='timeline'>
        <div className='timeline-item'>
          <div className='timeline-header'>
            <div>
              <h3 className='timeline-role'>Senior Software Engineer</h3>
              <p className='timeline-company'>Persistent Systems</p>
            </div>
            <span className='timeline-duration'>Oct 2020 — Present</span>
          </div>
          <p className='timeline-desc'>
            Working as a full stack developer on IAAS cloud product development.
            Responsible for feature development, bug fixes, and system design
            using Java 8, Vue.js, React, and MySQL.
          </p>
          <div className='timeline-tags'>
            <span className='timeline-tag'>Java 8</span>
            <span className='timeline-tag'>React</span>
            <span className='timeline-tag'>Vue.js</span>
            <span className='timeline-tag'>MySQL</span>
            <span className='timeline-tag'>IAAS Cloud</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
