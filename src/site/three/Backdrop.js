import React, { Suspense, lazy } from 'react';
import useGraphicsCapability from '../../components/three/useGraphicsCapability';
import { useTheme } from '../theme';

// Three.js only downloads on devices that can and want to run it.
const SceneCanvas = lazy(() => import('./Scenes'));

// One fixed, full-viewport 3D scene behind every page. The CSS gradient on
// .backdrop is always there, so visitors with reduced motion or no WebGL
// still get the theme's atmosphere.
export default function Backdrop() {
  const { theme } = useTheme();
  const { enabled, isMobile, ready } = useGraphicsCapability();
  return (
    <div className="backdrop" aria-hidden="true">
      {ready && enabled && (
        <Suspense fallback={null}>
          <SceneCanvas theme={theme} isMobile={isMobile} />
        </Suspense>
      )}
      <div className="backdrop-veil" />
    </div>
  );
}
