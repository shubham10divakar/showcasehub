import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className='footer-container'>
      <div className='footer-inner'>
        <div>
          <p className='footer-name'>Subham <span>Divakar</span></p>
          <p className='footer-tagline'>Senior Software Engineer · Bangalore, India</p>
        </div>

        <div className='footer-links-row'>
          <a
            href='https://github.com/shubham10divakar'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-link'
          >
            <i className='fab fa-github' /> GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/subham-divakar-a7420a12a/'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-link'
          >
            <i className='fab fa-linkedin' /> LinkedIn
          </a>
          <a
            href='https://pypi.org/user/shubham10divakar/'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-link'
          >
            <i className='fab fa-python' /> PyPI
          </a>
          <a
            href='https://ieeexplore.ieee.org/abstract/document/9417920'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-link'
          >
            <i className='fas fa-file-alt' /> IEEE
          </a>
          <a
            href='mailto:shubham.divakar@gmail.com'
            className='footer-link'
          >
            <i className='fas fa-envelope' /> Email
          </a>
        </div>

        <hr className='footer-divider' />
        <p className='footer-bottom'>SubhamDivakar © {year}</p>
      </div>
    </div>
  );
}

export default Footer;
