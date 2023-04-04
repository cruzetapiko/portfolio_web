import React, { useRef } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import article from '@/public/images/articles/create loading screen in react js.jpg';
import article2 from '@/public/images/articles/What is higher order component in react.jpg';
import { motion, useMotionValue } from 'framer-motion';

const FrameImage = motion(Image);

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imageRef = useRef(null);

  function handleMouseMove(event) {
    imageRef.current.style.display = 'inline-block';
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseMoveLeave(event) {
    imageRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseMoveLeave}
    >
      <h2 className="capitalize font-semibold text-xl hover:underline ">
        {title}
      </h2>
      <FrameImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imageRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};

const FeaturedArticles = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl border-r-4 border-b-4 ">
      <Link
        href={link}
        target="_blank"
        className="w-full flex cursor-pointer overflow-hidden rounded-lg "
      >
        <FrameImage
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-105 transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1 }}
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="my-2 mt-4 capitalize font-bold text-2xl hover:underline dark:text-light">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 dark:text-light">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}
      </span>
    </li>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      className="w-full flex items-center justify-between relative p-4 py-6 my-4 
    rounded-xl bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light
    border-r-4 border-b-4"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
    >
      <MovingImage
        title={title}
        img={img}
        link={link}
        priority
        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
      />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4">
        {date}
      </span>
    </motion.li>
  );
};

export default function articles() {
  return (
    <>
      <Head>
        <title>Cruzetapiko | Articles</title>
        <meta name="description" content="About page content description" />
      </Head>
      <main className=" w-full flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={'Words Can Change The World!'}
            className="mb-16"
          />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticles
              link="/"
              img={article}
              title="How to create a custom 404 page in Next.js"
              time="2 min read"
              summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            />
            <FeaturedArticles
              link="/"
              img={article}
              title="How to create a custom 404 page in Next.js"
              time="2 min read"
              summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            />
          </ul>
          <h2 className="w-full my-16 font-bold text-4xl text-center mt-32">
            All A rticles
          </h2>
          <ul>
            <Article
              link="/"
              title="How to create a custom 404 page in Next.js"
              date="07.07.2021"
              img={article2}
            />
            <Article
              link="/"
              title="How to create a custom 404 page in Next.js"
              date="07.07.2021"
              img={article2}
            />
            <Article
              link="/"
              title="How to create a custom 404 page in Next.js"
              date="07.07.2021"
              img={article2}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}
