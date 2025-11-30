// import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
// import { useRef } from 'react';
// import { ExternalLink, Github } from 'lucide-react';

// const projects = [
//   {
//     title: '3D Portfolio Experience',
//     description: 'An immersive portfolio website featuring Three.js animations and WebGL effects.',
//     image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
//     tech: ['Three.js', 'React', 'GSAP', 'WebGL'],
//     github: '#',
//     live: '#',
//   },
//   {
//     title: 'E-Commerce Platform',
//     description: 'Full-stack e-commerce solution with real-time inventory and payment integration.',
//     image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
//     tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
//     github: '#',
//     live: '#',
//   },
//   {
//     title: 'AI Dashboard',
//     description: 'Interactive dashboard for AI model visualization and data analytics.',
//     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
//     tech: ['React', 'D3.js', 'Python', 'TensorFlow'],
//     github: '#',
//     live: '#',
//   },
// ];

// export const Projects = () => {
//   const ref = useRef<HTMLElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start end', 'end start'],
//   });

//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

//   return (
//     <section id="projects" ref={ref} className="min-h-screen flex items-center justify-center py-20">
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
//               Featured Projects
//             </span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A showcase of my recent work and creative experiments
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {projects.map((project, index) => {
//             const cardRef = useRef<HTMLDivElement>(null);
//             const { scrollYProgress } = useScroll({
//               target: cardRef,
//               offset: ['start end', 'end start']
//             });
            
//             const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95]);
//             const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
            
//             return (
//               <motion.div
//                 key={project.title}
//                 ref={cardRef}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 style={{ 
//                   scale,
//                   rotateX,
//                   transformPerspective: 1200
//                 }}
//                 whileHover={{ 
//                   y: -10,
//                   scale: 1.05,
//                   rotateX: 0,
//                   transition: { duration: 0.3 } 
//                 }}
//                 className="glass-effect rounded-2xl overflow-hidden card-glow group"
//               >
//                 <div className="relative overflow-hidden aspect-video">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
//                 </div>
                
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                   <p className="text-muted-foreground mb-4">{project.description}</p>
                  
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tech.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex gap-4">
//                     <motion.a
//                       href={project.github}
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
//                     >
//                       <Github className="w-4 h-4" />
//                       Code
//                     </motion.a>
//                     <motion.a
//                       href={project.live}
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
//                     >
//                       <ExternalLink className="w-4 h-4" />
//                       Live Demo
//                     </motion.a>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </motion.div>
//     </section>
//   );
// };









// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { useRef } from "react";
// import { ExternalLink, Github } from "lucide-react";

// const projects = [
//   {
//     title: "3D Portfolio Experience",
//     description:
//       "An immersive portfolio website featuring Three.js animations and WebGL effects.",
//     image:
//       "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
//     tech: ["Three.js", "React", "GSAP", "WebGL"],
//     github: "#",
//     live: "#",
//   },
//   {
//     title: "E-Commerce Platform",
//     description:
//       "Full-stack e-commerce solution with real-time inventory and payment integration.",
//     image:
//       "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
//     tech: ["React", "Node.js", "MongoDB", "Stripe"],
//     github: "#",
//     live: "#",
//   },
//   {
//     title: "AI Dashboard",
//     description:
//       "Interactive dashboard for AI model visualization and data analytics.",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
//     tech: ["React", "D3.js", "Python", "TensorFlow"],
//     github: "#",
//     live: "#",
//   },
// ];

// export const Projects = () => {
//   const sectionRef = useRef<HTMLElement>(null);

//   // Scroll progress for the section
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   // Smooth motion values
//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 20,
//   });

//   // Scale and spacing based on scroll
//   const scale = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0.6, 1, 1, 0.9, 0.6]);
//   const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
//   const stackOffset = useTransform(smoothProgress, [0, 0.5, 1], [0, 0, -200]); // move stack on collapse

//   return (
//     <section
//       id="projects"
//       ref={sectionRef}
//       className="min-h-screen flex items-center justify-center py-20"
//     >
//       <motion.div className="container mx-auto px-6" style={{ opacity }}>
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//               Featured Projects
//             </span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A showcase of my recent work and creative experiments
//           </p>
//         </motion.div>

//         {/* Stack Container */}
//         <motion.div
//           style={{
//             scale,
//             perspective: 1200,
//             translateZ: stackOffset,
//           }}
//           className="relative flex justify-center items-center min-h-[60vh]"
//         >
//           {projects.map((project, index) => {
//             // Each card’s depth & rotation depends on index + scroll
//             const z = useTransform(smoothProgress, [0, 0.5, 1], [index * 40, 0, index * -80]);
//             const rotate = useTransform(
//               smoothProgress,
//               [0, 0.5, 1],
//               [10 - index * 3, 0, -5 + index * 2]
//             );
//             const y = useTransform(smoothProgress, [0, 0.5, 1], [index * -20, 0, index * -50]);

//             return (
//               <motion.div
//                 key={project.title}
//                 style={{
//                   position: "absolute",
//                   zIndex: projects.length - index,
//                   translateZ: z,
//                   rotateX: rotate,
//                   y,
//                   scale,
//                 }}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2, duration: 0.6 }}
//                 viewport={{ once: false }}
//                 whileHover={{
//                   y: -10,
//                   scale: 1.05,
//                   transition: { duration: 0.3 },
//                 }}
//                 className="glass-effect rounded-2xl overflow-hidden card-glow group w-full max-w-md"
//               >
//                 <div className="relative overflow-hidden aspect-video">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
//                 </div>

//                 <div className="p-6 bg-background/40 backdrop-blur-md">
//                   <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                   <p className="text-muted-foreground mb-4">
//                     {project.description}
//                   </p>

//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tech.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex gap-4">
//                     <motion.a
//                       href={project.github}
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
//                     >
//                       <Github className="w-4 h-4" />
//                       Code
//                     </motion.a>
//                     <motion.a
//                       href={project.live}
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
//                     >
//                       <ExternalLink className="w-4 h-4" />
//                       Live Demo
//                     </motion.a>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };








import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    title: "HRMS – Human Resource Management System",
    description:
      "A fully functional HRMS solution to manage employees, attendance, leaves, permissions, salaries, roles, and workflows.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    tech: ["Node.js", "Express", "MongoDB", "React", "JWT Auth"],
    // github: "#",
    // live: "#",
  },
  {
    title: "Requisition & Notice Management Portal",
    description:
      "A centralized platform for managing requisitions, purchase requests, orders, approvals, and internal notices.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    tech: ["Node.js", "Express", "MongoDB", "React", "REST APIs"],
    // github: "#",
    // live: "#",
  },
];

export const Projects = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [selectedProject, setSelectedProject] =
    useState<typeof projects[0] | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <motion.div className="container mx-auto px-4" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="px-4 py-1 rounded-full bg-white/10 text-sm text-white/80 border border-white/20">
            🚀 Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Recent Projects
            </span>
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mt-2">
            A selection of my most creative and technically refined work.
          </p>
        </motion.div>

        {/* ====== FLEX WRAP CENTERED LAYOUT ======
            This ensures exact centering for ANY number of items.
        */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-start gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.25 },
                }}
                onClick={() => setSelectedProject(project)}
                className="relative w-full max-w-[320px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group cursor-pointer hover:border-white/30 transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {project.title}
                  </h3>

                  <p className="text-sm text-white/70 line-clamp-2 mb-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-full bg-white/10 text-white/70 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* <div className="flex justify-between text-white/70 text-sm">
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">
                      <Github className="w-4 h-4" /> Code
                    </a>

                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-black/80 border border-white/20 rounded-2xl max-w-lg w-full p-6 relative text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-white/60 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full rounded-lg mb-4"
            />

            <h3 className="text-2xl font-bold mb-2 text-white">
              {selectedProject.title}
            </h3>

            <p className="text-white/70 mb-4">{selectedProject.description}</p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {selectedProject.tech.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">
                  {tech}
                </span>
              ))}
            </div>

            {/* <div className="flex justify-center gap-6">
              <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white">
                <Github className="w-4 h-4" /> Code
              </a>

              <a href={selectedProject.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            </div> */}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};




