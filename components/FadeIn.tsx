'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }: { children: ReactNode, delay?: number, direction?: 'up' | 'down' | 'left' | 'right', className?: string }) {
  const directions = {
    up: { y: 40, x: 0 }, down: { y: -40, x: 0 },
    left: { x: 40, y: 0 }, right: { x: -40, y: 0 },
  };
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, type: 'spring', bounce: 0 }}
    >
      {children}
    </motion.div>
  );
}