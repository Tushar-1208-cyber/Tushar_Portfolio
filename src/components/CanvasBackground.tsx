"use client";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleSphere() {
  const pointsRef = useRef<THREE.Points>(null);
  const [positions] = useState(() => {
    const coords = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.4 + Math.random() * 0.4;
      coords[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      coords[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      coords[i * 3 + 2] = r * Math.cos(phi);
    }
    return coords;
  });

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.04;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f7ff"
          size={0.014}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function InteractiveParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [positions] = useState(() => {
    const coords = new Float32Array(400 * 3);
    for (let i = 0; i < 400; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 8;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 8;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return coords;
  });

  useFrame((state) => {
    if (pointsRef.current) {
      const targetX = mouse.current.x * 0.4;
      const targetY = mouse.current.y * 0.4;
      pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.05;
      pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.05;
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#7c3aed"
        size={0.012}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.7}
      />
    </Points>
  );
}

export default function CanvasBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-[#050816] z-0" />;
  }

  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-70">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <ParticleSphere />
        <InteractiveParticles />
      </Canvas>
    </div>
  );
}
