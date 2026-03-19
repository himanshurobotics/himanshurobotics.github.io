
import React from 'react';
import { Github, Linkedin, Mail, Download, Cpu, ChevronDown, Bot, BrainCircuit, Zap, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import wallpaperHero from '@/assets/wallpaper-hero.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-section wallpaper */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${wallpaperHero})` }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-tech-darkblue/70 to-black/80" />
      {/* Circuit board overlay */}
      <div className="absolute inset-0 bg-[url('./circuit-pattern.svg')] bg-repeat opacity-5" />

      {/* Animated Tech Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[5%] w-16 h-16 border-2 border-tech-accent rounded-full animate-pulse opacity-30">
          <Bot className="w-8 h-8 text-tech-accent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute top-1/3 right-[10%] w-24 h-24 border border-tech-accent rounded-full animate-ping opacity-15 animation-delay-1000" />
        <div className="absolute bottom-1/4 left-[20%] w-20 h-20 border border-tech-accent rounded-full animate-pulse opacity-20">
          <Settings className="w-10 h-10 text-tech-accent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-rotate" />
        </div>
        <div className="absolute top-[15%] right-[20%] w-40 h-0.5 bg-gradient-to-r from-tech-accent to-transparent opacity-40 animate-pulse" />
        <div className="absolute bottom-[30%] left-[15%] w-60 h-0.5 bg-gradient-to-l from-tech-accent to-transparent opacity-40 animate-pulse animation-delay-500" />
        <div className="absolute top-1/2 left-[10%] w-0.5 h-32 bg-gradient-to-b from-tech-accent to-transparent opacity-40 animate-pulse animation-delay-1000" />
        <Cpu className="absolute top-[30%] left-[10%] w-12 h-12 text-tech-accent opacity-20 animate-float" />
        <Bot className="absolute bottom-[20%] right-[15%] w-16 h-16 text-tech-accent opacity-20 animate-float animation-delay-1000" />
        <Zap className="absolute top-[60%] right-[25%] w-10 h-10 text-tech-accent opacity-20 animate-pulse animation-delay-500" />
        <BrainCircuit className="absolute bottom-[40%] left-[5%] w-14 h-14 text-tech-accent opacity-20 animate-pulse-slow" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-tech-accent rounded-full animate-pulse"></div>
              <h2 className="text-2xl font-medium text-tech-accent">Hello, I'm a Robotics Engineer</h2>
              <Bot className="w-6 h-6 text-tech-accent animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl">
              Himanshu <span className="tech-gradient">Varshney</span>
            </h1>
            <div className="flex items-center space-x-2">
              <Cpu className="w-6 h-6 text-tech-accent" />
              <p className="text-xl text-gray-200 font-semibold">
                Ph.D. Research Scholar | Robotics & AI Specialist
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border-l-4 border-tech-accent border border-tech-accent/20">
              <p className="text-gray-200 max-w-lg">
                <BrainCircuit className="w-5 h-5 inline mr-2 text-tech-accent" />
                Specializing in <strong className="text-white">kinematics, dynamics and compliant control</strong> of serial, parallel and hybrid robots with applications in <strong className="text-white">exoskeletons, humanoids, rehabilitation and industrial automation</strong>.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button
                onClick={handleContactClick}
                className="bg-tech-accent hover:bg-tech-blue text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-tech-accent/40 border border-tech-accent/50"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative animate-float">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-tech-accent shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-b from-tech-accent/20 to-transparent z-10"></div>
                <img
                  src="/lovable-uploads/prof_pic.png"
                  alt="Himanshu Varshney - Robotics Engineer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-2 border-tech-accent/40 rounded-full animate-ping z-20"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-black/80 backdrop-blur-sm p-3 rounded-lg shadow-lg animate-pulse border border-tech-accent/30">
                <div className="bg-gradient-to-r from-tech-accent to-tech-blue text-white text-sm font-medium px-4 py-2 rounded flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  Senior Research Fellow
                  <br />
                  @ IIT (ISM) Dhanbad
                </div>
              </div>
              <div className="absolute -top-2 -left-2 bg-tech-accent/10 w-full h-full rounded-full animate-pulse-slow border border-tech-accent/20"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer flex flex-col items-center" onClick={scrollToAbout}>
          <span className="text-sm text-tech-accent mb-2 font-medium tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown className="w-8 h-8 text-tech-accent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
