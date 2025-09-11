
import React, { useState, useEffect, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

const MouseFollowEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [trailDots, setTrailDots] = useState<Array<{x: number, y: number, id: number}>>([]);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const clickTimeoutRef = useRef<NodeJS.Timeout>();
  const particleIdRef = useRef(0);
  const trailIdRef = useRef(0);
  const animationFrameRef = useRef<number>();
  const lastUpdateTime = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMousePosition(newPos);
      setIsMouseMoving(true);
      
      // Add trail dots (less frequently)
      if (Math.random() > 0.7) {
        setTrailDots(prev => {
          const newDots = [...prev, { ...newPos, id: trailIdRef.current++ }];
          return newDots.slice(-5); // Keep only last 5 dots
        });
      }
      
      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Set mouse as not moving after 150ms
      timeoutRef.current = setTimeout(() => {
        setIsMouseMoving(false);
      }, 150);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      
      // Create multiple types of click particles
      const newParticles: Particle[] = [];
      const colors = ['#0e76a8', '#00bcd4', '#2196f3', '#03a9f4'];
      
      // Main explosion particles (reduced count)
      for (let i = 0; i < 5; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const velocity = 2 + Math.random() * 3;
        newParticles.push({
          id: particleIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 60,
          maxLife: 60,
          size: 2 + Math.random() * 3,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      // Random burst particles (reduced count)
      for (let i = 0; i < 3; i++) {
        newParticles.push({
          id: particleIdRef.current++,
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 6,
          vy: (Math.random() - 0.5) * 6,
          life: 40 + Math.random() * 20,
          maxLife: 60,
          size: 1 + Math.random() * 2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      setParticles(prev => [...prev, ...newParticles]);
      
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
      
      clickTimeoutRef.current = setTimeout(() => {
        setIsClicking(false);
      }, 300);
    };

    const handleMouseUp = () => {
      // Add some sparkle particles on mouse up (reduced count)
      const sparkles: Particle[] = [];
      for (let i = 0; i < 2; i++) {
        sparkles.push({
          id: particleIdRef.current++,
          x: mousePosition.x + (Math.random() - 0.5) * 30,
          y: mousePosition.y + (Math.random() - 0.5) * 30,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 30,
          maxLife: 30,
          size: 1,
          color: '#00bcd4'
        });
      }
      setParticles(prev => [...prev, ...sparkles]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  // Animate particles with requestAnimationFrame for better performance
  useEffect(() => {
    const animate = (currentTime: number) => {
      // Throttle updates to ~30fps for better performance
      if (currentTime - lastUpdateTime.current >= 33) {
        setParticles(prev => 
          prev.map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vx: particle.vx * 0.98, // Add friction
            vy: particle.vy * 0.98 + 0.1, // Add gravity
            life: particle.life - 1
          })).filter(particle => particle.life > 0)
        );

        // Clean up old trail dots less frequently
        setTrailDots(prev => prev.slice(-4));
        lastUpdateTime.current = currentTime;
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Main cursor glow effect */}
      <div
        className="absolute rounded-full transition-all duration-200 ease-out"
        style={{
          left: mousePosition.x - 80,
          top: mousePosition.y - 80,
          width: 160,
          height: 160,
          background: `radial-gradient(circle, rgba(14, 118, 168, ${isMouseMoving ? (isClicking ? '0.3' : '0.15') : '0.08'}) 0%, rgba(14, 118, 168, 0.05) 40%, transparent 100%)`,
          transform: `scale(${isClicking ? 1.8 : isMouseMoving ? 1.3 : 1})`,
        }}
      />
      
      {/* Secondary ripple effect */}
      <div
        className="absolute rounded-full transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 40,
          top: mousePosition.y - 40,
          width: 80,
          height: 80,
          background: `radial-gradient(circle, rgba(0, 188, 212, ${isMouseMoving ? (isClicking ? '0.25' : '0.12') : '0.06'}) 0%, rgba(0, 188, 212, 0.02) 60%, transparent 100%)`,
          transform: `scale(${isClicking ? 0.6 : isMouseMoving ? 1.1 : 0.9})`,
        }}
      />
      
      {/* Click ripple effects */}
      {isClicking && (
        <>
          <div
            className="absolute rounded-full border-2 animate-ping"
            style={{
              left: mousePosition.x - 50,
              top: mousePosition.y - 50,
              width: 100,
              height: 100,
              borderColor: 'rgba(14, 118, 168, 0.4)',
              animationDuration: '0.8s'
            }}
          />
          <div
            className="absolute rounded-full border-2 animate-ping"
            style={{
              left: mousePosition.x - 30,
              top: mousePosition.y - 30,
              width: 60,
              height: 60,
              borderColor: 'rgba(0, 188, 212, 0.6)',
              animationDuration: '0.6s',
              animationDelay: '0.1s'
            }}
          />
        </>
      )}
      
      {/* Floating orbital particles (reduced count) */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x + Math.sin(Date.now() * 0.003 + i) * (40 + i * 15) - 2,
            top: mousePosition.y + Math.cos(Date.now() * 0.003 + i) * (40 + i * 15) - 2,
            width: 4,
            height: 4,
            backgroundColor: i % 2 === 0 ? 'rgba(14, 118, 168, 0.6)' : 'rgba(0, 188, 212, 0.6)',
            opacity: isMouseMoving ? 0.8 : 0.4,
            animationDelay: `${i * 0.2}s`,
            boxShadow: '0 0 6px currentColor'
          }}
        />
      ))}

      {/* Trail dots */}
      {trailDots.map((dot, index) => (
        <div
          key={dot.id}
          className="absolute rounded-full transition-all duration-500"
          style={{
            left: dot.x - 3,
            top: dot.y - 3,
            width: 6,
            height: 6,
            backgroundColor: 'rgba(14, 118, 168, 0.4)',
            opacity: (index / trailDots.length) * 0.6,
            transform: `scale(${(index / trailDots.length) * 0.8 + 0.2})`,
          }}
        />
      ))}

      {/* Click particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: (particle.life / particle.maxLife) * 0.9,
            transform: `scale(${particle.life / particle.maxLife})`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
          }}
        />
      ))}

      {/* Center dot */}
      <div
        className="absolute rounded-full transition-all duration-200"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          width: 8,
          height: 8,
          backgroundColor: isClicking ? 'rgba(0, 188, 212, 0.8)' : 'rgba(14, 118, 168, 0.6)',
          transform: `scale(${isClicking ? 1.5 : isMouseMoving ? 1.2 : 1})`,
          boxShadow: '0 0 10px currentColor'
        }}
      />
    </div>
  );
};

export default MouseFollowEffect;
