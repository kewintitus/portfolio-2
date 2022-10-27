import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="h-screen flex relative overflow-hidden flex-col md:flex-row max-w-full p-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute z-10 top-24 uppercase tracking-[5px] md:tracking-[15px] text-gray-500 text-xl">
        Work Experience
      </h3>
      <div
        className="w-full flex mt-12 justify-center  space-x-14 xl:space-x-10 p-10 
    
       snap-x snap-mandatory "
      >
        <ExperienceCard />
        {/* <ExperienceCard /> */}
        {/* <ExperienceCard /> */}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
