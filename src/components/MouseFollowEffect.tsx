
import React, { useState, useEffect, useRef } from 'react';

const MouseFollowEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

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

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main cursor glow */}
      <div
        className="absolute w-64 h-64 rounded-full transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          background: `radial-gradient(circle, rgba(14, 118, 168, ${isMouseMoving ? '0.1' : '0.05'}) 0%, rgba(14, 118, 168, 0.01) 50%, transparent 100%)`,
          transform: `scale(${isMouseMoving ? 1.2 : 1})`,
        }}
      />
      
      {/* Secondary ripple effect */}
      <div
        className="absolute w-32 h-32 rounded-full transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
          background: `radial-gradient(circle, rgba(0, 188, 212, ${isMouseMoving ? '0.08' : '0.03'}) 0%, transparent 70%)`,
          transform: `scale(${isMouseMoving ? 1 : 0.8})`,
        }}
      />
      
      {/* Floating particles that follow mouse */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-tech-blue/20 dark:bg-tech-accent/20 transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x + Math.sin(Date.now() * 0.001 + i) * 50,
            top: mousePosition.y + Math.cos(Date.now() * 0.001 + i) * 50,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default MouseFollowEffect;
