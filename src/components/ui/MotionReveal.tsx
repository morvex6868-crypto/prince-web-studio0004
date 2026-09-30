import React from 'react';
import { motion } from 'motion/react';

interface MotionRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  className?: string;
  viewportMargin?: string;
}

export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  distance = 24,
  duration = 0.6,
  className = '',
  viewportMargin = '-60px',
}) => {
  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth settling curve (Apple/Stripe style)
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
