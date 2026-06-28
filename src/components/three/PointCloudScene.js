import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { inSphere } from 'maath/random';
import * as THREE from 'three';

/* A soft round sprite shared by every particle (same look as the hero nodes). */
function makeDotTexture() {
  const size = 48;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

/**
 * A drifting point cloud — the "computer vision" depth-data aesthetic. Purely
 * ambient: slow rotation + a faint mouse parallax, no edges, no postprocessing,
 * so it's cheap enough to sit behind content sections.
 */
function PointCloud({ count, color }) {
  const ref = useRef();
  const dotTexture = useMemo(makeDotTexture, []);

  const positions = useMemo(() => {
    // inSphere fills an existing buffer with a uniform distribution in a ball.
    const arr = new Float32Array(count * 3);
    inSphere(arr, { radius: 6 });
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x += delta * 0.012;
    const targetZ = state.pointer.x * 0.1;
    ref.current.rotation.z += (targetZ - ref.current.rotation.z) * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        map={dotTexture}
        color={color}
        transparent
        opacity={0.55}
        depthWrite={false}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/**
 * Ambient point-cloud background canvas. Reused behind multiple sections; tint
 * is configurable so each section can lean blue or cyan.
 */
export default function PointCloudScene({ isMobile = false, frameloop = 'always', color = '#58a6ff' }) {
  const count = isMobile ? 1200 : 3000;

  return (
    <Canvas
      frameloop={frameloop}
      camera={{ position: [0, 0, 9], fov: 60 }}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <PointCloud count={count} color={color} />
    </Canvas>
  );
}
