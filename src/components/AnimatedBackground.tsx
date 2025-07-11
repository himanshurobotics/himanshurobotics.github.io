
import React, { useState, useEffect } from 'react';
import { Cpu, Bot, BrainCircuit, Zap, Settings, Atom, Sparkles, Orbit } from 'lucide-react';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient orbs that follow mouse */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-tech-blue/10 to-tech-accent/10 rounded-full blur-3xl animate-pulse-slow transition-all duration-[2000ms]"
        style={{
          left: `${20 + mousePosition.x * 0.1}%`,
          top: `${20 + mousePosition.y * 0.1}%`,
        }}
      ></div>
      <div 
        className="absolute w-80 h-80 bg-gradient-to-r from-tech-accent/8 to-tech-blue/8 rounded-full blur-3xl animate-pulse-slow animation-delay-1000 transition-all duration-[1500ms]"
        style={{
          right: `${20 + mousePosition.x * 0.05}%`,
          bottom: `${20 + mousePosition.y * 0.08}%`,
        }}
      ></div>
      <div 
        className="absolute w-64 h-64 bg-gradient-to-r from-purple-400/5 to-tech-blue/5 rounded-full blur-2xl animate-pulse-slow animation-delay-500 transition-all duration-[1800ms]"
        style={{
          right: `${30 + mousePosition.x * 0.08}%`,
          top: `${40 + mousePosition.y * 0.06}%`,
        }}
      ></div>
      
      {/* Interactive floating tech icons */}
      <div 
        className="absolute animate-float animation-delay-0 transition-all duration-1000"
        style={{
          left: `${10 + mousePosition.x * 0.02}%`,
          top: `${15 + mousePosition.y * 0.03}%`,
        }}
      >
        <Cpu className="w-8 h-8 text-tech-blue/20 dark:text-tech-accent/20 hover:text-tech-blue/40 dark:hover:text-tech-accent/40 transition-colors duration-300" />
      </div>
      <div 
        className="absolute animate-float animation-delay-1000 transition-all duration-1000"
        style={{
          right: `${15 + mousePosition.x * 0.03}%`,
          top: `${25 + mousePosition.y * 0.02}%`,
        }}
      >
        <Bot className="w-10 h-10 text-tech-blue/15 dark:text-tech-accent/15 hover:text-tech-blue/30 dark:hover:text-tech-accent/30 transition-colors duration-300" />
      </div>
      <div 
        className="absolute animate-float animation-delay-500 transition-all duration-1000"
        style={{
          left: `${20 + mousePosition.x * 0.04}%`,
          bottom: `${30 + mousePosition.y * 0.02}%`,
        }}
      >
        <BrainCircuit className="w-12 h-12 text-tech-blue/20 dark:text-tech-accent/20 hover:text-tech-blue/40 dark:hover:text-tech-accent/40 transition-colors duration-300" />
      </div>
      <div 
        className="absolute animate-float animation-delay-1500 transition-all duration-1000"
        style={{
          left: `${5 + mousePosition.x * 0.02}%`,
          top: `${45 + mousePosition.y * 0.03}%`,
        }}
      >
        <Zap className="w-6 h-6 text-tech-blue/25 dark:text-tech-accent/25 hover:text-tech-blue/50 dark:hover:text-tech-accent/50 transition-colors duration-300" />
      </div>
      <div 
        className="absolute animate-float animation-delay-800 transition-all duration-1000"
        style={{
          right: `${10 + mousePosition.x * 0.03}%`,
          bottom: `${20 + mousePosition.y * 0.02}%`,
        }}
      >
        <Settings className="w-8 h-8 text-tech-blue/20 dark:text-tech-accent/20 animate-rotate hover:text-tech-blue/40 dark:hover:text-tech-accent/40 transition-colors duration-300" />
      </div>
      <div 
        className="absolute animate-float animation-delay-1200 transition-all duration-1000"
        style={{
          right: `${25 + mousePosition.x * 0.02}%`,
          top: `${60 + mousePosition.y * 0.02}%`,
        }}
      >
        <Atom className="w-10 h-10 text-tech-blue/15 dark:text-tech-accent/15 hover:text-tech-blue/30 dark:hover:text-tech-accent/30 transition-colors duration-300" />
      </div>

      {/* New sparkle effects */}
      <div 
        className="absolute animate-float animation-delay-300 transition-all duration-1200"
        style={{
          left: `${40 + mousePosition.x * 0.05}%`,
          top: `${10 + mousePosition.y * 0.04}%`,
        }}
      >
        <Sparkles className="w-6 h-6 text-tech-blue/20 dark:text-tech-accent/20 animate-pulse" />
      </div>
      <div 
        className="absolute animate-float animation-delay-700 transition-all duration-1000"
        style={{
          right: `${40 + mousePosition.x * 0.03}%`,
          bottom: `${40 + mousePosition.y * 0.03}%`,
        }}
      >
        <Orbit className="w-8 h-8 text-tech-blue/18 dark:text-tech-accent/18 animate-rotate" />
      </div>
      
      {/* Animated lines that react to mouse */}
      <div 
        className="absolute h-0.5 bg-gradient-to-r from-transparent via-tech-blue/30 to-transparent animate-pulse transition-all duration-1000"
        style={{
          left: 0,
          top: `${25 + mousePosition.y * 0.1}%`,
          width: `${30 + mousePosition.x * 0.2}%`,
        }}
      ></div>
      <div 
        className="absolute h-0.5 bg-gradient-to-l from-transparent via-tech-accent/30 to-transparent animate-pulse animation-delay-1000 transition-all duration-1000"
        style={{
          right: 0,
          bottom: `${30 + mousePosition.y * 0.08}%`,
          width: `${25 + mousePosition.x * 0.15}%`,
        }}
      ></div>
      <div 
        className="absolute w-0.5 bg-gradient-to-b from-transparent via-tech-blue/20 to-transparent animate-pulse animation-delay-500 transition-all duration-1000"
        style={{
          left: `${25 + mousePosition.x * 0.1}%`,
          top: `${20}%`,
          height: `${30 + mousePosition.y * 0.2}%`,
        }}
      ></div>

      {/* Interactive circuit patterns */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div 
          className="absolute w-16 h-16 border border-tech-blue animate-pulse transition-all duration-500 hover:scale-110"
          style={{
            left: `${30 + mousePosition.x * 0.05}%`,
            top: `${25 + mousePosition.y * 0.03}%`,
          }}
        >
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-tech-blue rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
        <div 
          className="absolute w-20 h-20 border border-tech-accent animate-pulse animation-delay-1000 transition-all duration-500 hover:scale-110"
          style={{
            right: `${25 + mousePosition.x * 0.04}%`,
            bottom: `${35 + mousePosition.y * 0.04}%`,
          }}
        >
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-tech-accent rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-tech-blue/20 dark:bg-tech-accent/20 animate-float transition-all duration-1000"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 300}ms`,
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
