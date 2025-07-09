
import React from 'react';
import { Github, Linkedin, Mail, Download, Cpu, ChevronDown, Bot, BrainCircuit, Zap, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-tech-lightblue via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex items-center overflow-hidden">
      {/* Advanced Circuit Board Pattern Background */}
      <div className="absolute inset-0 bg-[url('./circuit-pattern.svg')] bg-repeat opacity-5 dark:opacity-10"></div>
      
      {/* Enhanced Animated Tech Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Robots and Circuit Elements */}
        <div className="absolute top-20 left-[5%] w-16 h-16 border-2 border-tech-blue dark:border-tech-accent rounded-full animate-pulse opacity-20">
          <Bot className="w-8 h-8 text-tech-blue dark:text-tech-accent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute top-1/3 right-[10%] w-24 h-24 border border-tech-blue dark:border-tech-accent rounded-full animate-ping opacity-10 animation-delay-1000">
          <BrainCircuit className="w-12 h-12 text-tech-blue dark:text-tech-accent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute bottom-1/4 left-[20%] w-20 h-20 border border-tech-blue dark:border-tech-accent rounded-full animate-pulse opacity-15">
          <Settings className="w-10 h-10 text-tech-blue dark:text-tech-accent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-rotate" />
        </div>
        
        {/* Animated Circuit Lines */}
        <div className="absolute top-[15%] right-[20%] w-40 h-0.5 bg-gradient-to-r from-tech-blue to-transparent dark:from-tech-accent opacity-30 animate-pulse">
          <div className="w-2 h-2 bg-tech-blue dark:bg-tech-accent rounded-full absolute -right-1 -top-0.5 animate-pulse"></div>
        </div>
        <div className="absolute bottom-[30%] left-[15%] w-60 h-0.5 bg-gradient-to-l from-tech-blue to-transparent dark:from-tech-accent opacity-30 animate-pulse animation-delay-500">
          <div className="w-2 h-2 bg-tech-blue dark:bg-tech-accent rounded-full absolute -left-1 -top-0.5 animate-pulse"></div>
        </div>
        <div className="absolute top-1/2 left-[10%] w-0.5 h-32 bg-gradient-to-b from-tech-blue to-transparent dark:from-tech-accent opacity-30 animate-pulse animation-delay-1000"></div>
        
        {/* Floating Tech Icons */}
        <Cpu className="absolute top-[30%] left-[10%] w-12 h-12 text-tech-blue dark:text-tech-accent opacity-15 animate-float" />
        <Bot className="absolute bottom-[20%] right-[15%] w-16 h-16 text-tech-blue dark:text-tech-accent opacity-15 animate-float animation-delay-1000" />
        <Zap className="absolute top-[60%] right-[25%] w-10 h-10 text-tech-blue dark:text-tech-accent opacity-15 animate-pulse animation-delay-500" />
        <BrainCircuit className="absolute bottom-[40%] left-[5%] w-14 h-14 text-tech-blue dark:text-tech-accent opacity-15 animate-pulse-slow" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-tech-blue dark:bg-tech-accent rounded-full animate-pulse"></div>
              <h2 className="text-2xl font-medium text-tech-blue dark:text-tech-accent">Hello, I'm a Robotics Engineer</h2>
              <Bot className="w-6 h-6 text-tech-blue dark:text-tech-accent animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-tech-darkblue dark:text-white tech-gradient">
              Himanshu Varshney
            </h1>
            <div className="flex items-center space-x-2">
              <Cpu className="w-6 h-6 text-tech-blue dark:text-tech-accent" />
              <p className="text-xl text-gray-600 dark:text-gray-300 font-semibold">
                Ph.D. Research Scholar | Robotics & AI Specialist
              </p>
            </div>
            <div className="bg-gradient-to-r from-tech-blue/10 to-transparent dark:from-tech-accent/10 p-4 rounded-lg border-l-4 border-tech-blue dark:border-tech-accent">
              <p className="text-gray-700 dark:text-gray-300 max-w-lg">
                <BrainCircuit className="w-5 h-5 inline mr-2 text-tech-blue dark:text-tech-accent" />
                Specializing in <strong>kinematics, dynamics and compliant control</strong> of serial, parallel and hybrid robots with applications in <strong>exoskeletons, humanoids, rehabilitation and industrial automation</strong>.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button 
                onClick={handleContactClick}
                className="bg-tech-blue hover:bg-tech-darkblue dark:bg-tech-accent dark:hover:bg-tech-blue transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-tech-blue/25"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              {/* <Button 
                variant="outline" 
                className="border-tech-blue text-tech-blue hover:bg-tech-lightblue dark:border-tech-accent dark:text-tech-accent dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button> */}
            </div>
            {/* <div className="flex space-x-4 pt-4">
              <a 
                href="https://himanshurobotics.github.io/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-tech-blue dark:text-gray-400 dark:hover:text-tech-accent transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-tech-blue/10 dark:hover:bg-tech-accent/10"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-tech-blue dark:text-gray-400 dark:hover:text-tech-accent transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-tech-blue/10 dark:hover:bg-tech-accent/10"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:hvarshneyperiodittdhn[test your common sense here for gmail]" 
                className="text-gray-600 hover:text-tech-blue dark:text-gray-400 dark:hover:text-tech-accent transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-tech-blue/10 dark:hover:bg-tech-accent/10"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div> */}
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative animate-float">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-tech-blue dark:border-tech-accent shadow-2xl relative tech-glow">
                <div className="absolute inset-0 bg-gradient-to-b from-tech-blue/20 to-transparent"></div>
                <img 
                  src="/lovable-uploads/prof_pic.png" 
                  alt="Himanshu Varshney - Robotics Engineer" 
                  className="w-full h-full object-cover"
                />
                {/* Robotic overlay effects */}
                <div className="absolute inset-0 border-2 border-tech-blue/30 dark:border-tech-accent/30 rounded-full animate-ping"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg animate-pulse border border-tech-blue/20 dark:border-tech-accent/20">
                <div className="bg-gradient-to-r from-tech-blue to-tech-darkblue dark:from-tech-accent dark:to-tech-blue text-white text-sm font-medium px-4 py-2 rounded flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  Senior Research Fellow
                  <br />
                  @ Indian Institute of Technology Dhanbad
                </div>
              </div>
              <div className="absolute -top-2 -left-2 bg-tech-blue/10 dark:bg-tech-accent/10 w-full h-full rounded-full animate-pulse-slow border border-tech-blue/20 dark:border-tech-accent/20"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer flex flex-col items-center" onClick={scrollToAbout}>
          <span className="text-sm text-tech-blue dark:text-tech-accent mb-2 font-medium">Scroll to explore</span>
          <ChevronDown className="w-8 h-8 text-tech-blue dark:text-tech-accent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
