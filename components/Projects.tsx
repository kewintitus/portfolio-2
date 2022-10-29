import Image from 'next/image';
import React from 'react';

import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3];
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="h-screen relative flex 
    overflow-hidden 
    flex-col items-center justify-evenly mx-auto z-0"
    >
      <h3
        className="absolute z-10 top-24 uppercase 
        tracking-[5px] md:tracking-[15px]
        text-gray-500 
        text-xl"
      >
        Projects
      </h3>

      <div
        className="relative w-full 
        flex overflow-x-scroll gap-10
      overflow-y-hidden snap-x snap-mandatory z-20 px-7 scrollbar-thin scrollbar-track-gray-700/20 scrollbar-thumb-red-700"
      >
        {projects.map((project) => (
          <div className="flex flex-col w-screen relative items-center justify-center p-32 md:p-44">
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:w-[700px] md:h-[384px] w-[280px] h-auto snap-center flex items-center justify-center"
            >
              <Image
                src="/../public/res/Project-imgs/Gmail-clone.png"
                width="480px"
                height="454px"
                // blurDataURL="data:..."
                // layout="fill"
                objectPosition="50% 50%"
                objectFit="contain"
                // placeholder="blur"
                className="inline-block"
              />
            </motion.div>
            <div className="text-xl font-semibold text-center px-8 space-y-3 w-[400px] md:w-[600px] xl:w-[800px] ">
              <h4 className="underline decoration-red-600">Gmail Clone</h4>
              <p className="text-lg font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis necessitatibus eos id deleniti fugit dolorem quo
                animi in adipisci! Aut quos esse atque impedit nostrum autem
                suscipit culpa tenetur officiis?
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] h-[40%] bg-red-800 opacity-20 -skew-y-6 z-10"></div>
    </motion.div>
  );
}

export default Projects;
