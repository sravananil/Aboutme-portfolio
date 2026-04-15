import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function MagneticCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          borderColor: isHovering ? '#a855f7' : '#3b82f6',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Cursor Trail */}
      <motion.div
        className="fixed w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-[9998]"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      />
    </>
  );
}
