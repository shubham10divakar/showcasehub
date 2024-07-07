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
        Projects
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      <div className={`content ${isOpen ? 'open' : ''}`}>
        <div className="job">
          <h3>SDCFC</h3>
          <h4>Secure Data SSL Certificate Management Tool</h4>
          <p>Duration: 2024 - Ongoing</p>
          <p>Secure Data SSL Certificate Management Tool (SDSCMT) is a powerful tool for generating and managing self signed ssl certificates and private key files, offering seamless conversion between PEM, DER, and PKCS12 formats as well. Whether you need to generate, convert, or manage self signed ssl certificates, SDSCMT provides a user-friendly interface to get the job done.</p>
          <p>PYPI: pip install sdscmt</p>
        </div>
        <div className="job">
          <h3>SDCFC</h3>
          <h4>Secure Data Certificate Format Converter</h4>
          <p>Duration: 2024 - Ongoing</p>
          <p>Secure Data Certificate Format Converter (SDCFC) is a powerful tool for managing certificate and private key files, offering seamless conversion between PEM, DER, and PKCS12 formats. Whether you need to generate, convert, or manage certificates, SD-CFC provides a user-friendly interface to streamline your workflow securely.</p>
          <p>PYPI: pip install sdcfc</p>
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
