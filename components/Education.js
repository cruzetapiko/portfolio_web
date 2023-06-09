import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

export const Details = ({ time, type, place, info }) => {
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
        <h3 className="capitalize font-bold text-2xl">{type}&nbsp;</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 ">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

export default function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <>
      <div className="my-64">
        <h1 className="font-bold text-8xl w-full mb-32  text-center">
          Education
        </h1>
        <div ref={ref} className="w-[75%] mx-auto relative ">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark"
          />

          <ul className="w-full flex flex-col items-start justify-between ml-4 ">
            <Details
              type="Bachelor Of Science In Computer Science"
              time="2016-2020"
              place="Massachusetts Institute Of Technology (MIT)"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
              Intelligence."
            />
            <Details
              type="Bachelor Of Science In Computer Science"
              time="2016-2020"
              place="Massachusetts Institute Of Technology (MIT)"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
              Intelligence."
            />
            <Details
              type="Bachelor Of Science In Computer Science"
              time="2016-2020"
              place="Massachusetts Institute Of Technology (MIT)"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
              Intelligence."
            />
          </ul>
        </div>
      </div>
    </>
  );
}
