import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

function AnimatedSphere() {
  return (
    <motion.group
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <Sphere args={[1, 64, 64]} scale={0.8}>
        <MeshDistortMaterial
          color="#000000"
          attach="material"
          distort={0.2}
          speed={1.5}
          roughness={0.4}
          metalness={0.6}
        />
      </Sphere>
    </motion.group>
  );
}

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 opacity-[0.02]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={0.7} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}