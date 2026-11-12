import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, Ext, CopyCommand } from '../ui';
import { packages, person } from '../data';

const cats = ['All', ...Array.from(new Set(packages.map((p) => p.cat)))];

export default function OpenSource() {
  const [cat, setCat] = useState('All');
  const list = packages.filter((p) => cat === 'All' || p.cat === cat);

  return (
    <main className="page">
      <PageHeader eyebrow="Open source" title={`${packages.length} Python packages, one pip install away`}>
        Tools I needed and could not find, published on PyPI: AI safety, small decision
        models, research tooling, vision, audio and developer utilities.
      </PageHeader>

      <div className="toolbar">
        <div className="chips" role="group" aria-label="Filter by category">
          {cats.map((c) => (
            <button key={c} type="button" className={`chip ${cat === c ? 'is-active' : ''}`} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <Ext href={person.links.pypi} className="btn btn-ghost">PyPI profile ↗</Ext>
      </div>

      <div className="grid-3">
        {list.map((p) => (
          <article key={p.name} className="card pkg-card">
            <div className="pkg-top"><h3>{p.name}</h3><span className="tag">{p.cat}</span></div>
            <p>{p.desc}</p>
            <CopyCommand command={`pip install ${p.name}`} />
            <div className="pkg-links">
              <Ext href={`https://pypi.org/project/${p.name}/`}>PyPI ↗</Ext>
              {p.site && <Ext href={`https://${p.site}`}>{p.site} ↗</Ext>}
              {p.internal && <Link to={p.internal}>Try it here →</Link>}
              <span className="muted">{p.released}</span>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
