import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

export const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            className="text-primary capitalize dark:text-primaryDark"
            target="_blank"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 ">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],

  });

  return (
    <>
      <div className="my-64">
        <h1 className="font-bold text-8xl w-full mb-32  text-center">
          Experience
        </h1>
        <div ref={ref} className="w-[75%] mx-auto relative ">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark "
          />

          <ul className="w-full flex flex-col items-start justify-between ml-4 ">
            <Details
              position="Software Engineer"
              company="Google"
              companyLink="https://www.google.com/"
              time="2022-Present"
              address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
            />
            <Details
              position="Software Engineer"
              company="Google"
              companyLink="https://www.google.com/"
              time="2022-Present"
              address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
            />
            <Details
              position="Software Engineer"
              company="Google"
              companyLink="https://www.google.com/"
              time="2022-Present"
              address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
            />
            <Details
              position="Software Engineer"
              company="Google"
              companyLink="https://www.google.com/"
              time="2022-Present"
              address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
            />
            <Details
              position="Software Engineer"
              company="Google"
              companyLink="https://www.google.com/"
              time="2022-Present"
              address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
            />
          </ul>
        </div>
      </div>
    </>
  );
}
