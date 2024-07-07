// src/components/PublicationCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PublicationCard.css';

const PublicationCard = ({ id, title, year, citations, googlescholarlink, domain, imageUrl }) => {
  return (
    <div className="card">
      <Link to={`/publications/${id}`}>
      <img src={imageUrl} alt={title} className="card-image" />
        <h2>{title}</h2>
        <p>Year: {year}</p>
        <p>Citations: {citations}</p>
        <p>GoogleScholarLink: {googlescholarlink}</p>
        <p>Domain: {domain}</p>
      </Link>
    </div>
  );
};

export default PublicationCard;
