
import React, { useState, useEffect } from 'react';
import { Cpu, Bot, BrainCircuit, Zap, Settings, Atom, Sparkles, Orbit, Circuit, Wifi, Database } from 'lucide-react';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isMouseActive, setIsMouseActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
      setIsMouseActive(true);
      
      // Reset mouse activity after 2 seconds
      const timeout = setTimeout(() => setIsMouseActive(false), 2000);
      return () => clearTimeout(timeout);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic gradient orbs that follow mouse */}
      <div 
        className="absolute bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse-slow transition-all duration-[3000ms] ease-out"
        style={{
          width: isMouseActive ? '500px' : '400px',
          height: isMouseActive ? '500px' : '400px',
          left: `${15 + mousePosition.x * 0.15}%`,
          top: `${15 + mousePosition.y * 0.15}%`,
        }}
      />
      <div 
        className="absolute bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse-slow transition-all duration-[2500ms] ease-out"
        style={{
          width: isMouseActive ? '450px' : '350px',
          height: isMouseActive ? '450px' : '350px',
          right: `${15 + mousePosition.x * 0.08}%`,
          bottom: `${15 + mousePosition.y * 0.12}%`,
          animationDelay: '1000ms'
        }}
      />
      <div 
        className="absolute bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse-slow transition-all duration-[2000ms] ease-out"
        style={{
          width: isMouseActive ? '350px' : '280px',
          height: isMouseActive ? '350px' : '280px',
          right: `${25 + mousePosition.x * 0.1}%`,
          top: `${35 + mousePosition.y * 0.08}%`,
          animationDelay: '500ms'
        }}
      />
      
      {/* Interactive floating tech icons with enhanced movement */}
      <div 
        className="absolute animate-float transition-all duration-1200 hover:scale-125"
        style={{
          left: `${8 + mousePosition.x * 0.03}%`,
          top: `${12 + mousePosition.y * 0.04}%`,
          transform: `rotate(${mousePosition.x * 0.1}deg)`,
          animationDelay: '0ms'
        }}
      >
        <Cpu className="w-10 h-10 text-blue-500/30 hover:text-blue-500/60 transition-all duration-300 drop-shadow-lg" />
      </div>
      <div 
        className="absolute animate-float transition-all duration-1200 hover:scale-125"
        style={{
          right: `${12 + mousePosition.x * 0.04}%`,
          top: `${20 + mousePosition.y * 0.03}%`,
          transform: `rotate(${-mousePosition.x * 0.08}deg)`,
          animationDelay: '800ms'
        }}
      >
        <Bot className="w-12 h-12 text-cyan-500/25 hover:text-cyan-500/50 transition-all duration-300 drop-shadow-lg" />
      </div>
      <div 
        className="absolute animate-float transition-all duration-1200 hover:scale-125"
        style={{
          left: `${18 + mousePosition.x * 0.05}%`,
          bottom: `${25 + mousePosition.y * 0.03}%`,
          transform: `rotate(${mousePosition.y * 0.1}deg)`,
          animationDelay: '400ms'
        }}
      >
        <BrainCircuit className="w-14 h-14 text-blue-500/25 hover:text-blue-500/50 transition-all duration-300 drop-shadow-lg" />
      </div>
      <div 
        className="absolute animate-float transition-all duration-1200 hover:scale-125"
        style={{
          left: `${3 + mousePosition.x * 0.025}%`,
          top: `${40 + mousePosition.y * 0.04}%`,
          transform: `rotate(${mousePosition.x * 0.12}deg)`,
          animationDelay: '1200ms'
        }}
      >
        <Zap className="w-8 h-8 text-yellow-500/35 hover:text-yellow-500/60 transition-all duration-300 drop-shadow-lg" />
      </div>
      <div 
        className="absolute animate-float transition-all duration-1200 hover:scale-125"
        style={{
          right: `${8 + mousePosition.x * 0.04}%`,
          bottom: `${15 + mousePosition.y * 0.025}%`,
          transform: `rotate(${Date.now() * 0.001}rad)`,
          animationDelay: '600ms'
        }}
      >
        <Settings className="w-10 h-10 text-gray-500/30 hover:text-gray-500/60 transition-all duration-300 animate-spin-slow drop-shadow-lg" />
      </div>
      <div 
        className="absolute animate-float transition-all duration-1200 hover:scale-125"
        style={{
          right: `${20 + mousePosition.x * 0.03}%`,
          top: `${55 + mousePosition.y * 0.025}%`,
          transform: `rotate(${-mousePosition.y * 0.08}deg)`,
          animationDelay: '1000ms'
        }}
      >
        <Atom className="w-12 h-12 text-purple-500/20 hover:text-purple-500/40 transition-all duration-300 drop-shadow-lg" />
      </div>

      {/* Additional dynamic elements */}
      <div 
        className="absolute animate-float transition-all duration-1500"
        style={{
          left: `${35 + mousePosition.x * 0.06}%`,
          top: `${8 + mousePosition.y * 0.05}%`,
          transform: `scale(${1 + mousePosition.x * 0.002})`,
          animationDelay: '200ms'
        }}
      >
        <Sparkles className="w-7 h-7 text-cyan-500/25 animate-pulse drop-shadow-lg" />
      </div>
      <div 
        className="absolute animate-float transition-all duration-1500"
        style={{
          right: `${35 + mousePosition.x * 0.04}%`,
          bottom: `${35 + mousePosition.y * 0.04}%`,
          transform: `rotate(${Date.now() * 0.0005}rad) scale(${1 + mousePosition.y * 0.002})`,
          animationDelay: '600ms'
        }}
      >
        <Orbit className="w-9 h-9 text-blue-500/20 drop-shadow-lg" />
      </div>
      <div 
        className="absolute animate-float transition-all duration-1500"
        style={{
          left: `${60 + mousePosition.x * 0.03}%`,
          top: `${70 + mousePosition.y * 0.03}%`,
          animationDelay: '1400ms'
        }}
      >
        <Database className="w-8 h-8 text-green-500/25 hover:text-green-500/50 transition-all duration-300 drop-shadow-lg" />
      </div>
      <div 
        className="absolute animate-float transition-all duration-1500"
        style={{
          right: `${50 + mousePosition.x * 0.04}%`,
          top: `${30 + mousePosition.y * 0.03}%`,
          animationDelay: '1800ms'
        }}
      >
        <Wifi className="w-9 h-9 text-indigo-500/25 hover:text-indigo-500/50 transition-all duration-300 drop-shadow-lg" />
      </div>
      
      {/* Dynamic animated lines that react to mouse */}
      <div 
        className="absolute bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-pulse transition-all duration-1500"
        style={{
          left: 0,
          top: `${20 + mousePosition.y * 0.15}%`,
          width: `${25 + mousePosition.x * 0.3}%`,
          height: '2px',
        }}
      />
      <div 
        className="absolute bg-gradient-to-l from-transparent via-cyan-500/40 to-transparent animate-pulse transition-all duration-1500"
        style={{
          right: 0,
          bottom: `${25 + mousePosition.y * 0.12}%`,
          width: `${20 + mousePosition.x * 0.25}%`,
          height: '2px',
          animationDelay: '800ms'
        }}
      />
      <div 
        className="absolute bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-pulse transition-all duration-1500"
        style={{
          left: `${20 + mousePosition.x * 0.15}%`,
          top: '15%',
          height: `${25 + mousePosition.y * 0.3}%`,
          width: '2px',
          animationDelay: '400ms'
        }}
      />

      {/* Interactive circuit patterns */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute border border-blue-500/50 animate-pulse transition-all duration-700 hover:scale-110 hover:border-blue-500/80"
          style={{
            left: `${25 + mousePosition.x * 0.08}%`,
            top: `${20 + mousePosition.y * 0.05}%`,
            width: `${60 + mousePosition.x * 0.1}px`,
            height: `${60 + mousePosition.x * 0.1}px`,
          }}
        >
          <div 
            className="absolute top-1/2 left-1/2 rounded-full bg-blue-500/60 animate-pulse transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '8px',
              height: '8px',
            }}
          />
        </div>
        <div 
          className="absolute border border-cyan-500/50 animate-pulse transition-all duration-700 hover:scale-110 hover:border-cyan-500/80"
          style={{
            right: `${20 + mousePosition.x * 0.06}%`,
            bottom: `${30 + mousePosition.y * 0.06}%`,
            width: `${80 + mousePosition.y * 0.1}px`,
            height: `${80 + mousePosition.y * 0.1}px`,
            animationDelay: '1000ms'
          }}
        >
          <div 
            className="absolute top-1/2 left-1/2 rounded-full bg-cyan-500/60 animate-pulse transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '8px',
              height: '8px',
            }}
          />
        </div>
      </div>

      {/* Enhanced floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-500/20 animate-float transition-all duration-1500"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            animationDelay: `${i * 200}ms`,
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) scale(${1 + Math.sin(Date.now() * 0.001 + i) * 0.3})`,
            opacity: 0.3 + Math.sin(Date.now() * 0.002 + i) * 0.2,
            boxShadow: '0 0 6px currentColor'
          }}
        />
      ))}

      {/* Pulsing grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 118, 168, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 118, 168, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: 'transform 1s ease-out'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
