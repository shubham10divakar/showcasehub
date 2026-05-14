import React from 'react';
import './Introduction.css';
import profilePic from '../../images/channelLogo.png';
import { Avatar } from '@mui/material';

function Introduction() {
  return (
    <section className='intro-section'>
      <div className='intro-inner'>
        <Avatar
          alt="Subham Divakar"
          src={profilePic}
          sx={{ width: 100, height: 100 }}
          className='intro-avatar'
        />
        <div className='intro-text'>
          <h1 className='intro-name'>Subham Divakar</h1>
          <p className='intro-role'>Senior Software Engineer at Persistent Systems</p>
          <p className='intro-bio'>
            Full Stack Developer working on IAAS cloud product development since 2020.
            Published AI/ML researcher with 24+ citations. Open-source Python library
            author. Two-time hackathon winner.
          </p>
          <div className='intro-quick-links'>
            <a href='https://github.com/shubham10divakar' target='_blank' rel='noopener noreferrer' className='intro-quick-link'>
              <i className='fab fa-github' /> GitHub
            </a>
            <a href='https://www.linkedin.com/in/subham-divakar-a7420a12a/' target='_blank' rel='noopener noreferrer' className='intro-quick-link'>
              <i className='fab fa-linkedin' /> LinkedIn
            </a>
            <a href='mailto:shubham.divakar@gmail.com' className='intro-quick-link'>
              <i className='fas fa-envelope' /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
