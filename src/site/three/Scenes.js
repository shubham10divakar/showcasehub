import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ---------- shared ---------- */

// Eases the camera toward the pointer and drifts it with page scroll, so the
// whole backdrop feels like a space the page is moving through.
function CameraRig({ base = [0, 0, 10], scrollDepth = 3, lookY = 0 }) {
  useFrame(({ camera, pointer }) => {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const s = window.scrollY / max;
    camera.position.x += (base[0] + pointer.x * 0.6 - camera.position.x) * 0.04;
    camera.position.y += (base[1] + pointer.y * 0.35 - s * scrollDepth - camera.position.y) * 0.04;
    camera.lookAt(0, lookY - s * scrollDepth * 0.6, 0);
  });
  return null;
}

function Stars({ count, radius = 40, color = '#ffffff', size = 0.07 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = radius * (0.35 + Math.random() * 0.65);
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      a[i * 3] = r * Math.sin(p) * Math.cos(t);
      a[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      a[i * 3 + 2] = r * Math.cos(p);
    }
    return a;
  }, [count, radius]);
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.008; });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={color} size={size} sizeAttenuation transparent opacity={0.85} depthWrite={false} />
    </points>
  );
}

/* ---------- 1. Tricolour Cosmos ---------- */

function Ribbon({ color, y, phase, cols, rows }) {
  const ref = useRef();
  const positions = useMemo(() => new Float32Array(cols * rows * 3), [cols, rows]);
  // a fixed random offset per point so the band reads as silk, not a grid
  const jitter = useMemo(() => Float32Array.from({ length: cols * rows * 2 }, () => Math.random() - 0.5), [cols, rows]);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime * 0.45 + phase;
    let i = 0;
    for (let c = 0; c < cols; c++) {
      const u = c / (cols - 1);
      const x = (u - 0.5) * 46;
      const wave = Math.sin(u * 5.2 + t) * 1.25 + Math.sin(u * 11 - t * 1.4) * 0.35;
      const depth = Math.cos(u * 4.1 + t * 0.8) * 1.6;
      for (let r = 0; r < rows; r++) {
        const k = (c * rows + r) * 2;
        const v = r / (rows - 1) - 0.5 + jitter[k] * 0.09;
        positions[i++] = x + jitter[k + 1] * 0.22;
        positions[i++] = y + wave + v * 1.15;
        positions[i++] = depth + v * 0.6 - 7;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });
  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color} size={0.055} sizeAttenuation transparent opacity={0.5}
        depthWrite={false} blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// A 24-spoke wheel, drawn as glowing lines.
function Chakra() {
  const ref = useRef();
  const spokes = useMemo(() => {
    const a = [];
    for (let i = 0; i < 24; i++) {
      const t = (i / 24) * Math.PI * 2;
      a.push(Math.cos(t) * 0.35, Math.sin(t) * 0.35, 0, Math.cos(t) * 2.3, Math.sin(t) * 2.3, 0);
    }
    return new Float32Array(a);
  }, []);
  useFrame((_, dt) => { ref.current.rotation.z -= dt * 0.12; });
  return (
    <group ref={ref} position={[0, 0.6, -10]} scale={2.6}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[spokes, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#6f8cff" transparent opacity={0.28} />
      </lineSegments>
      <mesh><torusGeometry args={[2.4, 0.02, 8, 128]} /><meshBasicMaterial color="#8fa6ff" transparent opacity={0.4} /></mesh>
      <mesh><torusGeometry args={[0.35, 0.02, 8, 48]} /><meshBasicMaterial color="#8fa6ff" transparent opacity={0.4} /></mesh>
    </group>
  );
}

function Cosmos({ isMobile }) {
  const cols = isMobile ? 130 : 300;
  const rows = isMobile ? 10 : 18;
  return (
    <>
      <Stars count={isMobile ? 900 : 2600} />
      <Ribbon color="#ff9933" y={2.9} phase={0} cols={cols} rows={rows} />
      <Ribbon color="#f4f6ff" y={0.6} phase={0.5} cols={cols} rows={rows} />
      <Ribbon color="#22b455" y={-1.7} phase={1} cols={cols} rows={rows} />
      <Chakra />
      <CameraRig />
    </>
  );
}

/* ---------- 2. Research Lab (neural graph) ---------- */

function Neural({ isMobile }) {
  const group = useRef();
  const pulses = useRef();
  const { nodes, lines, edges } = useMemo(() => {
    const n = isMobile ? 70 : 150;
    const pts = [];
    for (let i = 0; i < n; i++) {
      pts.push(new THREE.Vector3((Math.random() - 0.5) * 26, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 12 - 3));
    }
    const seg = [];
    const e = [];
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (pts[i].distanceTo(pts[j]) < 3.6) {
          seg.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
          e.push([pts[i], pts[j]]);
        }
      }
    }
    const flat = new Float32Array(n * 3);
    pts.forEach((p, i) => p.toArray(flat, i * 3));
    return { nodes: flat, lines: new Float32Array(seg), edges: e };
  }, [isMobile]);

  const pulseCount = Math.min(isMobile ? 24 : 60, edges.length);
  const pulseState = useMemo(
    () => Array.from({ length: pulseCount }, () => ({
      e: Math.floor(Math.random() * edges.length), t: Math.random(), s: 0.25 + Math.random() * 0.5,
    })),
    [pulseCount, edges.length]
  );
  const pulsePos = useMemo(() => new Float32Array(Math.max(1, pulseCount) * 3), [pulseCount]);

  useFrame(({ clock }, dt) => {
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.07) * 0.25;
    group.current.rotation.x = Math.cos(clock.elapsedTime * 0.05) * 0.06;
    pulseState.forEach((p, i) => {
      p.t += dt * p.s;
      if (p.t > 1) { p.t = 0; p.e = Math.floor(Math.random() * edges.length); }
      const [a, b] = edges[p.e];
      pulsePos[i * 3] = a.x + (b.x - a.x) * p.t;
      pulsePos[i * 3 + 1] = a.y + (b.y - a.y) * p.t;
      pulsePos[i * 3 + 2] = a.z + (b.z - a.z) * p.t;
    });
    if (pulses.current) pulses.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <group ref={group}>
        <lineSegments>
          <bufferGeometry><bufferAttribute attach="attributes-position" args={[lines, 3]} /></bufferGeometry>
          <lineBasicMaterial color="#5ee6ff" transparent opacity={0.14} />
        </lineSegments>
        <points>
          <bufferGeometry><bufferAttribute attach="attributes-position" args={[nodes, 3]} /></bufferGeometry>
          <pointsMaterial color="#a78bfa" size={0.16} sizeAttenuation transparent opacity={0.95} depthWrite={false} />
        </points>
        {pulseCount > 0 && (
          <points ref={pulses} frustumCulled={false}>
            <bufferGeometry><bufferAttribute attach="attributes-position" args={[pulsePos, 3]} /></bufferGeometry>
            <pointsMaterial color="#d9fbff" size={0.13} sizeAttenuation transparent depthWrite={false} blending={THREE.AdditiveBlending} />
          </points>
        )}
      </group>
      <CameraRig />
    </>
  );
}

/* ---------- 3. Arcade (synthwave) ---------- */

const sunShader = {
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: `
    varying vec2 vUv;
    void main(){
      vec3 top = vec3(1.0, 0.83, 0.10);
      vec3 bottom = vec3(1.0, 0.18, 0.59);
      float h = (vUv.y - 0.5) * 2.0; // 0 at the horizon, 1 at the top
      vec3 col = mix(bottom, top, h);
      // horizontal cut-outs near the horizon
      float band = step(0.5, fract(h * 9.0));
      float cut = step(h, 0.6) * band;
      gl_FragColor = vec4(col, 1.0 - cut);
    }`,
};

function Floater({ position, color, children, speed = 0.4 }) {
  const ref = useRef();
  useFrame(({ clock }, dt) => {
    ref.current.rotation.x += dt * speed;
    ref.current.rotation.y += dt * speed * 0.7;
    ref.current.position.y = position[1] + Math.sin(clock.elapsedTime * 0.8 + position[0]) * 0.35;
  });
  return (
    <mesh ref={ref} position={position}>
      {children}
      <meshBasicMaterial color={color} wireframe transparent opacity={0.45} />
    </mesh>
  );
}

function Arcade({ isMobile }) {
  const grid = useRef();
  useFrame(({ clock }) => { grid.current.position.z = (clock.elapsedTime * 2.2) % 2; });
  return (
    <>
      <Stars count={isMobile ? 500 : 1400} color="#bfe9ff" size={0.06} />
      <mesh position={[0, 0.4, -34]}>
        {/* upper half only: a sun rising on the horizon */}
        <circleGeometry args={[4.5, 64, 0, Math.PI]} />
        <shaderMaterial args={[sunShader]} transparent depthWrite={false} />
      </mesh>
      <group ref={grid} position={[0, -3.2, 0]}>
        <gridHelper args={[120, 60, '#ff2e97', '#7a2cff']} />
      </group>
      {!isMobile && (
        <>
          <Floater position={[-19, 11, -10]} color="#00f0ff"><icosahedronGeometry args={[1.1, 0]} /></Floater>
          <Floater position={[19, 11, -10]} color="#ffd319" speed={0.3}><octahedronGeometry args={[1.2, 0]} /></Floater>
          <Floater position={[13, 1.2, -7]} color="#ff2e97" speed={0.5}><torusGeometry args={[0.8, 0.28, 8, 16]} /></Floater>
          <Floater position={[-13.5, 1.4, -8]} color="#7a2cff" speed={0.35}><boxGeometry args={[1.2, 1.2, 1.2]} /></Floater>
        </>
      )}
      <fog attach="fog" args={['#0d0221', 16, 52]} />
      <CameraRig base={[0, 0.4, 10]} scrollDepth={1.2} lookY={3} />
    </>
  );
}

/* ---------- canvas ---------- */

const SCENES = { cosmos: Cosmos, lab: Neural, arcade: Arcade };

export default function SceneCanvas({ theme, isMobile }) {
  const Scene = SCENES[theme] || Cosmos;
  return (
    <Canvas
      key={theme}
      dpr={isMobile ? [1, 1.25] : [1, 1.75]}
      camera={{ position: [0, 0, 10], fov: 55, near: 0.1, far: 120 }}
      gl={{ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' }}
      eventSource={document.getElementById('root')}
      eventPrefix="client"
    >
      <Scene isMobile={isMobile} />
    </Canvas>
  );
}
