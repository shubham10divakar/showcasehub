// src/components/PublicationsList.js
import React from 'react';
import PublicationCard from './PublicationCard';
import './PublicationsList.css';
import video1 from '../../videos/innovideoplayback2.mp4'

const publications = [
  { id: 1, title: 'Publication 1', year: 2021, citations: 15 },
  { id: 2, title: 'Publication 2', year: 2020, citations: 10 },
  // Add more publications as needed
];

const PublicationsList = () => {
  return (
    <div>
        <video src={video1} autoPlay muted loop />
        <div className="publications-list"> 
      <h1>My Publications</h1>
      <div className="cards-container">
        {publications.map((pub) => (
          <PublicationCard 
            key={pub.id} 
            id={pub.id} 
            title={pub.title} 
            year={pub.year} 
            citations={pub.citations} 
          />
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default PublicationsList;
