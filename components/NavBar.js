import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { DribbbleIcon, GithubIcon, LinkedInIcon, TwitterIcon } from './Icons';
import Logo from './Logo';
import { motion } from 'framer-motion';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group `}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 bottom-0.5
      group-hover:w-full transition-[width]  ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default function NavBar() {
  return (
    <header className="w-full px-32 pt-4 font-medium flex items-center justify-between">
      <Logo />
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
      </nav>
    </header>
  );
}
