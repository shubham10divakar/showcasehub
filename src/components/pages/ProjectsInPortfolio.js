import React from 'react';
import './WorkExperience.css';

const projects = [
  {
    name: 'SDSCMT',
    fullName: 'Secure Data SSL Certificate Management Tool',
    duration: '2024 – Ongoing',
    desc: 'Powerful tool for generating and managing self-signed SSL certificates and private key files, with seamless conversion between PEM, DER, and PKCS12 formats.',
    pip: 'pip install sdscmt',
  },
  {
    name: 'SDCFC',
    fullName: 'Secure Data Certificate Format Converter',
    duration: '2024 – Ongoing',
    desc: 'Manages certificate and private key files with seamless conversion between PEM, DER, and PKCS12 formats. User-friendly interface to streamline your workflow securely.',
    pip: 'pip install sdcfc',
  },
];

function ProjectsInPortfolio() {
  return (
    <section className='section-block'>
      <h2 className='section-block-title'>Open Source Projects</h2>
      <div className='timeline'>
        {projects.map((p, i) => (
          <div className='timeline-item' key={i}>
            <div className='timeline-header'>
              <div>
                <h3 className='timeline-role'>{p.name}</h3>
                <p className='timeline-company'>{p.fullName}</p>
              </div>
              <span className='timeline-duration'>{p.duration}</span>
            </div>
            <p className='timeline-desc'>{p.desc}</p>
            <div className='timeline-tags'>
              <span className='timeline-tag'>Python</span>
              <span className='timeline-tag'>PyPI</span>
              <span className='timeline-tag' style={{ fontFamily: 'monospace' }}>{p.pip}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsInPortfolio;
