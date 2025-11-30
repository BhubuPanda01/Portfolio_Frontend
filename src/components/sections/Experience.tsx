
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Junior Backend Developer',
    company: 'AAS International Private Limited',
    period: 'Dec 2024 - Present',
    description:
      'Behind every smooth interface lies a framework of care — built to endure, evolve, and perform with quiet confidence.',
    skills: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
  },
  {
    title: 'Web Developer Intern',
    company: 'Oasis Infobyte',
    period: 'Nov 2023 - Dec 2023',
    description:
      'Created stunning user interfaces and interactive experiences for global brands.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
];

export const Experience = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20"
    >
      <motion.div className="container mx-auto px-6" style={{ opacity }}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Central timeline line */}
        <div className="absolute left-1/2 top-[220px] bottom-0 w-[4px] bg-gradient-to-b from-transparent via-primary/60 to-transparent rounded-full -translate-x-1/2" />
        <motion.div
          className="absolute left-1/2 top-[220px] w-[4px] bg-gradient-to-b from-primary via-secondary to-transparent rounded-full -translate-x-1/2"
          style={{ height: lineHeight }}
        />

        <div className="max-w-5xl mx-auto space-y-16 relative">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                  ease: 'easeInOut',
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className={`relative flex items-center ${
                  isLeft ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Connector Dot */}
                <div className="absolute left-1/2 w-5 h-5 bg-gradient-to-br from-primary to-secondary rounded-full -translate-x-1/2 shadow-md shadow-primary/40" />

                {/* Card */}
                <div
                  className={`w-[85%] md:w-[40%] glass-effect p-5 rounded-2xl hover-glow ${
                    isLeft ? 'mr-auto text-left' : 'ml-auto text-right'
                  }`}
                >
                  <div
                    className={`flex items-start gap-3 ${
                      isLeft ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-base text-primary mb-1">{exp.company}</p>
                      <div
                        className={`flex items-center gap-2 text-muted-foreground mb-3 ${
                          isLeft ? '' : 'flex-row-reverse'
                        }`}
                      >
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {exp.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 ${
                          isLeft ? 'justify-start' : 'justify-end'
                        }`}
                      >
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};


