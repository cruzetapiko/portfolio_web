import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

export default function Logo() {
  return (
    <div className="flex items-center justify-between mt-2 mr-28">
      <MotionLink
        href="/"
        className="bg-dark w-20 h-20 text-light flex items-center 
        justify-center rounded-full text-2xl font-bold 
        border border-solid border-transparent dark:border-light"
        whileHover={{
          backgroundColor: [
            '#121212',
            'rgba(131,58,180,1)',
            'rgba(253,29,29,1)',
            'rgba(252,176,69,1)',
            'rgba(131,58,180,1)',
            '#121212',
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        Josias{' '}
      </MotionLink>
    </div>
  );
}
