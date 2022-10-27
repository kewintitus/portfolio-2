import Image from 'next/image';
import React from 'react';

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article>
      <div className="bg-white  w-[50px] h-[50px] relative overflow-hidden ">
        <Image
          src="/../public/res/illuminei-logo.png"
          layout="fill"
          objectFit="contain"
          blurDataURL="data:..."
          placeholder="blur"
          className="object-cover mt-1 align-bottom"
        />
      </div>
    </article>
  );
}

export default ExperienceCard;
