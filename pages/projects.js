import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import project2 from '@/public/images/projects/crypto-screener-cover-image.jpg';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between
    rounded-3xl border border-solid  border-dark dark:border-light 
    bg-light shadow-2xl p-8 relative dark:bg-dark
    lg:flex-col lg:p-8 xs:radius-xl xs:rounded-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
      rounded-[2rem] bg-dark dark:bg-light 
      xs:-right-2 xs: xs:h-[102%] xs:w-full "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg dark:text-light "
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-105 transition duration-300 ease-in-out"
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-center pl-6 dark:text-light lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full text-4xl my-2 text-left font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 text-dark font-medium dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="flex items-center bg-dark text-light text-lg font-semibold p-1 ml-4 px-6 rounded-lg
                      border-2 border-solid border-transparent hover:border-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-between
    rounded-3xl border border-solid  border-dark dark:border-light bg-light 
    dark:bg-dark shadow-2xl p-4 relative xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] 
      bg-dark dark:bg-light xs:-right-2 xs: xs:h-[102%] xs:w-full "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full flex cursor-pointer overflow-hidden rounded-lg "
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-105 transition duration-300 ease-in-out"
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-center mt-4 dark:text-light">
        <span
          className="text-primary dark:text-primaryDark font-medium text-xl
        lg:text-lg md:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full text-3xl my-2 text-left font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-dark text-lg font-semibold underline underline-offset-2 dark:text-light
            md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Cruzetapiko | Projects </title>
        <meta name="description" content="About page content description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-between ">
        <Layout className="pt-16">
          <AnimatedText
            text={'Imagination Trumps Knowledge!'}
            className="mb-16 sm:mb-8 xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-5xl xs:text-3xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            <div className="col-span-12 flex flex-col items-center justify-between">
              <FeaturedProject
                type={'Featured Project'}
                title="Crypto Screener Application"
                img={project2}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 flex">
              <Project
                type={'Featured Project'}
                title="Crypto Screener Application"
                img={project2}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 flex">
              <Project
                type={'Featured Project'}
                title="Crypto Screener Application"
                img={project2}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-12 flex flex-col items-center justify-between">
              <FeaturedProject
                type={'Featured Project'}
                title="Crypto Screener Application"
                img={project2}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 flex">
              <Project
                type={'Featured Project'}
                title="Crypto Screener Application"
                img={project2}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 flex">
              <Project
                type={'Featured Project'}
                title="Crypto Screener Application"
                img={project2}
                link="/"
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
