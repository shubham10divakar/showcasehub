import React, { useState } from 'react';
import './PMHighlight.css';
import sih1 from '../../images/SIH2019/21.JPG';
import sih2 from '../../images/SIH2019/1.JPG';
import sih3 from '../../images/SIH2019/3.jpg';

const photos = [sih1, sih2, sih3];

function PMHighlight() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className='pm-section'>
      <div className='pm-badge'>
        <span>🇮🇳</span> National Honour
      </div>
      <h2 className='pm-title'>Met the Prime Minister of India</h2>
      <p className='pm-subtitle'>
        Represented India at the <strong>Singapore India Hackathon 2019</strong> and had the privilege
        of meeting <strong>Shri Narendra Modi</strong>, Hon'ble Prime Minister of India.
      </p>

      <div className='pm-photos'>
        {photos.map((src, i) => (
          <button key={i} className='pm-photo-btn' onClick={() => setLightbox(src)}>
            <img src={src} alt={`PM meeting ${i + 1}`} className='pm-photo' />
            <div className='pm-photo-overlay'>
              <i className='fas fa-expand' />
            </div>
          </button>
        ))}
      </div>

      <p className='pm-caption'>
        Singapore India Hackathon 2019 · Organised by AICTE & Ministry of Education, India
      </p>

      {lightbox && (
        <div className='pm-lightbox' onClick={() => setLightbox(null)}>
          <button className='pm-lightbox-close' onClick={() => setLightbox(null)}>
            <i className='fas fa-times' />
          </button>
          <img src={lightbox} alt='PM meeting' className='pm-lightbox-img' />
        </div>
      )}
    </section>
  );
}

export default PMHighlight;
