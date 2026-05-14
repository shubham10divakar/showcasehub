import React from 'react';
import './Skills.css';
import './WorkExperience.css';

const skillGroups = [
  {
    title: 'Languages',
    tags: ['Java', 'Python'],
  },
  {
    title: 'Frontend',
    tags: ['React', 'Vue.js', 'HTML', 'CSS'],
  },
  {
    title: 'Backend & DB',
    tags: ['Java 8', 'Spring', 'MySQL'],
  },
  {
    title: 'Cloud',
    tags: ['GCP', 'AWS', 'Azure'],
  },
  {
    title: 'Python Libraries (PyPI)',
    pip: true,
    tags: ['pip install sdcfc', 'pip install sdscmt'],
  },
];

function Skills() {
  return (
    <section className='skills-section'>
      <h2 className='section-block-title'>Skills</h2>
      <div className='skills-grid'>
        {skillGroups.map((group, i) => (
          <div className='skills-group' key={i}>
            <p className='skills-group-title'>{group.title}</p>
            <div className='skills-tags'>
              {group.tags.map((tag, j) => (
                <span
                  key={j}
                  className={`skill-tag${group.pip ? ' skill-tag-pip' : ''}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
