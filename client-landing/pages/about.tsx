import React from 'react';

import facts from '../assets/images/group-220-test.png';
import People from '../assets/images/svgs/group-203.svg';
import TopDrop from '../assets/images/svgs/group-302.svg';
import BottomDrop from '../assets/images/svgs/group-300.svg';
import DesignerDrop from '../assets/images/svgs/group-303.svg';
import SqlDrop from '../assets/images/svgs/group-304.svg';
import DiagramDrop from '../assets/images/svgs/blob-5-3.svg';
import LeftDrop from '../assets/images/svgs/blob-2-2.svg';
import Timeline from '../components/Timeline';

// Logos
import Logo1 from '../assets/images/svgs/logo-candidates-1.svg';
import Logo2 from '../assets/images/svgs/logo-candidates-2.svg';
import Logo3 from '../assets/images/svgs/logo-candidates-3.svg';
import Logo4 from '../assets/images/svgs/logo-candidates-4.svg';
import Logo5 from '../assets/images/svgs/logo-candidates-5.svg';
import Logo6 from '../assets/images/svgs/logo-candidates-6.svg';
import Logo7 from '../assets/images/svgs/logo-candidates-7.svg';
import Logo8 from '../assets/images/svgs/logo-candidates-8.svg';
import Logo9 from '../assets/images/svgs/logo-candidates-9.svg';
import Logo10 from '../assets/images/svgs/logo-candidates-10.svg';
import Logo11 from '../assets/images/svgs/logo-candidates-11.svg';
import Logo12 from '../assets/images/svgs/logo-candidates-12.svg';
import Logo13 from '../assets/images/svgs/logo-candidates-13.svg';
import Logo14 from '../assets/images/svgs/logo-candidates-14.svg';
import Logo15 from '../assets/images/svgs/logo-candidates-15.svg';
import Logo16 from '../assets/images/svgs/logo-candidates-16.svg';
import Logo17 from '../assets/images/svgs/logo-candidates-17.svg';

const About = () => {
  return (
    <div className="relative overflow-hidden">
      <TopDrop className="absolute top-0 right-0 -mt-16 mr-8 hidden lg:block -z-1" />
      <BottomDrop className="absolute bottom-0 left-0 -mb-40 ml-8 hidden lg:block -z-1" />
      <section className="inner">
        <h1 className="text-center mb-12 md:mb-16 lg:relative">It’s all about the people</h1>
        <div className="mx-auto max-w-5xl relative">
          <People width="100%" height="100%" />
          <DesignerDrop className="absolute hidden lg:block -mr-40 top-0 right-0" />
          <DiagramDrop className="absolute hidden lg:block left-0 top-0 mt-24 -ml-32" />
        </div>
        <div className="table mx-auto collapse border-space-0-14">
          <p className="text-3xl md:text-4xl font-thin text-primary-2-shade text-center mb-16 table-row w-1px">
            Talentito is a modern tool built to simplify your sourcing
            <LeftDrop className="absolute left-0 hidden lg:block" />
          </p>
          <div className="text-xl md:text-2xl font-thin text-primary-2-tint table-cell w-1px relative">
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 text-center md:text-left">
              <span className="flex-1">
                Designed for companies looking to hire entrepreneurially focused people, we aggregate, sort, and
                rank potential candidates from 100+ data sources.
              </span>
              <span className="flex-1">
                We look for people that show, don’t tell, and put a heavy focus on developers, designers, and data
                scientists who have built projects from the ground up, publicly.
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
            <div className="col-span-2 md:col-span-1 flex flex-col justify-start bg-white rounded-lg pt-6 pb-8 px-2">
              <span className="text-3xl md:text-2xl lg:text-4xl text-primary-3-shade leading-snug">100+</span>
              <span className="text-lg lg:text-xl text-primary-2-tint">Data sources we gather from</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col justify-start bg-white rounded-lg pt-6 pb-8 px-2">
              <span className="text-3xl md:text-2xl lg:text-4xl text-primary-3-shade leading-snug">64%</span>
              <span className="text-lg lg:text-xl text-primary-2-tint">
                Percent of tech employees who plan to leave their jobs in 2020
              </span>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col justify-start bg-white rounded-lg pt-6 pb-8 px-2">
              <span className="text-3xl md:text-2xl lg:text-4xl text-primary-3-shade leading-snug">
                8 out of 10
              </span>
              <span className="text-lg lg:text-xl text-primary-2-tint">
                Recruiters say that diversity is their #1 priority when hiring
              </span>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col justify-start bg-white rounded-lg pt-6 pb-8 px-2">
              <span className="text-3xl md:text-2xl lg:text-4xl text-primary-3-shade leading-snug">
                50 million+
              </span>
              <span className="text-lg lg:text-xl text-primary-2-tint">Potential candidates in our database</span>
            </div>
          </div>
        </div>
      </section>
      <section className="inner">
        <h2 className="font-bold text-center mb-12 md:mb-16">What we've been up to</h2>
        <div className="py-32">
          <Timeline />
        </div>
      </section>
      <section className="inner text-center mb-12 lg:mb-20">
        <h4 className="font-bold mb-12">Our candidates come from</h4>
        <ul className="flex justify-center flex-wrap w-full md:w-auto py-2 md-py-8">
          <li className="inline-flex items-center mx-2 md:mx-8 my-8 w-26% md:w-24">
            <Logo1 width="100%" height="100%" />
          </li>
          <li className="inline-flex items-center mx-2 md:mx-8 my-8 w-26% md:w-24">
            <Logo2 width="100%" height="100%" />
          </li>
          <li className="inline-flex items-center mx-2 md:mx-8 my-8 w-26% md:w-24">
            <Logo3 width="100%" height="100%" />
          </li>
          <li className="inline-flex items-center mx-2 md:mx-8 my-8 w-26% md:w-24">
            <Logo4 width="100%" height="100%" />
          </li>
          <li className="inline-flex items-center mx-2 md:mx-8 my-8 w-26% md:w-24">
            <Logo5 width="100%" height="100%" />
          </li>
          <li className="inline-flex items-center mx-2 md:mx-8 my-8 w-26% md:w-24">
            <Logo6 width="100%" height="100%" />
          </li>
          <li className="inline-flex items-center mx-2 md:mx-8 my-8 w-26% md:w-24">
            <Logo7 width="100%" height="100%" />
          </li>
          <li className="inline-flex items-center mx-2 md:mx-8 my-8 w-26% md:w-24">
            <Logo8 width="100%" height="100%" />
          </li>
          <li className="inline-flex items-center mx-2 md:mx-8 my-8 w-26% md:w-24">
            <Logo9 width="100%" height="100%" />
          </li>
          <li className="inline-flex items-center mx-2 md:mx-8 my-8 w-26% md:w-24">
            <Logo10 width="100%" height="100%" />
          </li>
          <li className="inline-flex items-center mx-2 md:mx-8 my-8 w-26% md:w-24">
            <Logo11 width="100%" height="100%" />
          </li>
          <li className="inline-flex items-center mx-2 md:mx-8 my-8 w-26% md:w-24">
            <Logo12 width="100%" height="100%" />
          </li>
          <li className="inline-flex items-center mx-2 md:mx-8 my-8 w-26% md:w-24">
            <Logo13 width="100%" height="100%" />
          </li>
          <li className="inline-flex items-center mx-2 md:mx-8 my-8 w-26% md:w-24">
            <Logo14 width="100%" height="100%" />
          </li>
          <li className="inline-flex items-center mx-2 md:mx-8 my-8 w-26% md:w-24">
            <Logo15 width="100%" height="100%" />
          </li>
          <li className="inline-flex items-center mx-2 md:mx-8 my-8 w-26% md:w-24">
            <Logo16 width="100%" height="100%" />
          </li>
          <li className="inline-flex items-center mx-2 md:mx-8 my-8 w-26% md:w-24">
            <Logo17 width="100%" height="100%" />
          </li>
        </ul>
      </section>
      {/* <section className="inner text-center">
        <h2 className="font-bold mb-8">Our team is growing</h2>
        <p className="text-3xl md:text-4xl font-thin text-primary-2-tint mb-12">Lorem ipsum...</p>
        <Link href="#">
          <button className="text-center py-2 px-16 text-white text-sm md:text-base rounded-full bg-accent-orange font-bold hover:bg-accent-shade border border-accent-orange relative">
            See open positions
          </button>
        </Link>
      </section> */}
    </div>
  );
};

export default About;
