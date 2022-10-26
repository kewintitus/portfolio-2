import React from 'react';

import { SocialIcon } from 'react-social-icons';

type Props = {};

function Header({}: Props) {
  return (
    <header className=" flex justify-between sticky top-0 max-w-7xl mx-auto">
      <div className="flex flex-row items-center justify-left">
        <SocialIcon
          url="https://twitter.com/"
          fgColor="gray"
          bgColor="transparent"
          className=" cursor-pointer "
        />
        <SocialIcon
          url="https://youtube.com/"
          fgColor="gray"
          bgColor="transparent"
          className=" cursor-pointer "
        />
      </div>
      <div className=" flex flex-row items-center content-center cursor-pointer">
        <SocialIcon
          network="email"
          fgColor="gray"
          bgColor="transparent"
          className=" cursor-pointer "
        />
        <p className=" uppercase hidden md:inline-flex text-sm text-gray-400 ">
          Get in touch
        </p>
      </div>
    </header>
  );
}

export default Header;
