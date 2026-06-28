import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, Html } from '@react-three/drei';
import * as THREE from 'three';
import leafImg from '../../images/ProjectsImages/plantdiseasedetection.jpg';

/* The source image is an annotated detection result (red boxes already drawn on
   the diseased regions). We don't redraw boxes — instead we anchor labels and a
   pulsing highlight to a few of those real regions, given as fractions of the
   image (fx/fy = top-left corner from the top-left, fw/fh = size). */
const DETECTIONS = [
  { fx: 0.02, fy: 0.01, fw: 0.11, fh: 0.12, label: 'Leaf Blight', conf: 0.98, color: '#f85149' },
  { fx: 0.65, fy: 0.30, fw: 0.32, fh: 0.22, label: 'Leaf Scorch', conf: 0.95, color: '#d29922' },
  { fx: 0.31, fy: 0.47, fw: 0.13, fh: 0.45, label: 'Necrosis', conf: 0.93, color: '#d2a8ff' },
];

const SCAN_PERIOD = 3.6; // seconds for one top→bottom sweep

/* One annotation: a translucent highlight fill over a real (baked-in) detection
   box plus an HTML label, both "locking on" as the scan line passes by. */
function DetectionBox({ det, planeW, planeH, scanRef }) {
  const fill = useRef();
  const labelRef = useRef();

  const bw = det.fw * planeW;
  const bh = det.fh * planeH;
  // Fractional top-left → plane-space center (origin centered, y up).
  const x = (det.fx + det.fw / 2 - 0.5) * planeW;
  const y = (0.5 - (det.fy + det.fh / 2)) * planeH;

  useFrame(() => {
    // How close the scan line is to this region (0..1, 1 = right on it).
    const dist = Math.abs(scanRef.current - y);
    const near = THREE.MathUtils.clamp(1 - dist / (bh * 0.7 + 0.5), 0, 1);
    if (fill.current) fill.current.material.opacity = 0.05 + near * 0.28;
    if (labelRef.current) {
      labelRef.current.style.opacity = (0.55 + near * 0.45).toFixed(2);
      labelRef.current.style.transform = `scale(${(0.94 + near * 0.08).toFixed(3)})`;
    }
  });

  return (
    <group position={[x, y, 0.02]}>
      <mesh ref={fill}>
        <planeGeometry args={[bw, bh]} />
        <meshBasicMaterial
          color={det.color}
          transparent
          opacity={0.08}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <Html position={[-bw / 2, bh / 2, 0]} center={false} distanceFactor={6} zIndexRange={[10, 0]}>
        <div
          ref={labelRef}
          style={{
            transformOrigin: 'left bottom',
            background: 'rgba(13,17,23,0.88)',
            border: `1px solid ${det.color}`,
            color: det.color,
            font: '600 11px/1 -apple-system,Segoe UI,Roboto,sans-serif',
            padding: '3px 7px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
            marginBottom: '4px',
            pointerEvents: 'none',
            boxShadow: `0 0 10px ${det.color}55`,
          }}
        >
          {det.label} · {(det.conf * 100).toFixed(0)}%
        </div>
      </Html>
    </group>
  );
}

function ScanLine({ planeW, planeH, scanRef }) {
  const mesh = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime % SCAN_PERIOD;
    const y = planeH / 2 - (t / SCAN_PERIOD) * planeH; // top → bottom
    scanRef.current = y;
    if (mesh.current) {
      mesh.current.position.y = y;
      // brief brighten at the very top so the sweep reads as repeating
      mesh.current.material.opacity = 0.7;
    }
  });
  return (
    <mesh ref={mesh} position={[0, planeH / 2, 0.03]}>
      <planeGeometry args={[planeW, 0.04]} />
      <meshBasicMaterial
        color="#79c0ff"
        transparent
        opacity={0.7}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function VisionTarget() {
  const texture = useTexture(leafImg);
  const group = useRef();
  const scanRef = useRef(0);
  const { viewport } = useThree();

  // "Contain" the image inside the viewport so nothing (incl. edge labels) is
  // cropped. Recomputes on resize, so it's responsive on mobile too.
  const aspect =
    texture.image && texture.image.width ? texture.image.width / texture.image.height : 1.4;
  const margin = 0.9;
  let planeW;
  let planeH;
  if (aspect > viewport.width / viewport.height) {
    planeW = viewport.width * margin;
    planeH = planeW / aspect;
  } else {
    planeH = viewport.height * margin;
    planeW = planeH * aspect;
  }

  useFrame((state) => {
    if (!group.current) return;
    // Gentle parallax tilt toward the pointer.
    const ty = state.pointer.x * 0.12;
    const tx = -state.pointer.y * 0.08;
    group.current.rotation.y += (ty - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (tx - group.current.rotation.x) * 0.05;
  });

  return (
    <group ref={group}>
      {/* The scanned image */}
      <mesh>
        <planeGeometry args={[planeW, planeH]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      {/* CV grid overlay, matched to the image bounds (scale Z → view Y). */}
      <gridHelper
        args={[planeW, 12, '#30363d', '#21262d']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 1, planeH / planeW]}
        position={[0, 0, 0.01]}
      />

      <ScanLine planeW={planeW} planeH={planeH} scanRef={scanRef} />
      {DETECTIONS.map((det) => (
        <DetectionBox
          key={det.label}
          det={det}
          planeW={planeW}
          planeH={planeH}
          scanRef={scanRef}
        />
      ))}
    </group>
  );
}

/**
 * Interactive (foreground) computer-vision detection visual: a plant-leaf image
 * with a sweeping scan line and "locking-on" labeled bounding boxes. Procedural
 * — no webcam, no TF.js. Rendered inside a framed card on the home page.
 */
export default function VisionScene({ isMobile = false, frameloop = 'always' }) {
  return (
    <Canvas
      frameloop={frameloop}
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <VisionTarget />
    </Canvas>
  );
}
