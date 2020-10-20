import React from 'react';

import LikeIcon from '../assets/images/svgs/twitter-like.svg';
import PuzzlePieceIcon from '../assets/images/svgs/puzzle-piece-2.svg';
import Link from 'next/link';

const Careers = () => {
  return (
    <div className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 lg:space-x-8 font-avenir-light text-lg">
      <div className="flex-1">
        <h1 className="font-bold mb-4 -mt-2">Careers</h1>
        <p className="text-2xl mb-10">
          Hackers & Painters is expanding and we are looking for talented people to join our team!
        </p>
        <ul className=" font-avenir-book text-primary-1-shade grid grid-cols-2 gap-6">
          <li className="mb-2">
            <LikeIcon />
            <p className="font-avenir-heavy">Lorem ipsum dolor sit amet</p>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </li>
          <li>
            <LikeIcon />
            <p className="font-avenir-heavy">Lorem ipsum dolor sit amet</p>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </li>
          <li>
            <PuzzlePieceIcon height="50px" width="50px" />
            <p className="font-avenir-heavy">Lorem ipsum dolor sit amet</p>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </li>
          <li>
            <PuzzlePieceIcon height="50px" width="50px" />
            <p className="font-avenir-heavy">Lorem ipsum dolor sit amet</p>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <ul className="inline-flex space-x-4 text-primary-2-navy mb-6">
          <li className="font-avenir-black cursor-pointer">All</li>
          <li className="cursor-pointer">Developing</li>
          <li className="cursor-pointer">Design</li>
        </ul>
        <div className="space-y-8">
          <div className="p-6 md:py-8 md:px-10 xl:px-12 shadow-card rounded-lg">
            <h3 className="mb-2 font-bold">Full Stack Developer</h3>
            <p className="font-avenir-book mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="space-x-2 md:space-x-4">
              <a href="https://angel.co/" target="_blank" rel="noreferrer noopener">
                <button className="text-center py-2 w-32 md:w-40 xl:w-48 text-accent-orange text-sm md:text-base rounded-full border border-accent-orange font-avenir-heavy hover:bg-primary-1-light">
                  More details
                </button>
              </a>
              <Link href="#">
                <button className="text-center py-2 w-32 md:w-40 xl:w-48 font-medium text-white text-sm md:text-base rounded-full bg-accent-orange hover:bg-accent-shade border border-accent-orange">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
          <div className="p-6 md:py-8 md:px-10 xl:px-12 shadow-card rounded-lg">
            <h3 className="mb-2 font-bold">Communications Director</h3>
            <p className="font-avenir-book mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="space-x-2 md:space-x-4">
              <a href="https://angel.co/" target="_blank" rel="noreferrer noopener">
                <button className="text-center py-2 w-32 md:w-40 xl:w-48 text-accent-orange text-sm md:text-base rounded-full border border-accent-orange font-avenir-heavy hover:bg-primary-1-light">
                  More details
                </button>
              </a>
              <Link href="#">
                <button className="text-center py-2 w-32 md:w-40 xl:w-48 font-medium text-white text-sm md:text-base rounded-full bg-accent-orange hover:bg-accent-shade border border-accent-orange">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
