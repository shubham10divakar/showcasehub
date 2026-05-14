import React, { useState } from 'react';
import './GamesPage.css';
import DinoGamePlayer from './DinoGame';
import Modal from './Modal';

const games = [
  {
    title: 'Dino Game',
    description: 'The classic Chrome offline dinosaur endless runner. Press space to jump.',
    id: 'dino',
    icon: '🦕',
    available: true,
  },
  {
    title: 'Mario Game',
    description: 'Classic side-scrolling platformer. Coming soon!',
    id: 'mario',
    icon: '🍄',
    available: false,
  },
  {
    title: 'Temple Run',
    description: 'Endless temple runner. Coming soon!',
    id: 'templerun',
    icon: '🏛️',
    available: false,
  },
];

const GamesPage = () => {
  const [modalGameId, setModalGameId] = useState(null);

  const openModal = (gameId) => setModalGameId(gameId);
  const closeModal = () => setModalGameId(null);

  const renderModalContent = () => {
    if (modalGameId === 'dino') return <DinoGamePlayer />;
    return <p style={{ color: 'var(--text-secondary)', padding: '2rem' }}>Game is in development.</p>;
  };

  return (
    <div className='games-page'>
      <h1>Play Games</h1>
      <p className='games-subtitle'>Take a break — mini-games built into the portfolio</p>
      <div className='games-list'>
        {games.map((game) => (
          <div key={game.id} className='game-card'>
            <div className='game-card-icon'>{game.icon}</div>
            <h2>{game.title}</h2>
            <p>{game.description}</p>
            <button
              onClick={() => openModal(game.id)}
              className='play-button'
              disabled={!game.available}
            >
              {game.available ? 'Play Now' : 'Coming Soon'}
            </button>
          </div>
        ))}
      </div>
      <Modal isOpen={modalGameId !== null} onClose={closeModal}>
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default GamesPage;
