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
        <a
          className='scholar-badge'
          href='https://scholar.google.com/citations?user=44ecZj0AAAAJ&hl=en&authuser=1'
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg className='scholar-icon' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5z'/>
          </svg>
          <span className='scholar-badge-text'>
            <strong>100+ citations</strong> on Google Scholar
          </span>
          <span className='scholar-badge-arrow'>→</span>
        </a>
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
