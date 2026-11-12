import React, { Suspense, lazy, useEffect, useState } from 'react';
import { PageHeader, Reveal, Ext } from '../ui';
import { playUrl } from '../data';
import iconLostbird from '../assets/icon-lostbird.png';

const CitationRush = lazy(() => import('./CitationRush'));
const DinoGame = lazy(() => import('../../components/pages/DinoGame'));

const games = [
  { id: 'rush', title: 'Citation Rush', glyph: '📄', text: 'An original I built for this site. Catch falling papers, dodge the bugs, and see how many citations you can collect.' },
  { id: 'dino', title: 'Dino Runner', glyph: '🦖', text: 'The offline-page endless runner. Press Space to jump.' },
];

export default function Games() {
  const [playing, setPlaying] = useState(null);

  useEffect(() => {
    if (!playing) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setPlaying(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [playing]);

  return (
    <main className="page">
      <PageHeader eyebrow="Games" title="Press start">
        Gaming is the other hobby. Some I just play; these I made or wired in so you can take a break here.
      </PageHeader>

      <div className="grid-3">
        {games.map((g, i) => (
          <Reveal key={g.id} delay={i * 90} className="card game-card">
            <span className="game-glyph" aria-hidden="true">{g.glyph}</span>
            <h2>{g.title}</h2>
            <p>{g.text}</p>
            <button type="button" className="btn btn-primary" onClick={() => setPlaying(g.id)}>Play now</button>
          </Reveal>
        ))}
        <Reveal delay={180} className="card game-card">
          <img src={iconLostbird} alt="" className="app-icon" />
          <h2>Lost Bird</h2>
          <p>My Android arcade game with a global leaderboard. Guide the bird home.</p>
          <Ext href={playUrl('com.lostbird.app')} className="btn btn-ghost"><i className="fab fa-google-play" /> Google Play</Ext>
        </Reveal>
      </div>

      {playing && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-panel">
            <div className="modal-head">
              <h2>{games.find((g) => g.id === playing).title}</h2>
              <button type="button" className="btn btn-ghost" onClick={() => setPlaying(null)}>Close</button>
            </div>
            <Suspense fallback={<p className="muted">Loading…</p>}>
              {playing === 'rush' ? <CitationRush /> : <div className="dino-wrap"><DinoGame /></div>}
            </Suspense>
          </div>
        </div>
      )}
    </main>
  );
}
