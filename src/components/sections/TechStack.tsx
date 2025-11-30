// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Float } from '@react-three/drei';
// import * as THREE from 'three';

// const technologies = [
//   { name: 'React', color: '#61DAFB' },
//   { name: 'Three.js', color: '#ffffff' },
//   { name: 'TypeScript', color: '#3178C6' },
//   { name: 'Node.js', color: '#339933' },
//   { name: 'Tailwind', color: '#06B6D4' },
//   { name: 'WebGL', color: '#ff6b6b' },
// ];

// function TechShape({ position, color }: { position: [number, number, number]; color: string }) {
//   const meshRef = useRef<THREE.Mesh>(null);

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
//     }
//   });

//   return (
//     <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
//       <mesh ref={meshRef} position={position}>
//         <octahedronGeometry args={[0.6, 0]} />
//         <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} emissive={color} emissiveIntensity={0.3} />
//       </mesh>
//     </Float>
//   );
// }

// export const TechStack = () => {
//   const ref = useRef<HTMLElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start end', 'end start'],
//   });

//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

//   return (
//     <section id="tech" ref={ref} className="min-h-screen flex items-center justify-center py-20">
//       <motion.div className="container mx-auto px-6" style={{ opacity }}>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//               Tech Stack
//             </span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Technologies and tools I use to bring ideas to life
//           </p>
//         </motion.div>

//         <div className="max-w-4xl mx-auto">
//           <div className="h-[400px] rounded-2xl glass-effect overflow-hidden mb-8">
//             <Canvas camera={{ position: [0, 0, 8] }}>
//               <ambientLight intensity={0.5} />
//               <pointLight position={[10, 10, 10]} intensity={1} />
//               <pointLight position={[-10, -10, -10]} intensity={0.5} />
//               {technologies.map((tech, index) => (
//                 <TechShape
//                   key={tech.name}
//                   position={[
//                     Math.cos((index / technologies.length) * Math.PI * 2) * 3,
//                     Math.sin((index / technologies.length) * Math.PI * 2) * 2,
//                     0
//                   ]}
//                   color={tech.color}
//                 />
//               ))}
//             </Canvas>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {technologies.map((tech, index) => {
//               const cardRef = useRef<HTMLDivElement>(null);
//               const { scrollYProgress } = useScroll({
//                 target: cardRef,
//                 offset: ['start end', 'end start']
//               });
              
//               const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.9]);
//               const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 0, 20]);
              
//               return (
//                 <motion.div
//                   key={tech.name}
//                   ref={cardRef}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: index * 0.1, duration: 0.5 }}
//                   viewport={{ once: true }}
//                   style={{
//                     scale,
//                     rotateY,
//                     transformPerspective: 1200
//                   }}
//                   whileHover={{ 
//                     scale: 1.1,
//                     rotateY: 0,
//                     transition: { duration: 0.2 } 
//                   }}
//                   className="glass-effect p-6 rounded-xl text-center card-glow cursor-pointer"
//                 >
//                 <div
//                   className="w-3 h-3 rounded-full mx-auto mb-2"
//                   style={{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}` }}
//                 />
//                   <p className="font-medium">{tech.name}</p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };







import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import {
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiFlask,
  SiReact,
  SiMongodb,
} from 'react-icons/si';

// 🪐 Define your technologies
const technologies = [
  { name: 'HTML/CSS', icon: <SiHtml5 className="text-[#FFD43B]" size={25} /> },
  { name: 'Javascript', icon: <SiJavascript className="text-white" size={25} /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-[#3C873A]" size={25} /> },
  { name: 'Python', icon: <SiPython className="text-[#3178C6]" size={25} /> },
  { name: 'Flask', icon: <SiFlask className="text-[#F1502F]" size={25} /> },
  { name: 'React', icon: <SiReact className="text-[#06B6D4]" size={25} /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#4DB33D]" size={25} /> },
]
// 💫 Floating 3D Shape (background elements)
function TechShape({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.25}
        />
      </mesh>
    </Float>
  );
}

// 🌌 Tech Stack Section
export const TechStack = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="tech"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      {/* 🪐 Floating 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          {technologies.map((tech, index) => (
            <TechShape
              key={tech.name}
              position={[
                Math.cos((index / technologies.length) * Math.PI * 2) * 3,
                Math.sin((index / technologies.length) * Math.PI * 2) * 2,
                0,
              ]}
              color={`hsl(${(index / technologies.length) * 360}, 100%, 70%)`}
            />
          ))}
        </Canvas>
      </div>

      {/* ✨ Tech Stack Cards */}
      <motion.div className="container mx-auto px-4" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1 rounded-full bg-white/10 text-sm text-white/80 border border-white/20">
            🤝 What I Bring to the Table
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Tech Stack
          </h2>
        </motion.div>

        {/* 🧩 Cards Grid */}
        <div className="flex flex-wrap justify-center gap-5 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{
                scale: 1.07,
                transition: { duration: 0.3 },
              }}
              className="relative flex flex-col items-center justify-center bg-black/40 backdrop-blur-xl 
                         border border-white/10 rounded-[40px] px-6 py-8 w-40 h-56 md:w-48 md:h-64
                         overflow-hidden cursor-pointer group"
            >
              {/* Hover gradient fill effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                           bg-gradient-to-br from-cyan-400/20 to-purple-600/20"
              ></div>

              <div className="mb-3 z-10">{tech.icon}</div>
              <p className="text-white font-medium text-center text-sm md:text-base z-10">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

