import React from 'react';
import './WorkExperience.css';

// Served from /public (referenced by URL) so CRA's SVGR doesn't try to parse
// these vendor logo SVGs as JSX.
const sgLogo = `${process.env.PUBLIC_URL}/logos/societegenerale.svg`;
const persistentLogo = `${process.env.PUBLIC_URL}/logos/persistent.svg`;

const experiences = [
  {
    role: 'Full-Stack AI/ML Developer',
    company: 'Société Générale',
    logo: sgLogo,
    duration: 'Aug 2025 — Present',
    desc:
      'Building full-stack and AI/ML-driven solutions for one of Europe\'s leading financial services groups, ' +
      'spanning data-intensive product features and intelligent automation.',
    tags: ['Full Stack', 'AI / ML', 'Python', 'React', 'Fintech'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Persistent Systems',
    logo: persistentLogo,
    duration: 'Oct 2020 — Aug 2025',
    desc:
      'Worked as a full stack developer on IAAS cloud product development. Responsible for feature ' +
      'development, bug fixes, and system design using Java 8, Vue.js, React, and MySQL.',
    tags: ['Java 8', 'React', 'Vue.js', 'MySQL', 'IAAS Cloud'],
  },
];

function WorkExperience() {
  return (
    <section className='section-block'>
      <h2 className='section-block-title'>Work Experience</h2>
      <div className='timeline'>
        {experiences.map((exp, i) => (
          <div className='timeline-item' key={i}>
            <div className='timeline-header'>
              <div className='timeline-headline'>
                <div className='timeline-logo'>
                  <img src={exp.logo} alt={`${exp.company} logo`} />
                </div>
                <div>
                  <h3 className='timeline-role'>{exp.role}</h3>
                  <p className='timeline-company'>{exp.company}</p>
                </div>
              </div>
              <span className='timeline-duration'>{exp.duration}</span>
            </div>
            <p className='timeline-desc'>{exp.desc}</p>
            <div className='timeline-tags'>
              {exp.tags.map((t) => (
                <span className='timeline-tag' key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
