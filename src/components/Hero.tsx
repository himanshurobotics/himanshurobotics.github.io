
import React from 'react';
import { Github, Linkedin, Mail, Download, Cpu, Circuit, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-tech-lightblue to-white dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center overflow-hidden">
      {/* Circuit Board Pattern Background */}
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-5 dark:opacity-10"></div>
      
      {/* Animated Tech Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[5%] w-16 h-16 border-2 border-tech-blue dark:border-tech-accent rounded-full animate-pulse opacity-20"></div>
        <div className="absolute top-1/3 right-[10%] w-24 h-24 border border-tech-blue dark:border-tech-accent rounded-full animate-ping opacity-10 animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-[20%] w-20 h-20 border border-tech-blue dark:border-tech-accent rounded-full animate-pulse opacity-15"></div>
        
        <div className="absolute top-[15%] right-[20%] w-40 h-0.5 bg-tech-blue dark:bg-tech-accent opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[30%] left-[15%] w-60 h-0.5 bg-tech-blue dark:bg-tech-accent opacity-20 animate-pulse"></div>
        
        <Cpu className="absolute top-[30%] left-[10%] w-12 h-12 text-tech-blue dark:text-tech-accent opacity-10 animate-pulse" />
        <Cpu className="absolute bottom-[20%] right-[15%] w-16 h-16 text-tech-blue dark:text-tech-accent opacity-10 animate-pulse" />
      </div>
      
      <div className="absolute inset-0 bg-[url('/lovable-uploads/61ba78e5-9f48-430c-9e9a-c6c6fc995031.png')] bg-center bg-cover opacity-10"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h2 className="text-2xl font-medium text-tech-blue dark:text-tech-accent">Hello, I'm</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-tech-darkblue dark:text-white">
              Himanshu Varshney
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Robotics Engineer | Ph.D. Research Scholar
            </p>
            <p className="text-gray-600 dark:text-gray-300 max-w-lg">
              Research interests and expertise spans kinematics, dynamics and complaint control of serial, parallel and hybrid robots with applications in the fields of exoskeletons, humanoids, rehabilitation and industrial automation.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-tech-blue hover:bg-tech-darkblue dark:bg-tech-accent dark:hover:bg-tech-blue transition-all duration-300 hover:scale-105">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-lightblue dark:border-tech-accent dark:text-tech-accent dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://himanshurobotics.github.io/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-tech-blue dark:text-gray-400 dark:hover:text-tech-accent transition-colors duration-300 transform hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-tech-blue dark:text-gray-400 dark:hover:text-tech-accent transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:hvarshneyperiodittdhn[test your common sense here for gmail]" 
                className="text-gray-600 hover:text-tech-blue dark:text-gray-400 dark:hover:text-tech-accent transition-colors duration-300 transform hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative animate-float">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-tech-blue dark:border-tech-accent shadow-xl relative">
                <div className="absolute inset-0 bg-gradient-to-b from-tech-blue/20 to-transparent"></div>
                <img 
                  src="/lovable-uploads/61ba78e5-9f48-430c-9e9a-c6c6fc995031.png" 
                  alt="Himanshu Varshney" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg animate-pulse">
                <div className="bg-tech-blue dark:bg-tech-accent text-white text-sm font-medium px-4 py-2 rounded">
                  Indian Institute of Technology, Dhanbad
                </div>
              </div>
              <div className="absolute -top-2 -left-2 bg-tech-blue/10 dark:bg-tech-accent/10 w-full h-full rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToAbout}>
          <ChevronDown className="w-8 h-8 text-tech-blue dark:text-tech-accent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
