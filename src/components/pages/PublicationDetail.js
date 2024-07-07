// src/components/PublicationDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './PublicationDetail.css';
import imag1 from '../../images/img-1.jpg'

const publications = [
    { id: 1, title: 'Publication 1', year: 2021, citations: 15, GoogleScholarLink: 'dsfdsf', domain: 'dsfds', imageUrl: imag1, abstract: 'Abstract of Publication 1',
      findings: 'Findings of Publication 1',
      details: 'Major details of Publication 1' },
    { id: 2, title: 'Publication 2', year: 2020, citations: 10, GoogleScholarLink: 'dsfsdf', domain: 'dsfds', imageUrl: imag1,  abstract: 'Abstract of Publication 2',
      findings: 'Findings of Publication 1',
      details: 'Major details of Publication 2' },
    // Add more publications as needed
  ];

const PublicationDetail = () => {
  const { id } = useParams();
  const publication = publications.find((pub) => pub.id === parseInt(id));

  if (!publication) {
    return <h2>Publication not found</h2>;
  }

  return (
    <div className="publication-detail">
      <img src={publication.imageUrl} alt={publication.title} className="detail-image" />
      <h1>{publication.title}</h1>
      <p><strong>Year:</strong> {publication.year}</p>
      <p><strong>Citations:</strong> {publication.citations}</p>
      <div className="detail-section">
        <h2>Abstract</h2>
        <p>{publication.abstract}</p>
      </div>
      <div className="detail-section">
        <h2>Findings</h2>
        <p>{publication.findings}</p>
      </div>
      <div className="detail-section">
        <h2>Major Details</h2>
        <p>{publication.details}</p>
      </div>
    </div>
  );
};

export default PublicationDetail;
