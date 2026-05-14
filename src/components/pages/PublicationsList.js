import React from 'react';
import { Link } from 'react-router-dom';
import './PublicationsList.css';
import imag1 from '../../images/ProjectsImages/plantdiseasedetection.jpg';
import Footer from '../Footer';

const publications = [
  {
    id: 1,
    title: 'Smote-DL: A Deep Learning Based Plant Disease Detection Method',
    year: 2021,
    citations: 22,
    publisher: 'IEEE Xplore',
    domain: 'Plant Disease Detection',
    imageUrl: imag1,
  },
  {
    id: 2,
    title: 'COLEN — An Improvised Deep Learning Model for Plant Disease Detection Using Varying Color Space',
    year: 2022,
    citations: 2,
    publisher: 'Springer',
    domain: 'Plant Disease Detection',
    imageUrl: imag1,
  },
];

const PublicationsList = () => {
  return (
    <div className='publications-page'>
      <div className='publications-header'>
        <h1>Publications</h1>
        <p>Peer-reviewed research in AI/ML and plant disease detection</p>
      </div>
      <div className='publications-grid'>
        {publications.map((pub) => (
          <Link key={pub.id} to={`/publications/${pub.id}`} className='pub-card'>
            <img src={pub.imageUrl} alt={pub.title} className='pub-card-image' />
            <div className='pub-card-body'>
              <span className='pub-card-domain'>{pub.domain}</span>
              <h2 className='pub-card-title'>{pub.title}</h2>
              <div className='pub-card-meta'>
                <span className='pub-card-stat'>
                  <i className='fas fa-calendar' /> {pub.year}
                </span>
                <span className='pub-card-stat'>
                  <i className='fas fa-quote-right' /> {pub.citations} citations
                </span>
              </div>
              <p className='pub-card-publisher'>{pub.publisher}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PublicationsList;
