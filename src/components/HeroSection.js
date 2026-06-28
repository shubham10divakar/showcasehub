import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import Scene3DLayer from './three/Scene3DLayer';

// Code-split: the Three.js bundle only loads for capable, motion-OK devices.
const NeuralScene = lazy(() => import('./three/NeuralScene'));

const roles = [
  'Senior Software Engineer',
  'Full Stack Developer',
  'Python Library Author',
  'AI / ML Researcher',
  'Hackathon Winner',
];

function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(i => (i + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hero-container'>
      <Scene3DLayer fallback={null}>
        {({ isMobile, frameloop }) => (
          <Suspense fallback={null}>
            <NeuralScene isMobile={isMobile} frameloop={frameloop} />
          </Suspense>
        )}
      </Scene3DLayer>

      <div className='hero-content'>
      <div className='hero-badge'>
        <span className='hero-badge-dot' />
        Available for opportunities
      </div>

      <h1>Hi, I'm <span>Subham Divakar</span></h1>

      <div className='hero-role-wrapper'>
        <p className='hero-role' key={roleIndex}>{roles[roleIndex]}</p>
      </div>

      <p className='hero-description'>
        Building cloud products at Persistent Systems · Published researcher in AI/ML ·
        Open-source Python library author · 2× Hackathon champion · 100+ Google Scholar citations
      </p>

      <div className='hero-stats'>
        <div className='hero-stat'>
          <span className='hero-stat-number'>4+</span>
          <span className='hero-stat-label'>Years Experience</span>
        </div>
        <div className='hero-stat'>
          <span className='hero-stat-number'>2</span>
          <span className='hero-stat-label'>Publications</span>
        </div>
        <a
          className='hero-stat hero-stat-link'
          href='https://scholar.google.com/citations?user=44ecZj0AAAAJ&hl=en&authuser=1'
          target='_blank'
          rel='noopener noreferrer'
          title='View Google Scholar profile'
        >
          <span className='hero-stat-number hero-stat-citations'>100+</span>
          <span className='hero-stat-label'>Scholar Citations</span>
        </a>
        <div className='hero-stat'>
          <span className='hero-stat-number'>5+</span>
          <span className='hero-stat-label'>Projects</span>
        </div>
        <div className='hero-stat'>
          <span className='hero-stat-number'>2</span>
          <span className='hero-stat-label'>Hackathon Wins</span>
        </div>
      </div>

      <div className='hero-btns'>
        <Link to='/portfolio' className='hero-btn-primary'>
          View Portfolio
        </Link>
        <Link to='/myworks' className='hero-btn-secondary'>
          My Projects
        </Link>
      </div>
      </div>

      <div className='hero-scroll-hint'>
        <span>scroll</span>
        <i className='fas fa-chevron-down' />
      </div>
    </div>
  );
}

export default HeroSection;
