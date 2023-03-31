import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex place-items-center justify-center rounded-full font-semibold bg-dark 
      text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

export default function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 text-center">Skills</h2>
      <div className="flex items-center justify-center rounded-full w-full h-screen bg-circularLigth ">
        <motion.div
          className="flex place-items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <h2>Web</h2>
        </motion.div>
        <Skill name="ReactJS" x="-20vw" y="2vw" />
        <Skill name="NextJS" x="-5vw" y="-10vw" />
        <Skill name="Tailwind" x="20vw" y="6vw" />
        <Skill name="Framer Motion" x="0vw" y="12vw" />
        <Skill name="JavaScript" x="-20vw" y="-15vw" />
        <Skill name="CSS" x="15vw" y="-12vw" />
        <Skill name="HTML" x="32vw" y="-5vw" />
        <Skill name="Gatsby" x="0vw" y="-20vw" />
        <Skill name="GraphQL" x="-25vw" y="18vw" />
      </div>
    </>
  );
}
