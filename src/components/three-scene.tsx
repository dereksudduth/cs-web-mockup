'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
      sphereRef.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.2) * 0.2;
      sphereRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <motion.group
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2.8}>
        <MeshDistortMaterial
          color="#000000"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.7}
          opacity={0.1}
          transparent
        />
      </Sphere>
    </motion.group>
  );
}

export function ThreeScene() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}