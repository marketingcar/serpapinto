import React from 'react';
import { cn } from '@/lib/utils';

const Wave = ({ className, waveClassName }) => {
  return (
    <div className={cn('absolute inset-0 w-full h-full overflow-hidden pointer-events-none', className)}>
      <svg
        className={cn('absolute left-0 w-[200%] h-full animate-flow', waveClassName)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="none"
          stroke="#abcdb3"
          strokeWidth="1"
          d="M0,160 C240,100 480,220 720,160 S1200,100 1440,160 L2880,160"
        ></path>
        <path
          fill="none"
          stroke="#abcdb3"
          strokeWidth="1.5"
          d="M0,192 C288,240 576,120 864,192 S1152,240 1440,160 L2880,160"
          opacity="0.5"
        ></path>
      </svg>
    </div>
  );
};

export default Wave;