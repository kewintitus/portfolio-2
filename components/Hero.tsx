import React from 'react';
import Image from 'next/image';

import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundCircle from './ui/BackgroundCircle';

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi I'm Kewin", 'Self-taught developer', 'Loves to <Code/>'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <div className="bg-white rounded-full overflow-hidden relative self-center float content-center justify-center  ">
        <Image
          src="/../public/res/KewinC1.jpg"
          width="80%"
          height="80%"
          quality="100"
          objectFit="cover"
          blurDataURL="data:..."
          placeholder="blur"
          className="object-cover mt-1 align-bottom"
        />
      </div>
      <div>
        <h2 className="text-sm uppercase text-gray-400 tracking-widest ">
          Frontend Developer
        </h2>
        <h1 className="text-3xl font-semibold py-0 my-0">
          <span className="">{text}</span>
          <Cursor cursorColor="orangered" />
        </h1>
        <div>
          <button className="heroButton">About</button>
          <button className="heroButton">Experience</button>
          <button className="heroButton">Skills</button>
          <button className="heroButton">Projects</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
