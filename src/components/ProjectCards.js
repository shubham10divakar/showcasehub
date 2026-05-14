import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCards.css';

import womensafety from '../images/ProjectsImages/womenssafety.jpg';
import drowsiness from '../images/ProjectsImages/drowziness detection.jpeg';
import plant from '../images/ProjectsImages/plantdiseasedetection.jpg';
import sdcfc from '../images/sdcfc.png';
import sdscmt from '../images/ProjectsImages/sdscmt.png';

const projects = [
  {
    src: sdscmt,
    title: 'Secure Data SSL Certificate Management Tool (SDSCMT)',
    label: 'SSL Certificate Management',
    path: '/projectdetails/2',
    year: '2024',
  },
  {
    src: sdcfc,
    title: 'Secure Data Certificate Format Converter (SDCFC)',
    label: 'SSL Private Keys',
    path: '/projectdetails/1',
    year: '2024',
  },
  {
    src: womensafety,
    title: 'ALICE — Women Safety App',
    label: 'Android',
    path: '/products/3',
    year: '2017',
  },
  {
    src: drowsiness,
    title: 'Drowsiness Detection',
    label: 'AI / ML',
    path: '/products/4',
    year: '2019',
  },
  {
    src: plant,
    title: 'Plant Disease Detection — SIH 2019',
    label: 'AI / ML',
    path: '/products/5',
    year: '2019',
  },
];

function ProjectCards() {
  return (
    <section className='projects-section'>
      <div className='projects-section-header'>
        <h2>Featured Projects</h2>
        <p>A selection of things I've built over the years</p>
      </div>
      <div className='projects-grid'>
        {projects.map((p, i) => (
          <Link key={i} className='project-card' to={p.path}>
            <img className='project-card-image' src={p.src} alt={p.title} />
            <div className='project-card-body'>
              <span className='project-card-label'>{p.label}</span>
              <h3 className='project-card-title'>{p.title}</h3>
              <span className='project-card-year'>{p.year}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProjectCards;
