import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

function About({}: Props) {
  return (
    <div className=" flex flex-col text-center md:text-left md:flex-row h-screen max-w-7xl px-10 justify-evenly mx-auto items-center relative">
      <h3 className="absolute z-10 top-24 uppercase tracking-[15px] text-gray-500 text-xl">
        About
      </h3>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-white rounded-full w-[250px] h-[250px] overflow-hidden relative self-center flex content-center justify-center flex-shrink-0 mb-1 md:mb-0
         md:rounded-lg md:w-40 md:h-60 xl:w-[250px] xl:h-[350px] "
      >
        <Image
          src="/../public/res/KewinC1.jpg"
          layout="fill"
          objectFit="cover"
          blurDataURL="data:..."
          placeholder="blur"
          className="object-cover mt-1 align-bottom"
        />
      </motion.div>
      <div>
        <h4>Here is a little background</h4>
      </div>
    </div>
  );
}

export default About;
