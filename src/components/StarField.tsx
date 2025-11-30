import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars() {
  const ref = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const p = new Float32Array(1500 * 3);
    for (let i = 0; i < 5000; i++) {
      const i3 = i * 3;
      p[i3] = (Math.random() - 0.5) * 100;
      p[i3 + 1] = (Math.random() - 0.5) * 100;
      p[i3 + 2] = (Math.random() - 0.5) * 100;
    }
    return p;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 43;
      ref.current.rotation.y -= delta / 55;
      ref.current.rotation.z -= delta / 65;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#88ccff"
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export const StarField = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
};
