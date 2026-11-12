import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { THEMES, useTheme } from './theme';
import { person } from './data';
import { Ext } from './ui';

const links = [
  { to: '/research', label: 'Research' },
  { to: '/opensource', label: 'Open Source' },
  { to: '/pdfdesk', label: 'PDFDesk' },
  { to: '/apps', label: 'Apps' },
  { to: '/games', label: 'Games' },
  { to: '/writing', label: 'Writing' },
  { to: '/about', label: 'About' },
];

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="theme-switch" role="group" aria-label="Site theme">
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          className={`theme-dot theme-dot-${t.id} ${theme === t.id ? 'is-active' : ''}`}
          onClick={() => setTheme(t.id)}
          title={`${t.label} theme`}
          aria-label={`${t.label} theme`}
          aria-pressed={theme === t.id}
        />
      ))}
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">SD</span>
          <span className="brand-name">Subham Divakar</span>
        </Link>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav-link">{l.label}</NavLink>
          ))}
          <NavLink to="/achievements" className="nav-link nav-link-honour">Achievements</NavLink>
        </div>
        <ThemeSwitch />
        <button
          type="button" className="nav-toggle" aria-label="Menu" aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <i className={open ? 'fas fa-times' : 'fas fa-bars'} />
        </button>
      </div>
    </nav>
  );
}

export function Footer() {
  const l = person.links;
  return (
    <footer className="footer">
      <div className="tricolour-bar" />
      <div className="footer-inner">
        <div>
          <p className="footer-name">Subham Divakar</p>
          <p className="muted">Software engineer by day. Researcher and gamer the rest of the time. {person.location}.</p>
        </div>
        <div className="footer-links">
          <Ext href={l.github}><i className="fab fa-github" /> GitHub</Ext>
          <Ext href={l.linkedin}><i className="fab fa-linkedin" /> LinkedIn</Ext>
          <Ext href={l.scholar}><i className="fas fa-graduation-cap" /> Scholar</Ext>
          <Ext href={l.pypi}><i className="fab fa-python" /> PyPI</Ext>
          <Ext href={l.play}><i className="fab fa-google-play" /> Play Store</Ext>
          <Ext href={l.substack}><i className="fas fa-pen-nib" /> Substack</Ext>
          <a href={`mailto:${person.email}`}><i className="fas fa-envelope" /> Email</a>
        </div>
      </div>
      <p className="footer-bottom">© {new Date().getFullYear()} Subham Divakar</p>
    </footer>
  );
}
