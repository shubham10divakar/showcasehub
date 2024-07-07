// src/components/PublicationsList.js
import React from 'react';
import PublicationCard from './PublicationCard';
import './PublicationsList.css';
import video1 from '../../videos/innovideoplayback2.mp4'
import imag1 from '../../images/img-1.jpg'

const publications = [
  { id: 1, title: 'Publication 1', year: 2021, citations: 15, GoogleScholarLink: 'dsfdsf', domain: 'dsfds', imageUrl: imag1 },
  { id: 2, title: 'Publication 2', year: 2020, citations: 10, GoogleScholarLink: 'dsfsdf', domain: 'dsfds', imageUrl: imag1},
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
            domain={pub.domain}
            imageUrl={pub.imageUrl} 
          />
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default PublicationsList;
