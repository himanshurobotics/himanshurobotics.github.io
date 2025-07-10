
import React from 'react';
import { Cpu, Bot, BrainCircuit, Zap, Settings, Atom } from 'lucide-react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-tech-blue/10 to-tech-accent/10 rounded-full blur-3xl animate-pulse-slow animation-delay-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-tech-accent/8 to-tech-blue/8 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-tech-blue/5 rounded-full blur-2xl animate-pulse-slow animation-delay-500"></div>
      
      {/* Floating tech icons */}
      <div className="absolute top-20 left-[10%] animate-float animation-delay-0">
        <Cpu className="w-8 h-8 text-tech-blue/20 dark:text-tech-accent/20" />
      </div>
      <div className="absolute top-1/3 right-[15%] animate-float animation-delay-1000">
        <Bot className="w-10 h-10 text-tech-blue/15 dark:text-tech-accent/15" />
      </div>
      <div className="absolute bottom-1/3 left-[20%] animate-float animation-delay-500">
        <BrainCircuit className="w-12 h-12 text-tech-blue/20 dark:text-tech-accent/20" />
      </div>
      <div className="absolute top-1/2 left-[5%] animate-float animation-delay-1500">
        <Zap className="w-6 h-6 text-tech-blue/25 dark:text-tech-accent/25" />
      </div>
      <div className="absolute bottom-1/4 right-[10%] animate-float animation-delay-800">
        <Settings className="w-8 h-8 text-tech-blue/20 dark:text-tech-accent/20 animate-rotate" />
      </div>
      <div className="absolute top-2/3 right-[25%] animate-float animation-delay-1200">
        <Atom className="w-10 h-10 text-tech-blue/15 dark:text-tech-accent/15" />
      </div>
      
      {/* Animated lines */}
      <div className="absolute top-1/4 left-0 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-tech-blue/30 to-transparent animate-pulse"></div>
      <div className="absolute bottom-1/3 right-0 w-1/4 h-0.5 bg-gradient-to-l from-transparent via-tech-accent/30 to-transparent animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-0.5 h-1/4 bg-gradient-to-b from-transparent via-tech-blue/20 to-transparent animate-pulse animation-delay-500"></div>
      
      {/* Circuit patterns */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-1/4 left-1/3 w-16 h-16 border border-tech-blue animate-pulse">
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-tech-blue rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-tech-accent animate-pulse animation-delay-1000">
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-tech-accent rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
