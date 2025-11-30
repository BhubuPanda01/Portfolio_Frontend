import { StarField } from '@/components/StarField';
import { FloatingGeometry } from '@/components/FloatingGeometry';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { TechStack } from '@/components/sections/TechStack';
import { Certificates } from '@/components/sections/Certificates';
import { Contact } from '@/components/sections/Contact';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="relative">
      {/* Background */}
      <StarField />
      <FloatingGeometry />
      <Navigation />

      {/* Sections */}
      <Hero />
      <About />

      {/* Combined Experience + Projects Section */}
      <section className="min-h-screen flex items-center justify-center py-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-4 w-full max-w-10xl rounded-2xl 
                     bg-transparent  "
        >
          {/* Experience */}
          <div className="flex-1">
            <Experience />
          </div>

          {/* Projects */}
          <div className="flex-1">
            <TechStack />
          </div>
        </motion.div>
      </section>

      {/* Remaining sections */}
      <Projects />
      
      
      {/* Combined Experience + Projects Section */}
      <section className="min-h-screen flex items-center justify-center py-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-4 w-full max-w-10xl rounded-2xl 
                     bg-transparent  "
        >
          {/* Experience */}
          <div className="flex-1">
            <Certificates />
          </div>

          {/* Projects */}
          <div className="flex-1">
            <Contact />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
