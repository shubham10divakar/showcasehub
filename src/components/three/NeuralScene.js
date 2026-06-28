import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

/* Theme palette (matches CSS custom properties in index.css) */
const PALETTE = [
  new THREE.Color('#58a6ff'), // accent blue
  new THREE.Color('#79c0ff'), // cyan
  new THREE.Color('#58a6ff'),
  new THREE.Color('#3fb950'), // green (occasional)
];

/* A soft round sprite so points read as glowing nodes rather than squares. */
function makeNodeTexture() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.25, 'rgba(255,255,255,0.85)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

/**
 * Builds a static "constellation" of nodes connected by edges between near
 * neighbours. Nodes/edges are fixed relative to each other so the whole graph
 * can be animated cheaply by rotating the parent group (no per-frame geometry
 * rebuilds). Motion + life come from group rotation, mouse parallax and a
 * gentle bloom/size pulse.
 */
function NeuralNetwork({ count, edgeDistance, maxEdges }) {
  const group = useRef();
  const points = useRef();
  const nodeTexture = useMemo(makeNodeTexture, []);

  const { nodePositions, nodeColors, edgePositions, edgeColors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const pts = [];

    for (let i = 0; i < count; i++) {
      // Random point in a slightly flattened sphere.
      const r = 4 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi) * 0.6;
      positions.set([x, y, z], i * 3);
      pts.push(new THREE.Vector3(x, y, z));

      const c = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      colors.set([c.r, c.g, c.b], i * 3);
    }

    // Connect near neighbours, capped so dense regions don't explode edge count.
    const edgePos = [];
    const edgeCol = [];
    const edge = new THREE.Color('#58a6ff');
    let edges = 0;
    outer: for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (pts[i].distanceTo(pts[j]) < edgeDistance) {
          edgePos.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
          for (let k = 0; k < 2; k++) edgeCol.push(edge.r, edge.g, edge.b);
          if (++edges >= maxEdges) break outer;
        }
      }
    }

    return {
      nodePositions: positions,
      nodeColors: colors,
      edgePositions: new Float32Array(edgePos),
      edgeColors: new Float32Array(edgeCol),
    };
  }, [count, edgeDistance, maxEdges]);

  useFrame((state, delta) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;

    // Continuous slow spin + a little tilt, nudged by the pointer for parallax.
    group.current.rotation.y += delta * 0.05;
    const targetX = -state.pointer.y * 0.25;
    const targetZ = state.pointer.x * 0.15;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04;
    group.current.rotation.z += (targetZ - group.current.rotation.z) * 0.04;

    // Subtle "activity" pulse on the node glow.
    if (points.current) {
      points.current.material.size = 0.18 + Math.sin(t * 1.5) * 0.03;
    }
  });

  return (
    <group ref={group}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[nodeColors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.18}
          map={nodeTexture}
          vertexColors
          transparent
          depthWrite={false}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[edgePositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[edgeColors, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.18}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

/**
 * Full-bleed background canvas for the hero. Kept in its own module so it can be
 * code-split via React.lazy and never ships to users who get the static fallback.
 */
export default function NeuralScene({ isMobile = false, frameloop = 'always' }) {
  const count = isMobile ? 55 : 95;
  const maxEdges = isMobile ? 120 : 260;

  return (
    <Canvas
      frameloop={frameloop}
      camera={{ position: [0, 0, 12], fov: 60 }}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <NeuralNetwork count={count} edgeDistance={2.6} maxEdges={maxEdges} />
      {!isMobile && (
        <EffectComposer>
          <Bloom intensity={0.9} luminanceThreshold={0.1} luminanceSmoothing={0.4} mipmapBlur />
        </EffectComposer>
      )}
    </Canvas>
  );
}
