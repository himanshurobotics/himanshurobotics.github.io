
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Publications from '@/components/Publications';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import MouseFollowEffect from '@/components/MouseFollowEffect';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500">
      <AnimatedBackground />
      <MouseFollowEffect />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Publications />
        <Experience />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Index;
