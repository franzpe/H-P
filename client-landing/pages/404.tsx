import React from 'react';
import Link from 'next/link';

import Image from '../assets/images/svgs/alien-1.svg';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 lg:space-x-16 h-full py-8">
      <Image viewBox="0 0 535 593" className="md:max-w-md" height="100%" width="100%" />
      <div className="text-center md:text-left pt-12">
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl">404 Error</h1>
        <h2 className="text-primary-2-tint text-2xl sm:text-3xl md:text-4x lg:text-5xl">Something's missing.</h2>
        <h4 className="text-primary-2-tint text-lg sm:text-1xl md:text-2xl lg:text-3xl">
          We can't seem to find the page you're looking for
        </h4>
        <div className="space-x-4 mt-8 whitespace-no-wrap">
          <Link href="/">
            <button className="text-center w-40 lg:w-48 py-2 font-medium text-white border border-accent-orange rounded-full bg-accent-orange  hover:bg-accent-shade">
              Go to Home
            </button>
          </Link>
          <Link href="#">
            <button className="text-center w-40 lg:w-48 py-2 font-medium text-accent-orange rounded-full border border-accent-orange ">
              Get Help
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
