import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, Reveal, Ext } from '../ui';
import { person, experience, education, skills } from '../data';

export function NotFound() {
  return (
    <main className="page page-center">
      <PageHeader eyebrow="404" title="This page wandered off">Nothing lives at this address.</PageHeader>
      <Link to="/" className="btn btn-primary">Back home</Link>
    </main>
  );
}

export default function About() {
  return (
    <main className="page">
      <PageHeader eyebrow="About" title="Engineer by profession, curious by default">
        I’m a full-time software engineer in {person.location}. Outside work I write research
        papers, publish Python libraries, ship small apps and play a lot of games.
      </PageHeader>

      <section className="section">
        <h2>Work</h2>
        <div className="timeline">
          {experience.map((e) => (
            <Reveal key={e.company} className="card timeline-item">
              <span className="logo-tile"><img src={process.env.PUBLIC_URL + e.logo} alt={`${e.company} logo`} /></span>
              <div>
                <div className="pkg-top"><h3>{e.role}</h3><span className="muted">{e.when}</span></div>
                <p className="accent-text">{e.company}</p>
                <p>{e.desc}</p>
                <div className="chips chips-static">{e.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <h2>Education</h2>
          {education.map((e) => (
            <div key={e.degree} className="edu">
              <h3>{e.degree}</h3>
              <p className="muted">{e.school} · {e.when} · {e.score}</p>
            </div>
          ))}
        </div>
        <div>
          <h2>Skills</h2>
          {skills.map((s) => (
            <div key={s.group} className="skill-row">
              <span className="muted">{s.group}</span>
              <div className="chips chips-static">{s.items.map((t) => <span key={t} className="chip">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <Reveal as="section" className="section contact">
        <h2>Get in touch</h2>
        <div className="btn-row">
          <a href={`mailto:${person.email}`} className="btn btn-primary">Email me</a>
          <Ext href={person.links.linkedin} className="btn btn-ghost">LinkedIn</Ext>
          <Ext href={person.links.github} className="btn btn-ghost">GitHub</Ext>
        </div>
      </Reveal>
    </main>
  );
}
