// src/components/PublicationCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PublicationCard.css';

const PublicationCard = ({ id, title, year, citations }) => {
  return (
    <div className="card">
      <Link to={`/publications/${id}`}>
        <h2>{title}</h2>
        <p>Year: {year}</p>
        <p>Citations: {citations}</p>
      </Link>
    </div>
  );
};

export default PublicationCard;
