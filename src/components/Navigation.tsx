import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tech Stack', href: '#tech' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // NEW: lock active section when user clicks
  const isManuallySelecting = useRef(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-35% 0px -35% 0px", // center detection
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (isManuallySelecting.current) return; // lock active during manual scroll

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.href.substring(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const target = document.getElementById(href.substring(1));
    if (!target) return;

    // lock the highlight
    isManuallySelecting.current = true;
    setActiveSection(href.substring(1));

    target.scrollIntoView({ behavior: "smooth" });

    // release lock AFTER scrolling ends
    setTimeout(() => {
      isManuallySelecting.current = false;
    }, 800); // adjust if needed
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.div>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`relative text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}

                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contact')}
            className="hidden md:block px-6 py-2 rounded-full bg-primary text-primary-foreground hover-glow"
          >
            Let's Talk
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};
