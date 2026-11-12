import React, { useMemo, useState } from 'react';
import { PageHeader, Reveal, Ext } from '../ui';
import { papers, scholar, person } from '../data';

const topics = ['All', ...Array.from(new Set(papers.map((p) => p.topic)))];
const maxCites = Math.max(...papers.map((p) => p.cites));

export default function Research() {
  const [topic, setTopic] = useState('All');
  const [sort, setSort] = useState('cites');
  const list = useMemo(() => {
    const l = papers.filter((p) => topic === 'All' || p.topic === topic);
    return [...l].sort((a, b) => (sort === 'cites' ? b.cites - a.cites || b.year - a.year : b.year - a.year || b.cites - a.cites));
  }, [topic, sort]);

  return (
    <main className="page">
      <PageHeader eyebrow="Research" title="Papers I write after work">
        Research is my hobby, not my job. Most of it is about teaching vision models to spot
        plant disease; the rest covers intrusion detection, IoT and language models.
      </PageHeader>

      <Reveal className="metrics">
        <div className="metric"><span className="stat-n">{scholar.citations}</span><span className="stat-label">Citations</span></div>
        <div className="metric"><span className="stat-n">{scholar.hIndex}</span><span className="stat-label">h-index</span></div>
        <div className="metric"><span className="stat-n">{scholar.i10}</span><span className="stat-label">i10-index</span></div>
        <div className="metric"><span className="stat-n">{papers.length}</span><span className="stat-label">Papers</span></div>
        <Ext href={person.links.scholar} className="btn btn-ghost">Google Scholar profile ↗</Ext>
      </Reveal>

      <div className="toolbar">
        <div className="chips" role="group" aria-label="Filter by topic">
          {topics.map((t) => (
            <button key={t} type="button" className={`chip ${topic === t ? 'is-active' : ''}`} onClick={() => setTopic(t)}>{t}</button>
          ))}
        </div>
        <div className="chips" role="group" aria-label="Sort">
          <button type="button" className={`chip ${sort === 'cites' ? 'is-active' : ''}`} onClick={() => setSort('cites')}>Most cited</button>
          <button type="button" className={`chip ${sort === 'year' ? 'is-active' : ''}`} onClick={() => setSort('year')}>Newest</button>
        </div>
      </div>

      <div className="paper-list">
        {list.map((p) => (
          <Ext key={p.title} href={p.url} className="paper-row paper-row-full">
            <span className="paper-cites">
              <strong>{p.cites > 0 ? p.cites : '—'}</strong>{p.cites > 0 ? 'citations' : 'new'}
            </span>
            <span className="paper-main">
              <span className="paper-title">{p.title}</span>
              <span className="muted">{p.authors}</span>
              <span className="muted">{[p.venue, p.year].filter(Boolean).join(' · ')}</span>
              <span className="cite-bar"><span style={{ width: `${(p.cites / maxCites) * 100}%` }} /></span>
            </span>
            <span className="tag">{p.topic}</span>
          </Ext>
        ))}
      </div>
      <p className="muted fine">Citation counts from Google Scholar, November 2026.</p>
    </main>
  );
}
