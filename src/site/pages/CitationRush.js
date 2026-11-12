import React, { useEffect, useRef, useState } from 'react';

// "Citation Rush": catch the falling papers, dodge the bugs. Three lives.
// Move with the arrow keys / A-D, the mouse, or a finger.
const W = 640;
const H = 400;

export default function CitationRush() {
  const canvasRef = useRef(null);
  const [run, setRun] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const css = getComputedStyle(document.documentElement);
    const col = (name, fallback) => css.getPropertyValue(name).trim() || fallback;
    const accent = col('--accent', '#ff9933');
    const accent2 = col('--accent-2', '#22b455');
    const danger = '#ff4d5e';
    const ink = col('--text', '#ffffff');

    const s = { x: W / 2, target: W / 2, items: [], score: 0, lives: 3, t: 0, spawn: 0, over: false };
    const keys = {};
    let raf;
    let last = performance.now();

    const down = (e) => {
      keys[e.key] = true;
      if (['ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault();
    };
    const up = (e) => { keys[e.key] = false; };
    const point = (e) => {
      const r = canvas.getBoundingClientRect();
      s.target = ((e.clientX - r.left) / r.width) * W;
    };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    canvas.addEventListener('pointermove', point);
    canvas.addEventListener('pointerdown', point);

    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      s.t += dt;

      if (keys.ArrowLeft || keys.a) s.target = s.x - 600 * dt * 4;
      if (keys.ArrowRight || keys.d) s.target = s.x + 600 * dt * 4;
      s.target = Math.max(34, Math.min(W - 34, s.target));
      s.x += (s.target - s.x) * Math.min(1, dt * 14);

      const speed = 150 + s.t * 6;
      s.spawn -= dt;
      if (s.spawn <= 0) {
        s.spawn = Math.max(0.28, 0.85 - s.t * 0.012);
        s.items.push({ x: 24 + Math.random() * (W - 48), y: -20, bug: Math.random() < 0.3, v: speed * (0.8 + Math.random() * 0.5) });
      }
      s.items.forEach((it) => { it.y += it.v * dt; });
      s.items = s.items.filter((it) => {
        const hit = it.y > H - 58 && it.y < H - 22 && Math.abs(it.x - s.x) < 44;
        if (hit) {
          if (it.bug) s.lives -= 1; else s.score += 1;
          return false;
        }
        if (it.y > H + 20) {
          if (!it.bug) s.lives -= 1; // a missed paper costs a life
          return false;
        }
        return true;
      });

      ctx.clearRect(0, 0, W, H);
      ctx.font = '600 15px system-ui, sans-serif';
      s.items.forEach((it) => {
        if (it.bug) {
          ctx.fillStyle = danger;
          ctx.beginPath(); ctx.arc(it.x, it.y, 11, 0, Math.PI * 2); ctx.fill();
          ctx.strokeStyle = danger; ctx.lineWidth = 2;
          [-1, 1].forEach((d) => [-6, 0, 6].forEach((o) => {
            ctx.beginPath(); ctx.moveTo(it.x + d * 9, it.y + o); ctx.lineTo(it.x + d * 17, it.y + o + d * 2); ctx.stroke();
          }));
        } else {
          ctx.fillStyle = ink;
          ctx.fillRect(it.x - 10, it.y - 13, 20, 26);
          ctx.fillStyle = accent;
          [-6, -1, 4].forEach((o) => ctx.fillRect(it.x - 6, it.y + o, 12, 2));
        }
      });
      // the catcher: an open book
      ctx.fillStyle = accent2;
      ctx.beginPath(); ctx.roundRect(s.x - 40, H - 44, 80, 14, 7); ctx.fill();
      ctx.fillStyle = accent;
      ctx.fillRect(s.x - 2, H - 50, 4, 20);

      ctx.fillStyle = ink;
      ctx.textAlign = 'left';
      ctx.fillText(`Citations ${s.score}`, 14, 24);
      ctx.textAlign = 'right';
      ctx.fillText(`Lives ${'♥'.repeat(Math.max(0, s.lives))}`, W - 14, 24);

      if (s.lives <= 0) { setResult(s.score); return; }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
      canvas.removeEventListener('pointermove', point);
      canvas.removeEventListener('pointerdown', point);
    };
  }, [run]);

  return (
    <div className="game-stage">
      <canvas ref={canvasRef} width={W} height={H} className="game-canvas" />
      {result !== null && (
        <div className="game-over">
          <h3>{result} citations</h3>
          <p className="muted">My real count is higher. Try again?</p>
          <button type="button" className="btn btn-primary" onClick={() => { setResult(null); setRun((r) => r + 1); }}>Play again</button>
        </div>
      )}
      <p className="muted fine">Catch the papers, dodge the bugs. Arrow keys, mouse or touch.</p>
    </div>
  );
}
