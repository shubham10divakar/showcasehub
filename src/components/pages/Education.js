import React, { useState } from 'react';
import './WorkExperience.css';

function Education() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="work-experience" className="work-experience-section">
      <button className="collapsible" onClick={toggleCollapse}>
        Education
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      <div className={`content ${isOpen ? 'open' : ''}`}>
        <div className="job">
          <h3>B.TECH</h3>
          <h4>CV Raman Global University</h4>
          <p>Duration: 2016 - 2020</p>
          <p>Branch: Electronics and Telecommunication</p>
          <p>CGPA: 7.8</p>
        </div>
        <div className="job">
          <h3>XII</h3>
          <h4>MNPS JSR</h4>
          <p>Stream: Science</p>
          <p>Duration: 2014 - 2015</p>
          <p>Percentile: 88%</p>
        </div>
        {/* <div className="job">
          <h3>Job Title 2</h3>
          <h4>Company Name 2</h4>
          <p>Duration: Start Date - End Date</p>
          <p>Responsibilities and achievements...</p>
        </div>
        <div className="job">
          <h3>Job Title 3</h3>
          <h4>Company Name 3</h4>
          <p>Duration: Start Date - End Date</p>
          <p>Responsibilities and achievements...</p>
        </div> */}
        {/* Add more job entries as needed */}
      </div>
    </section>
  );
}

export default Education;
