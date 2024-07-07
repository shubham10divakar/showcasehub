import React, { useState } from 'react';
import './WorkExperience.css';

function WorkExperience() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="work-experience" className="work-experience-section">
      <button className="collapsible" onClick={toggleCollapse}>
        Work Experience
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      <div className={`content ${isOpen ? 'open' : ''}`}>
        <div className="job">
          <h3>Senior Software Engineer</h3>
          <h4>Persistent Systems</h4>
          <p>Duration: 07/10/2020 - Till now</p>
          <p>Responsibilities and achievements - Currently working as a fullstack developer and contributing to the IAAS cloud product development using JAVA8, VUE.JS, React and MYSQL.</p>
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

export default WorkExperience;
