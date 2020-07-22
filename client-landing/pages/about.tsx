import React from 'react';

import facts from '../assets/images/group-220-test.png';
import People from '../assets/images/svgs/group-203.svg';
import TopDrop from '../assets/images/svgs/group-302.svg';
import BottomDrop from '../assets/images/svgs/group-300.svg';
import DesignerDrop from '../assets/images/svgs/group-303.svg';
import SqlDrop from '../assets/images/svgs/group-304.svg';
import DiagramDrop from '../assets/images/svgs/blob-5-3.svg';
import LeftDrop from '../assets/images/svgs/blob-2-2.svg';
import Link from 'next/link';

const About = () => {
  return (
    <div className="relative overflow-hidden">
      <TopDrop className="absolute top-0 right-0 -mt-16 mr-8 hidden lg:block -z-1" />
      <BottomDrop className="absolute bottom-0 left-0 -mb-40 ml-8 hidden lg:block -z-1" />
      <section className="inner">
        <h1 className="text-center mb-12 md:mb-16 lg:relative">It’s all about the people.</h1>
        <div className="mx-auto max-w-5xl relative">
          <People width="100%" height="100%" />
          <DesignerDrop className="absolute hidden lg:block -mr-40 top-0 right-0" />
          <DiagramDrop className="absolute hidden lg:block left-0 top-0 mt-24 -ml-32" />
        </div>
        <div className="table mx-auto collapse border-space-0-14">
          <p className="text-3xl md:text-4xl font-thin text-primary-2-shade text-center mb-16 table-row w-1px">
            Hackers and Painters is a modern tool built to simplify your sourcing operations
            <LeftDrop className="absolute left-0 hidden lg:block" />
          </p>
          <div className="text-xl md:text-2xl font-thin text-primary-2-tint table-cell w-1px relative">
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 text-center md:text-left">
              <span className="flex-1">
                Designed for companies looking to hire entrepreneurially focused people, we aggregate, sort, and
                rank potential candidates from 40+ data sources.
              </span>
              <span className="flex-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </span>
            </div>
            <SqlDrop className="absolute right-0 top-0 -mr-48 -mt-16 hidden lg:block" />
          </div>
        </div>
      </section>

      <section
        className="relative mb-8"
        style={{
          backgroundImage: `url(${facts})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="inner text-center relative">
          <h2 className="text-white font-bold mb-12 md:mb-16">Some facts & figures</h2>
          <div className="grid grid-cols-4 row-gap-4 col-gap-4 lg:col-gap-8 mb-16">
            <div className="col-span-2 md:col-span-1 flex flex-col justify-center bg-white rounded-lg h-40">
              <span className="text-3xl md:text-2xl lg:text-4xl text-primary-3-shade leading-snug">60,000</span>
              <span className="text-lg lg:text-xl text-primary-2-tint">users around the world</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col justify-center bg-white rounded-lg h-40">
              <span className="text-3xl md:text-2xl lg:text-4xl text-primary-3-shade leading-snug">
                $120 million
              </span>
              <span className="text-lg lg:text-xl text-primary-2-tint">total revenue</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col justify-center bg-white rounded-lg h-40">
              <span className="text-3xl md:text-2xl lg:text-4xl text-primary-3-shade leading-snug">Lorem</span>
              <span className="text-lg lg:text-xl text-primary-2-tint">Loerem ipsum whatever</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col justify-center bg-white rounded-lg h-40">
              <span className="text-3xl md:text-2xl lg:text-4xl text-primary-3-shade leading-snug">Lorem</span>
              <span className="text-lg lg:text-xl text-primary-2-tint">Lorem ipsum whatever</span>
            </div>
          </div>
        </div>
      </section>
      <section className="inner">
        <h2 className="font-bold text-center">What we've been up to</h2>
      </section>
      <section className="inner text-center mb-12">
        <h5 className="font-bold mb-12">Trusted by companies all over</h5>
        <ul className="flex justify-center space-x-16 flex-wrap w-full md:w-auto">
          <li className="text-primary-2-tint rounded-md text-lg md:text-xl inline-block border-1.5 border-primary-2-tint p-2 md:p-4">
            LOGO PLACEHOLDER
          </li>
          <li className="text-primary-2-tint rounded-md text-lg md:text-xl inline-block border-1.5 border-primary-2-tint p-2 md:p-4">
            LOGO PLACEHOLDER
          </li>
          <li className="text-primary-2-tint rounded-md text-lg md:text-xl inline-block border-1.5 border-primary-2-tint p-2 md:p-4">
            LOGO PLACEHOLDER
          </li>
        </ul>
      </section>
      <section className="inner text-center">
        <h2 className="font-bold mb-8">Our team is growing</h2>
        <p className="text-3xl md:text-4xl font-thin text-primary-2-tint mb-12">Lorem ipsum...</p>
        <Link href="#">
          <button className="text-center py-2 px-16 font-medium text-white text-sm md:text-base rounded-full bg-accent-orange font-bold hover:bg-accent-shade border border-accent-orange relative">
            See open positions
          </button>
        </Link>
      </section>
    </div>
  );
};

export default About;
