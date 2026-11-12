import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, Reveal, Ext } from '../ui';
import { apps, playUrl, person } from '../data';
import { appIcons } from './Home';

export default function Apps() {
  return (
    <main className="page">
      <PageHeader eyebrow="Apps" title="On the Google Play Store">
        Three Android apps published under my own name: two that put my AI work on a phone, and one game.
      </PageHeader>

      <div className="app-rows">
        {apps.map((a, i) => (
          <Reveal key={a.id} delay={i * 90} className="card app-row">
            <img src={appIcons[a.icon]} alt={`${a.name} icon`} className="app-icon app-icon-lg" />
            <div className="app-row-body">
              <div className="pkg-top"><h2>{a.name}</h2><span className="tag">{a.kind}</span></div>
              <p>{a.desc}</p>
              <div className="btn-row">
                <Ext href={playUrl(a.id)} className="btn btn-primary"><i className="fab fa-google-play" /> Get it on Google Play</Ext>
                {a.policy && <Link to={a.policy} className="btn btn-ghost">Privacy policy</Link>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal as="section" className="section band">
        <div>
          <p className="eyebrow">Where it started</p>
          <h2>ALICE, a women’s safety app (2017)</h2>
          <p className="lede">My first Android app: one-tap SOS that sends live GPS location to emergency contacts.</p>
        </div>
        <Ext href={person.links.play} className="btn btn-ghost">Developer page ↗</Ext>
      </Reveal>
    </main>
  );
}
