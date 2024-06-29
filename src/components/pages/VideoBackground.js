// VideoBackground.js

import React from 'react';
import './VideoBackground.css'; // Import your CSS file for 
import video1 from '../../videos/video-2.mp4'

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="video">
        <source src={video1} type="video/mp4" />
        {/* Add additional sources for other video formats if needed */}
        Your browser does not support the video tag.
      </video>
      <div className="content">
        {/* Your other content can go here, such as your "About Me" component */}
      </div>
    </div>
  );
};

export default VideoBackground;
