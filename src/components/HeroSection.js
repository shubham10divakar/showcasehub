import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video from '../videos/sih2019-1.mp4'
import video1 from '../videos/video-1.mp4'
import DisplayVideo from './Video';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src={video1} autoPlay muted loop /> */}
      <DisplayVideo file={video1}></DisplayVideo>
      <h1>Innovation Awaits</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          My Portfolio
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Awards&Recognition <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
