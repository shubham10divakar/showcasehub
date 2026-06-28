import React, { useEffect, useRef, useState } from 'react';
import useGraphicsCapability from './useGraphicsCapability';
import './scene3d.css';

/**
 * Absolutely-positioned background layer for a 3D scene.
 *
 * Responsibilities (shared by every 3D background on the site):
 *  - Gate on device capability: renders `fallback` (or nothing) when the user
 *    prefers reduced motion or WebGL is unavailable.
 *  - Pause rendering when scrolled out of view (IntersectionObserver toggles the
 *    Three.js frameloop between 'always' and 'never') so off-screen canvases
 *    cost nothing.
 *  - Pass `{ isMobile, frameloop }` to the render-prop child, which is expected
 *    to lazy-load and render the actual <Canvas> inside a <Suspense>.
 *
 * Usage:
 *   <Scene3DLayer fallback={null}>
 *     {({ isMobile, frameloop }) => (
 *       <Suspense fallback={null}>
 *         <NeuralScene isMobile={isMobile} frameloop={frameloop} />
 *       </Suspense>
 *     )}
 *   </Scene3DLayer>
 */
export default function Scene3DLayer({ children, fallback = null, className = '' }) {
  const { enabled, isMobile, ready } = useGraphicsCapability();
  const containerRef = useRef(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    if (!enabled) return undefined;
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '120px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled]);

  if (!ready || !enabled) return fallback;

  return (
    <div ref={containerRef} className={`scene3d-layer ${className}`} aria-hidden="true">
      {children({ isMobile, frameloop: inView ? 'always' : 'never' })}
    </div>
  );
}
