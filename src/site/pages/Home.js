import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal, Tilt, Ext, CopyCommand } from '../ui';
import { person, scholar, papers, packages, apps, playUrl } from '../data';
import useSubstack from '../useSubstack';
import pmHero from '../assets/pm-hero.jpg';
import iconPlantdoc from '../assets/icon-plantdoc.png';
import iconLostbird from '../assets/icon-lostbird.png';
import iconFreeaiagent from '../assets/icon-freeaiagent.png';
import iconHarvesthome from '../assets/icon-harvesthome.png';

export const appIcons = { plantdoc: iconPlantdoc, lostbird: iconLostbird, freeaiagent: iconFreeaiagent, harvesthome: iconHarvesthome };

const stats = [
  { n: `${scholar.citations}`, label: 'Scholar citations', to: '/research' },
  { n: `${papers.length}`, label: 'Research papers', to: '/research' },
  { n: `${packages.length}`, label: 'PyPI packages', to: '/opensource' },
  { n: `${apps.filter((a) => !a.soon).length}`, label: 'Play Store apps', to: '/apps' },
  { n: '2', label: 'National hackathon wins', to: '/achievements' },
];

const lives = [
  {
    k: '01', title: 'Engineer', to: '/about',
    text: 'Full-stack AI/ML developer at Société Générale, after five years building cloud products at Persistent Systems.',
    cta: 'Career',
  },
  {
    k: '02', title: 'Researcher', to: '/research',
    text: `${papers.length} papers on plant-disease vision, intrusion detection and language models, cited ${scholar.citations} times.`,
    cta: 'Papers',
  },
  {
    k: '03', title: 'Gamer', to: '/games',
    text: 'I play them and I make them. Lost Bird is on the Play Store, and there are a couple you can play right here.',
    cta: 'Play',
  },
];

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="honour-chip"><span className="tricolour-dot" />National honour · Singapore–India Hackathon 2019</p>
        <h1 className="hero-title">
          On stage with the <em>Prime Minister of India.</em>
        </h1>
        <p className="hero-sub">
          I’m <strong>Subham Divakar</strong>. In 2019 my team, DeadSec, won the Singapore–India
          Hackathon and received the prize from Prime Minister Narendra Modi at IIT Madras.
        </p>
        <p className="hero-tag">Software engineer by profession. Researcher and gamer the rest of the time.</p>
        <div className="btn-row">
          <Link to="/achievements" className="btn btn-primary">See the honour</Link>
          <a href="#work" className="btn btn-ghost">Explore my work</a>
        </div>
      </div>

      <Tilt className="hero-photo-wrap">
        <figure className="hero-photo">
          <div className="hero-photo-frame">
            <img src={pmHero} alt="Subham Divakar on stage beside Prime Minister Narendra Modi, holding the winners' cheque for Team DeadSec" />
            <span className="me-pin"><span className="me-pin-label">That’s me</span></span>
          </div>
          <figcaption>
            <span>Prize distribution · 30 Sept 2019</span>
            <span>IIT Madras, Chennai</span>
          </figcaption>
        </figure>
      </Tilt>
    </section>
  );
}

export default function Home() {
  const { posts } = useSubstack(2);
  const topPapers = papers.slice(0, 3);
  const featured = ['safejev', 'freeaiagent', 'slidenotes', 'plantdoc-predictor'].map((n) => packages.find((p) => p.name === n));

  return (
    <main className="home">
      <Hero />

      <Reveal className="stats" id="work">
        {stats.map((s) => (
          <Link key={s.label} to={s.to} className="stat">
            <span className="stat-n">{s.n}</span>
            <span className="stat-label">{s.label}</span>
          </Link>
        ))}
      </Reveal>

      <section className="section">
        <Reveal><p className="eyebrow">One person, three lives</p><h2>What I do with my time</h2></Reveal>
        <div className="grid-3">
          {lives.map((l, i) => (
            <Reveal key={l.k} delay={i * 90}>
              <Link to={l.to} className="card life-card">
                <span className="life-k">{l.k}</span>
                <h3>{l.title}</h3>
                <p>{l.text}</p>
                <span className="card-cta">{l.cta} →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal className="section-head">
          <div><p className="eyebrow">Research</p><h2>Most-cited papers</h2></div>
          <Link to="/research" className="link-more">All {papers.length} papers →</Link>
        </Reveal>
        <div className="paper-list">
          {topPapers.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Ext href={p.url} className="paper-row">
                <span className="paper-cites"><strong>{p.cites}</strong>citations</span>
                <span className="paper-main">
                  <span className="paper-title">{p.title}</span>
                  <span className="muted">{p.venue} · {p.year}</span>
                </span>
              </Ext>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal className="section-head">
          <div><p className="eyebrow">Open source</p><h2>{packages.length} packages on PyPI</h2></div>
          <Link to="/opensource" className="link-more">Browse all →</Link>
        </Reveal>
        <div className="grid-2">
          {featured.map((p, i) => (
            <Reveal key={p.name} delay={i * 70} className="card pkg-card">
              <div className="pkg-top"><h3>{p.name}</h3><span className="tag">{p.cat}</span></div>
              <p>{p.desc}</p>
              <CopyCommand command={`pip install ${p.name}`} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal className="section-head">
          <div><p className="eyebrow">Apps and games</p><h2>On the Play Store</h2></div>
          <Link to="/games" className="link-more">Play in the browser →</Link>
        </Reveal>
        <div className="grid-3">
          {apps.map((a, i) => (
            <Reveal key={a.id} delay={i * 80}>
              {a.page ? (
                <Link to={a.page} className="card app-card">
                  <img src={appIcons[a.icon]} alt="" className="app-icon" />
                  <div><h3>{a.name}</h3><span className="tag">{a.soon ? 'Coming soon' : a.kind}</span></div>
                  <p>{a.desc}</p>
                </Link>
              ) : (
                <Ext href={playUrl(a.id)} className="card app-card">
                  <img src={appIcons[a.icon]} alt="" className="app-icon" />
                  <div><h3>{a.name}</h3><span className="tag">{a.kind}</span></div>
                  <p>{a.desc}</p>
                </Ext>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal className="section-head">
          <div><p className="eyebrow">Writing</p><h2>Latest from Beyond AI</h2></div>
          <Link to="/writing" className="link-more">All posts →</Link>
        </Reveal>
        <div className="grid-2">
          {posts.map((p, i) => (
            <Reveal key={p.link} delay={i * 80}>
              <Ext href={p.link} className="card post-card">
                <span className="muted">{p.date}</span>
                <h3>{p.title}</h3>
                {p.excerpt && <p>{p.excerpt}</p>}
                <span className="card-cta">Read on Substack →</span>
              </Ext>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="section contact">
        <h2>Let’s build something.</h2>
        <div className="btn-row">
          <a href={`mailto:${person.email}`} className="btn btn-primary">Email me</a>
          <Ext href={person.links.linkedin} className="btn btn-ghost">LinkedIn</Ext>
          <Ext href={person.links.github} className="btn btn-ghost">GitHub</Ext>
        </div>
      </Reveal>
    </main>
  );
}
