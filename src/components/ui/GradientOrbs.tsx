import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Props {
  scale?: number;
  speed?: number;
  variant?: 'all' | 'top' | 'bottom';
}

const GradientOrbs = ({ scale = 1, speed = 1, variant = 'all' }: Props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.05,
        y: (e.clientY - window.innerHeight / 2) * 0.05,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const orbs = [
    {
      colors: ['rgba(59, 130, 246, 0.8)', 'rgba(59, 130, 246, 0.4)', 'transparent'],
      size: 'w-[500px] h-[500px]',
      position: 'left-1/4 top-1/4',
      animation: {
        x: [0, 50, 0],
        y: [0, -30, 0],
      },
    },
    {
      colors: ['rgba(217, 70, 239, 0.8)', 'rgba(217, 70, 239, 0.4)', 'transparent'],
      size: 'w-[450px] h-[450px]',
      position: 'right-1/4 top-1/3',
      animation: {
        x: [0, -50, 0],
        y: [0, 50, 0],
      },
    },
    {
      colors: ['rgba(139, 92, 246, 0.8)', 'rgba(139, 92, 246, 0.4)', 'transparent'],
      size: 'w-[400px] h-[400px]',
      position: 'left-1/3 bottom-1/4',
      animation: {
        x: [0, 40, 0],
        y: [0, 40, 0],
      },
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-80">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.size} ${orb.position} rounded-full mix-blend-screen dark:mix-blend-soft-light`}
          animate={{
            x: [
              orb.animation.x[0],
              orb.animation.x[1] * scale + mousePosition.x,
              orb.animation.x[2],
            ],
            y: [
              orb.animation.y[0],
              orb.animation.y[1] * scale + mousePosition.y,
              orb.animation.y[2],
            ],
          }}
          transition={{
            duration: 8 / speed,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: `radial-gradient(circle at center, 
              ${orb.colors[0]} 0%, 
              ${orb.colors[1]} 45%, 
              ${orb.colors[2]} 70%
            )`,
            filter: 'blur(20px)',
          }}
        />
      ))}
    </div>
  );
};

export default GradientOrbs;
