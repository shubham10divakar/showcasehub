import { useEffect, useState } from 'react';

/**
 * Decides whether 3D should run, and at what intensity, on the current device.
 *
 * - `enabled`   : false when the user prefers reduced motion or WebGL is missing.
 *                 Callers should render a static fallback in that case.
 * - `isMobile`  : coarse-pointer / small-screen heuristic used to lower particle
 *                 counts and pixel ratio so phones stay smooth.
 *
 * The check runs once on mount (client-side only) and also reacts to the user
 * toggling the OS "reduce motion" setting while the page is open.
 */
export default function useGraphicsCapability() {
  const [caps, setCaps] = useState({ enabled: false, isMobile: false, ready: false });

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const detectWebgl = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
      } catch (e) {
        return false;
      }
    };

    const evaluate = () => {
      const isMobile =
        window.matchMedia('(max-width: 768px)').matches ||
        window.matchMedia('(pointer: coarse)').matches;
      const enabled = !reducedMotionQuery.matches && detectWebgl();
      setCaps({ enabled, isMobile, ready: true });
    };

    evaluate();
    reducedMotionQuery.addEventListener('change', evaluate);
    return () => reducedMotionQuery.removeEventListener('change', evaluate);
  }, []);

  return caps;
}
