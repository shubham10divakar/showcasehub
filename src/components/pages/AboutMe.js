import React from 'react';
import './AboutMe.css';
import { Avatar } from '@mui/material';
import pic from '../../images/channelLogo.png';

const AboutMe = () => {
  return (
    <div className='aboutme-page'>
      <div className='aboutme-card'>
        <Avatar
          alt="Subham Divakar"
          src={pic}
          sx={{ width: 120, height: 120 }}
          className='aboutme-avatar'
        />

        <h1 className='aboutme-name'>Subham Divakar</h1>
        <p className='aboutme-title'>Senior Software Engineer · Full Stack Developer</p>
        <p className='aboutme-location'>
          <i className='fas fa-map-marker-alt' /> Bangalore, India
        </p>

        <hr className='aboutme-divider' />

        <div className='aboutme-tags'>
          <span className='aboutme-tag'>Java</span>
          <span className='aboutme-tag'>Python</span>
          <span className='aboutme-tag'>React</span>
          <span className='aboutme-tag'>Vue.js</span>
          <span className='aboutme-tag'>MySQL</span>
          <span className='aboutme-tag'>GCP</span>
          <span className='aboutme-tag'>AWS</span>
          <span className='aboutme-tag'>Azure</span>
          <span className='aboutme-tag'>IAAS Cloud</span>
        </div>

        <div className='aboutme-interests'>
          <h3>Interests</h3>
          <div className='aboutme-interest-list'>
            <span className='aboutme-interest'><i className='fas fa-gamepad' /> Gaming</span>
            <span className='aboutme-interest'><i className='fas fa-futbol' /> Football</span>
            <span className='aboutme-interest'><i className='fas fa-book' /> Reading</span>
          </div>
        </div>

        <div className='aboutme-links'>
          <a
            href='https://www.linkedin.com/in/subham-divakar-a7420a12a/'
            target='_blank'
            rel='noopener noreferrer'
            className='aboutme-link aboutme-link-linkedin'
          >
            <i className='fab fa-linkedin' /> LinkedIn
          </a>
          <a
            href='https://github.com/shubham10divakar'
            target='_blank'
            rel='noopener noreferrer'
            className='aboutme-link aboutme-link-github'
          >
            <i className='fab fa-github' /> GitHub
          </a>
          <a
            href='mailto:shubham.divakar@gmail.com'
            className='aboutme-link aboutme-link-email'
          >
            <i className='fas fa-envelope' /> Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
