import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = ({ position = 'top' }) => {
  const waveSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="none" stroke="#abcdb3" stroke-width="1" d="M0,160 C240,100 480,220 720,160 S1200,100 1440,160"></path>
      <path fill="none" stroke="#abcdb3" stroke-width="1.5" d="M0,192 C288,240 576,120 864,192 S1152,240 1440,160" opacity="0.5"></path>
    </svg>
  `;

  const waveDataUrl = `data:image/svg+xml;base64,${btoa(waveSVG)}`;

  const positionClasses = position === 'top' 
    ? 'top-0 left-0' 
    : 'bottom-0 left-0 transform scale-y-[-1]';

  return (
    <motion.div
      className={`absolute w-full h-[320px] opacity-20 pointer-events-none ${positionClasses}`}
      style={{
        backgroundImage: `url("${waveDataUrl}")`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: '1440px 320px',
      }}
      animate={{
        backgroundPosition: ['0px 0px', '1440px 0px'],
      }}
      transition={{
        duration: 40,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      }}
    />
  );
};

export default HeroBackground;