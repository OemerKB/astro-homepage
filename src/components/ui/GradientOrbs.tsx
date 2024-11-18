import React from 'react';
import { motion } from 'framer-motion';

const GradientOrbs: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="relative w-full h-full">
        {/* Purple Orb */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/30 blur-[100px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: '10%',
            top: '20%',
          }}
        />

        {/* Red Orb */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-red-500/20 blur-[100px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          style={{
            right: '20%',
            top: '10%',
          }}
        />

        {/* Blue Orb */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/30 blur-[100px]"
          animate={{
            x: [0, 75, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{
            left: '30%',
            bottom: '20%',
          }}
        />

        {/* Overlay to soften the effect */}
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </div>
    </div>
  );
};

export default GradientOrbs;
