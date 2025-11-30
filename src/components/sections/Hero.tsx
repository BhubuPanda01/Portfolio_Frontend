import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useState, useEffect } from 'react';

function AnimatedSphere() {
  return (
    <Sphere args={[1, 100, 100]} scale={0.6} position={[-1.5, 0, 0]}>
      <MeshDistortMaterial
        color="#4785ff"
        attach="material"
        distort={0.5} // 🔹 subtle wave distortion (reduced from 0.5)
        speed={0.1} // 🔹 slower for smooth motion
        roughness={0}
        metalness={0.6}
      />
    </Sphere>
  );
}


export const Hero = () => {
  const taglines = [
    "Turning Complex Logic Into Seamless Performance.",
    "Code That Commands the Core.",
    "Transforming Ideas Into Reality.",
    "Built on Logic. Forged for Reliability."
  ];

  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = taglines[currentTagline];
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < currentText.length) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentText.slice(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTagline]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-start relative overflow-hidden">
      {/* Background 3D Animation */}
      <div className="absolute inset-0 -z-10">
  <Canvas camera={{ position: [0, 0, 3] }}>
    <OrbitControls enableZoom={false} enableRotate={false} autoRotate autoRotateSpeed={0.4} />
    <ambientLight intensity={0.5} />
    <directionalLight position={[3, 2, 1]} intensity={2} />
    <AnimatedSphere />
  </Canvas>
</div>


      {/* Content */}
      <div className="container mx-auto px-10 md:px-20 relative z-10 flex flex-col items-start justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-12"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl animate-pulse"></div>
              <img
                src="public/Images/Portfolio Profile pic.jpg"
                alt="Profile"
                className="relative w-full h-full rounded-full object-cover border-4 border-primary/30 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <div className="flex-1 text-left">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Bhubaneswari Panda
              </span>
              <span className="block font-['Orbitron'] text-2xl font-semibold tracking-[0.2em] bg-gradient-to-r from-[#00b4d8]/90 via-[#5f5fff]/90 to-[#90e0ef]/90 bg-clip-text text-transparent mt-3">
                Software Developer
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 h-16 flex items-center justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {displayText}
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse"></span>
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px hsl(217 91% 60% / 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full glass-effect font-medium"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Down Arrow Animation */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </motion.div>
    </section>
  );
};
