import Link from 'next/link';
import React from 'react';
import { CircularText } from './Icons';

export default function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relativ">
        <CircularText
          className={'fill-dark animate-spin-slow dark:fill-light'}
        />
        <Link
          href="mailto:simonetvia@outlook.com"
          className="flex items-center justify-center absolute bg-dark text-light w-20 h-20 rounded-full 
           font-semibold left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          shadow-md border border-solid border-dark
          hover:bg-light hover:text-dark 
          dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}
