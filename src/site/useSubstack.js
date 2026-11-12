import { useEffect, useState } from 'react';
import { fallbackPosts } from './data';

// Substack's RSS feed has no CORS headers, so the browser reads it through
// the free rss2json.com converter. If that call fails for any reason the
// posts baked into data.js are shown instead.
const FEED = 'https://subhamdivakar.substack.com/feed';
const API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(FEED)}`;

const fmt = (d) => {
  const date = new Date(String(d).replace(' ', 'T'));
  return Number.isNaN(date.getTime())
    ? ''
    : date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
};
const text = (html) => {
  const el = document.createElement('div');
  el.innerHTML = html || '';
  return (el.textContent || '').replace(/\s+/g, ' ').trim();
};
const shape = (p) => {
  const body = text(p.description) || text(p.content);
  return {
    title: p.title,
    link: p.link,
    date: fmt(p.pubDate),
    excerpt: body.length > 220 ? `${body.slice(0, 220).trimEnd()}…` : body,
    image: p.thumbnail || (p.enclosure && p.enclosure.link) || '',
  };
};

// The free converter is rate limited, so each visitor's browser keeps the
// last good answer for six hours instead of asking on every page view.
const STORE = 'sd-substack';
const MAX_AGE = 6 * 60 * 60 * 1000;
const readStore = () => {
  try {
    const s = JSON.parse(window.localStorage.getItem(STORE));
    return s && Array.isArray(s.posts) && s.posts.length ? s : null;
  } catch (e) { return null; }
};
const stored = readStore();
let cache = stored && Date.now() - stored.at < MAX_AGE ? stored.posts : null;

export default function useSubstack(limit) {
  const [state, setState] = useState(() => ({
    posts: cache || (stored && stored.posts) || fallbackPosts.map(shape),
    status: cache ? 'live' : 'loading',
  }));

  useEffect(() => {
    if (cache) return undefined;
    let alive = true;
    fetch(API)
      .then((r) => r.json())
      .then((j) => {
        if (j.status !== 'ok' || !Array.isArray(j.items) || !j.items.length) throw new Error('empty feed');
        cache = j.items.map(shape);
        try { window.localStorage.setItem(STORE, JSON.stringify({ at: Date.now(), posts: cache })); } catch (e) { /* ignore */ }
        if (alive) setState({ posts: cache, status: 'live' });
      })
      .catch(() => { if (alive) setState((s) => ({ ...s, status: 'fallback' })); });
    return () => { alive = false; };
  }, []);

  return { posts: limit ? state.posts.slice(0, limit) : state.posts, status: state.status };
}
