import React, { Suspense, lazy } from 'react';
import Scene3DLayer from './Scene3DLayer';

// Code-split the Three.js scene out of the page bundle.
const PointCloudScene = lazy(() => import('./PointCloudScene'));

/**
 * Drop-in ambient point-cloud background. Place as the first child of a section
 * whose container is `position: relative` (and give the real content a higher
 * z-index). Renders nothing on reduced-motion / no-WebGL devices.
 */
export default function AmbientPointCloud({ color }) {
  return (
    <Scene3DLayer fallback={null}>
      {({ isMobile, frameloop }) => (
        <Suspense fallback={null}>
          <PointCloudScene isMobile={isMobile} frameloop={frameloop} color={color} />
        </Suspense>
      )}
    </Scene3DLayer>
  );
}
