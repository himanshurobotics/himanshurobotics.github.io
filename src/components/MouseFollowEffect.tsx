
import React, { useState, useEffect, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

const MouseFollowEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const clickTimeoutRef = useRef<NodeJS.Timeout>();
  const particleIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMouseMoving(true);
      
      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Set mouse as not moving after 100ms
      timeoutRef.current = setTimeout(() => {
        setIsMouseMoving(false);
      }, 100);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      
      // Create click particles
      const newParticles: Particle[] = [];
      for (let i = 0; i < 6; i++) {
        newParticles.push({
          id: particleIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          life: 60,
          maxLife: 60
        });
      }
      
      setParticles(prev => [...prev, ...newParticles]);
      
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
      
      clickTimeoutRef.current = setTimeout(() => {
        setIsClicking(false);
      }, 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          life: particle.life - 1
        })).filter(particle => particle.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main cursor glow */}
      <div
        className="absolute w-64 h-64 rounded-full transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          background: `radial-gradient(circle, rgba(14, 118, 168, ${isMouseMoving ? (isClicking ? '0.2' : '0.1') : '0.05'}) 0%, rgba(14, 118, 168, 0.01) 50%, transparent 100%)`,
          transform: `scale(${isClicking ? 1.5 : isMouseMoving ? 1.2 : 1})`,
        }}
      />
      
      {/* Secondary ripple effect */}
      <div
        className="absolute w-32 h-32 rounded-full transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
          background: `radial-gradient(circle, rgba(0, 188, 212, ${isMouseMoving ? (isClicking ? '0.15' : '0.08') : '0.03'}) 0%, transparent 70%)`,
          transform: `scale(${isClicking ? 0.8 : isMouseMoving ? 1 : 0.8})`,
        }}
      />
      
      {/* Click ripple effect */}
      {isClicking && (
        <div
          className="absolute w-40 h-40 rounded-full border-2 border-tech-blue/30 dark:border-tech-accent/30 animate-ping"
          style={{
            left: mousePosition.x - 80,
            top: mousePosition.y - 80,
          }}
        />
      )}
      
      {/* Floating particles that follow mouse */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-tech-blue/30 dark:bg-tech-accent/30 transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x + Math.sin(Date.now() * 0.002 + i) * (60 + i * 10),
            top: mousePosition.y + Math.cos(Date.now() * 0.002 + i) * (60 + i * 10),
            animationDelay: `${i * 0.2}s`,
            opacity: isMouseMoving ? 0.8 : 0.3,
          }}
        />
      ))}

      {/* Click particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full bg-tech-blue dark:bg-tech-accent"
          style={{
            left: particle.x - 4,
            top: particle.y - 4,
            opacity: particle.life / particle.maxLife,
            transform: `scale(${particle.life / particle.maxLife})`,
          }}
        />
      ))}

      {/* Trailing dots */}
      <div
        className="absolute w-3 h-3 rounded-full bg-tech-blue/20 dark:bg-tech-accent/20 transition-all duration-200"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          transform: `scale(${isMouseMoving ? 1 : 0.5})`,
        }}
      />
    </div>
  );
};

export default MouseFollowEffect;
