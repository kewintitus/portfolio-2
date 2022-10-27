import React from 'react';

type Props = {};

function Projects({}: Props) {
  return (
    <div
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
      <div className="w-full absolute top-[30%] h-[40%] bg-red-800 opacity-20 -skew-y-6 z-10"></div>
    </div>
  );
}

export default Projects;
