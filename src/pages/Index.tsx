
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeProvider';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
