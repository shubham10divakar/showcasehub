import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AppsPage.css';
import DinoGamePlayer from './DinoGame';
import Modal from './Modal';
import Footer from '../Footer';

import womenSafety from '../../images/ProjectsImages/womenssafety.jpg';

const androidApps = [
  {
    id: 'alice',
    title: 'ALICE — Women Safety App',
    description:
      'An Android app designed for women\'s safety. One-tap SOS sends real-time GPS location to emergency contacts. Built with background location tracking and stealth mode.',
    image: womenSafety,
    tags: ['Android', 'Java', 'GPS', 'Safety'],
    year: '2017',
    status: 'shipped',
    path: '/products/3',
  },
];

const games = [
  {
    id: 'dino',
    title: 'Dino Runner',
    description: 'The classic Chrome offline dinosaur endless runner — built right into the portfolio. Press Space to jump.',
    icon: '🦕',
    available: true,
  },
  {
    id: 'mario',
    title: 'Mario',
    description: 'Classic side-scrolling platformer. Coming soon!',
    icon: '🍄',
    available: false,
  },
  {
    id: 'templerun',
    title: 'Temple Run',
    description: 'Endless temple runner. Coming soon!',
    icon: '🏛️',
    available: false,
  },
];

const AppsPage = () => {
  const [modalGameId, setModalGameId] = useState(null);

  const openModal = (id) => setModalGameId(id);
  const closeModal = () => setModalGameId(null);

  return (
    <div className='apps-page'>
      {/* Android Apps */}
      <div className='apps-section-header'>
        <div className='apps-badge'>
          <i className='fab fa-android' /> Android Apps
        </div>
        <h1>Apps I've Built</h1>
        <p>Mobile and web applications shipped over the years</p>
      </div>

      <div className='apps-grid'>
        {androidApps.map((app) => (
          <Link key={app.id} to={app.path} className='app-card'>
            <div className='app-card-image-wrap'>
              <img src={app.image} alt={app.title} className='app-card-image' />
              <span className='app-card-year'>{app.year}</span>
            </div>
            <div className='app-card-body'>
              <div className='app-card-tags'>
                {app.tags.map((t) => (
                  <span key={t} className='app-tag'>{t}</span>
                ))}
              </div>
              <h2 className='app-card-title'>{app.title}</h2>
              <p className='app-card-desc'>{app.description}</p>
              <span className='app-card-cta'>View details →</span>
            </div>
          </Link>
        ))}

        {/* Placeholder for future apps */}
        <div className='app-card app-card-placeholder'>
          <div className='app-placeholder-icon'>📱</div>
          <p>More apps coming soon</p>
        </div>
      </div>

      {/* Games Section */}
      <div className='apps-divider' />

      <div className='apps-section-header'>
        <div className='apps-badge apps-badge-games'>
          <i className='fas fa-gamepad' /> Mini Games
        </div>
        <h2>Play Games</h2>
        <p>Mini-games built right into the portfolio — take a break!</p>
      </div>

      <div className='games-grid'>
        {games.map((game) => (
          <div key={game.id} className='mini-game-card'>
            <div className='mini-game-icon'>{game.icon}</div>
            <h3>{game.title}</h3>
            <p>{game.description}</p>
            <button
              className='mini-play-btn'
              onClick={() => game.available && openModal(game.id)}
              disabled={!game.available}
            >
              {game.available ? 'Play Now' : 'Coming Soon'}
            </button>
          </div>
        ))}
      </div>

      <Modal isOpen={modalGameId !== null} onClose={closeModal}>
        {modalGameId === 'dino' ? (
          <DinoGamePlayer />
        ) : (
          <p style={{ color: 'var(--text-secondary)', padding: '2rem' }}>Game is in development.</p>
        )}
      </Modal>

      {/* Privacy Policy Section */}
      <div className='apps-divider' />

      <div className='apps-section-header'>
        <div className='apps-badge apps-badge-policy'>
          <i className='fas fa-shield-alt' /> App Privacy
        </div>
        <h2>Privacy Policies</h2>
        <p>Privacy policies for published apps and games</p>
      </div>

      <div className='policy-grid'>
        <Link to='/lostbirdprivacypolicy' className='policy-card'>
          <div className='policy-card-icon'>🐦</div>
          <div className='policy-card-body'>
            <h3>Lost Bird</h3>
            <p>Android game — Firebase auth, leaderboard, AdMob rewarded ads</p>
            <span className='policy-card-cta'>Read Privacy Policy →</span>
          </div>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default AppsPage;
