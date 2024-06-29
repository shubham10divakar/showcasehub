import React from 'react';
import './AboutMe.css'; // Import your CSS file for styling
import VideoBackground from './VideoBackground';
import { Avatar } from '@mui/material'; // Import Avatar component from Material-
import pic from '../../images/channelLogo.png'

const AboutMe = () => {
  return (
    <div>
      <VideoBackground />
      <section className="about-me">
      <div className="container">
      <Avatar
          alt="Subham Divakar"
          src={pic} // Replace with the actual path to your profile picture
          sx={{ width: 150, height: 150 }} // Adjust size as needed
          className="avatar"
        />
        <h1>Hi, I'm Subham Divakar</h1>
        <p className="location">Based in Bangalore</p>
        <p className="profession">Coder - Working in IT industry</p>
        <p className="skills">Skills: Full Stack Developer</p>
        <p className="interests">Interests: Gaming, Football, Reading Books</p>
        <div className="contact">
          <p>Let's connect:</p>
          <a href="https://www.linkedin.com/in/subham-divakar-a7420a12a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:[shubham.divakar@gmail.com]">Email</a>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default AboutMe;
