import React from 'react';
import { Link } from 'react-router-dom';
import awards from './pages/AwardsListJS';
import Footer from './Footer';
import './AwardsPage.css';

const AwardsPage = () => {
  return (
    <div className='awards-page'>
      <div className='awards-header'>
        <h1>Awards & Recognition</h1>
        <p>Hackathon victories and achievements</p>
      </div>
      <div className='awards-grid'>
        {awards.map((award) => (
          <Link key={award.id} to={`/awards/${award.id}`} className='award-card'>
            <div className='award-card-image-wrap'>
              <img src={award.image} alt={award.title} className='award-card-image' />
              <span className='award-card-badge'>
                <i className='fas fa-trophy' /> Winner
              </span>
            </div>
            <div className='award-card-body'>
              <h2 className='award-card-title'>{award.title}</h2>
              <p className='award-card-desc'>{award.description}</p>
              <span className='award-card-link'>View gallery →</span>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AwardsPage;
