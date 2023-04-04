import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from './Icons';
import Logo from './Logo';
import { motion } from 'framer-motion';
import useTheme from './hooks/useTheme';
import { useState } from 'react';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group `}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 bottom-0.5
      group-hover:w-full transition-[width]  ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default function NavBar() {
  const [mode, setMode] = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-10 font-medium flex items-center justify-between dark:text-light">
      <button
        onClick={handleClick}
        className="flex-col justify-center items-center hidden lg:flex "
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5  w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5  w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5  w-6 rounded-sm translate-y-0.5 ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          } `}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mx-3" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>
        <nav className="flex  items-center justify-center flex-wrap ">
          <motion.a
            href="/contact"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <TwitterIcon />
          </motion.a>

          <motion.a
            href="/contact"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>

          <motion.a
            href="/contact"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>

          <motion.a
            href="/contact"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <DribbbleIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`ml-3  flex items-center 
          justify-center rounded-full p-1 ${
            mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
          }`}
          >
            {mode === 'dark' ? (
              <SunIcon className={'fill-dark'} />
            ) : (
              <MoonIcon className={'fill-dark'} />
            )}
          </button>
        </nav>
      </div>
      <div
        className="m-w-[70vw] flex flex-col z-30 justify-center items-center fixed top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
      >
        <nav className="flex flex-col items-center justify-center ">
          <CustomLink href="/" title="Home" className="mx-3" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>
        <nav className="flex  items-center justify-center flex-wrap ">
          <motion.a
            href="/contact"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <TwitterIcon />
          </motion.a>

          <motion.a
            href="/contact"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>

          <motion.a
            href="/contact"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>

          <motion.a
            href="/contact"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <DribbbleIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`ml-3  flex items-center 
          justify-center rounded-full p-1 ${
            mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
          }`}
          >
            {mode === 'dark' ? (
              <SunIcon className={'fill-dark'} />
            ) : (
              <MoonIcon className={'fill-dark'} />
            )}
          </button>
        </nav>
      </div>
      <div className="absolute left-[53%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
