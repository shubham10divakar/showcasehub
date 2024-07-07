import React, { useState } from 'react';
import './Skills.css';

function Skills() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="work-experience" className="work-experience-section">
      <button className="collapsible" onClick={toggleCollapse}>
        Skills
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      <div className={`content ${isOpen ? 'open' : ''}`}>
        <div className="job">
          <h3></h3>
          <h4>FullStack Developer</h4>
          <p>Languages: Java, Python</p>
          <p>UI: React, Vue.js</p>
          <p>DB: MySql</p>
          <p>Cloud: GCP, AWS, Azure</p>
        </div>
        <div className="job">
          <h3></h3>
          <h4>Developer of Python Libraries</h4>
          <p>Languages: Python</p>
          <p>Projects: Available on pip</p>
          <p>pip install sdcfc</p>
          <p>pip instal sdcmt</p>
        </div>
        {/* Add more job entries as needed */}
      </div>
    </section>
  );
}

export default Skills;
