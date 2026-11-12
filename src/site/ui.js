import React, { useEffect, useRef, useState } from 'react';

// Fades a block in the first time it scrolls into view.
export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setShown(true); return undefined; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'is-shown' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Tilts its child toward the pointer (CSS reads --rx / --ry).
export function Tilt({ className = '', max = 9, children }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--ry', `${x * max}deg`);
    el.style.setProperty('--rx', `${-y * max}deg`);
  };
  const onLeave = () => {
    ref.current.style.setProperty('--ry', '0deg');
    ref.current.style.setProperty('--rx', '0deg');
  };
  return (
    <div ref={ref} className={`tilt ${className}`} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </div>
  );
}

export function PageHeader({ eyebrow, title, children }) {
  return (
    <header className="page-header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {children && <p className="lede">{children}</p>}
    </header>
  );
}

export function Ext({ href, className = '', children, ...rest }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

export function CopyCommand({ command }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) { /* clipboard unavailable: the text is still selectable */ }
  };
  return (
    <button type="button" className="cmd" onClick={copy} title="Copy to clipboard">
      <span className="cmd-prompt">$</span>
      <code>{command}</code>
      <span className="cmd-copy">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

export function Lightbox({ src, onClose }) {
  useEffect(() => {
    if (!src) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [src, onClose]);
  if (!src) return null;
  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button type="button" className="lightbox-close" aria-label="Close">×</button>
      <img src={src} alt="" />
    </div>
  );
}
