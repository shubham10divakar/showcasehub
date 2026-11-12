import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, Reveal, Lightbox } from '../ui';
import { scholar, packages, papers } from '../data';
import pmHero from '../assets/pm-hero.jpg';
import pmStage from '../assets/pm-stage.jpg';
import pmSpeech from '../assets/pm-speech.jpg';
import s1 from '../assets/smih-1.jpg';
import s2 from '../assets/smih-2.jpg';
import s3 from '../assets/smih-3.jpg';
import s4 from '../assets/smih-4.jpg';
import s5 from '../assets/smih-5.jpg';
import s6 from '../assets/smih-6.jpg';

const smartIndia = [s3, s1, s2, s4, s6, s5];

function Photo({ src, alt, className = '', open }) {
  return (
    <button type="button" className={`photo ${className}`} onClick={() => open(src)}>
      <img src={src} alt={alt} loading="lazy" />
    </button>
  );
}

export default function Achievements() {
  const [shot, setShot] = useState(null);
  const close = useCallback(() => setShot(null), []);

  return (
    <main className="page">
      <PageHeader eyebrow="Achievements" title="Honours and milestones" />

      <Reveal as="section" className="honour">
        <div className="honour-copy">
          <p className="honour-chip"><span className="tricolour-dot" />National honour</p>
          <h2>Singapore–India Hackathon 2019, Winner</h2>
          <p className="lede">
            Team DeadSec took the S$10,000 prize, presented on stage by Prime Minister
            Narendra Modi at the prize distribution at IIT Madras on 30 September 2019.
            I’m the one in the denim shirt, standing next to him.
          </p>
          <p className="muted">Organised by the Ministry of Human Resource Development, Government of India, with NTU Singapore.</p>
        </div>
        <div className="honour-photos">
          <Photo src={pmHero} alt="On stage beside the Prime Minister, holding the winners' cheque" className="photo-main" open={setShot} />
          <Photo src={pmStage} alt="The full stage at the prize distribution" open={setShot} />
          <Photo src={pmSpeech} alt="The Prime Minister addressing the hackathon" open={setShot} />
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <p className="eyebrow">Also in 2019</p>
        <h2>Smart India Hackathon 2019, Winner</h2>
        <p className="lede">India’s national student hackathon. The plant-disease detection work from it grew into my research papers and the PlantDoc app.</p>
        <div className="gallery">
          {smartIndia.map((src, i) => (
            <Photo key={src} src={src} alt={`Smart India Hackathon 2019, photo ${i + 1}`} open={setShot} />
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <p className="eyebrow">Milestones</p>
        <h2>Since then</h2>
        <div className="grid-3">
          <Link to="/research" className="card life-card">
            <span className="stat-n">{scholar.citations}</span>
            <h3>Scholar citations</h3>
            <p>Across {papers.length} papers, with an h-index of {scholar.hIndex}.</p>
          </Link>
          <Link to="/opensource" className="card life-card">
            <span className="stat-n">{packages.length}</span>
            <h3>PyPI packages</h3>
            <p>Open-source Python libraries, published and maintained solo.</p>
          </Link>
          <Link to="/apps" className="card life-card">
            <span className="stat-n">3</span>
            <h3>Play Store releases</h3>
            <p>PlantDoc AI, FreeAIAgent and the game Lost Bird.</p>
          </Link>
        </div>
      </Reveal>

      <Lightbox src={shot} onClose={close} />
    </main>
  );
}
