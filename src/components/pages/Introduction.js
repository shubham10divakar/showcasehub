import React from 'react';
import './Introduction.css';
import profilePic from '../../images/channelLogo.png'; // Make sure to have your image in the specified path
import video1 from '../../videos/videoplayback2.mp4'
import DisplayVideo from '../../components/Video'

function Introduction() {
  return (
    <section id="introduction" className="introduction-section">
        <video src={video1} autoPlay muted loop />
      <div className="intro-content">
        <div className="intro-text">
        {/* <DisplayVideo file={video1}></DisplayVideo> */}
          <h1>Hello, I am Subham Divakar</h1>
          <p>Welcome to my portfolio.</p>
        </div>
        <div className="intro-image">
          <img src={profilePic} alt="Subham Divakar" />
        </div>
      </div>
    </section>
  );
}

export default Introduction;
