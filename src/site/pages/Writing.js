import React from 'react';
import { PageHeader, Reveal, Ext } from '../ui';
import { person } from '../data';
import useSubstack from '../useSubstack';

export default function Writing() {
  const { posts, status } = useSubstack();
  return (
    <main className="page">
      <PageHeader eyebrow="Writing" title="Beyond AI, my Substack">
        Notes on LLMs, computer vision, RAG, agents and system design: the research, experiments
        and lessons behind what I build.
      </PageHeader>

      <div className="toolbar">
        <span className="muted">
          {status === 'loading' && 'Checking Substack for the latest posts…'}
          {status === 'live' && 'Latest posts, live from Substack'}
          {status === 'fallback' && 'Could not reach Substack just now. Showing recent posts.'}
        </span>
        <Ext href={`${person.links.substack}subscribe`} className="btn btn-primary">Subscribe</Ext>
      </div>

      <div className="post-list">
        {posts.map((p, i) => (
          <Reveal key={p.link} delay={i * 70}>
            <Ext href={p.link} className="card post-card post-card-wide">
              {p.image && <img src={p.image} alt="" className="post-thumb" loading="lazy" />}
              <div>
                <span className="muted">{p.date}</span>
                <h2>{p.title}</h2>
                {p.excerpt && <p>{p.excerpt}</p>}
                <span className="card-cta">Read on Substack →</span>
              </div>
            </Ext>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
