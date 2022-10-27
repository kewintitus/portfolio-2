import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=" flex flex-col text-center md:text-left md:flex-row h-screen max-w-7xl px-10 justify-evenly mx-auto items-center relative"
    >
      <h3 className="absolute z-10 top-24 uppercase tracking-[15px] text-gray-500 text-xl">
        About
      </h3>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-white rounded-full w-[200px] h-[200px] mt-14 md:mt-10 overflow-hidden relative self-center flex content-center justify-center flex-shrink-0 mb-1 md:mb-0
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
      <div className="px-3 max-w-lg">
        <h4 className="text-xl">
          Here is a <span className="underline decoration-red-500">little</span>{' '}
          background
        </h4>
        <p className="text-sm mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus
          commodi quam, maxime esse officiis laudantium provident a consequatur
          quia unde alias ratione veritatis dolores hic eaque facere blanditiis
          voluptas?
        </p>
      </div>
    </motion.div>
  );
}

export default About;
