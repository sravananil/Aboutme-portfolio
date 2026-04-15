import { motion } from 'motion/react';

interface ConfettiProps {
  isActive: boolean;
}

export function Confetti({ isActive }: ConfettiProps) {
  if (!isActive) return null;

  const confettiColors = [
    '#3b82f6', // blue
    '#8b5cf6', // purple
    '#ec4899', // pink
    '#f59e0b', // amber
    '#10b981', // green
    '#06b6d4', // cyan
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
            left: '50%',
            top: '50%',
          }}
          initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
          animate={{
            scale: [0, 1, 1, 0],
            x: (Math.random() - 0.5) * 300,
            y: Math.random() * -200 + 50,
            rotate: Math.random() * 360,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.02,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}
