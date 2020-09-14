import { Fragment } from 'react';
import cx from 'classnames';
import Link from 'next/link';

import MaterialIcon from '../components/MaterialIcon';
import DiscoveryIcon from '../assets/images/svgs/component-6.svg';
import WaveDesktop from '../assets/images/svgs/homepage-wave.svg';
import Recruitersppl from '../assets/images/svgs/homepage-recruiters.svg';
import WaveSvg from '../assets/images/svgs/wave.svg';
import BrowserWindow from '../assets/images/browser-window@3x.png';
import RecruiterDuoSvg from '../assets/images/svgs/recruiter-duo.svg';
import SpotlightSvg from '../assets/images/svgs/spotlight.svg';

import Wave1Tablet from '../assets/images/svgs/wave-1-tablet.svg';
import Wave2Tablet from '../assets/images/svgs/wave-2-tablet.svg';
import RecruitersTablet from '../assets/images/svgs/recruiters-tablet.svg';

import WaveMobile from '../assets/images/svgs/subtract.svg';
import RecruitersMobile from '../assets/images/svgs/recruiters-mobile.svg';
import styles from './index.module.css';

const Home = () => {
  return (
    <Fragment>
      <section className="relative pt-4 md:pt-12 overflow-hidden" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div className="max-w-screen-xxl mx-auto main-padding-x pt-4 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl max-w-xl leading-snug font-bold">
            Discover <span className="text-primary-3-shade">designers</span>,{' '}
            <span className="text-primary-3-shade">developers</span>, &{' '}
            <span className="text-primary-3-shade">data scientists</span>
          </h1>
          <p className="font-light text-primary-2-tint text-2xl my-10">
            We help companies build entrepreneurially focused teams.
          </p>
          <Link href="#">
            <button className="text-center py-3 px-10 font-medium text-white rounded-full bg-accent-orange mb-4 font-bold hover:bg-accent-shade">
              Discover talent
            </button>
          </Link>
        </div>
        <WaveDesktop
          className="hidden lg:block"
          style={{ position: 'absolute', bottom: '0', left: '0', top: '0', height: '100%' }}
          preserveAspectRatio="none"
          width="100%"
        />
        <Recruitersppl
          className="hidden lg:block w-auto"
          style={{ position: 'absolute', bottom: '0', top: '0', right: '8%', height: '100%' }}
          preserveAspectRatio="xMaxYMin meet"
        />
        <Wave1Tablet
          className="hidden md:block lg:hidden absolute bottom-0 left-0 right-0 top-0 w-full h-full -z-1"
          preserveAspectRatio="none"
        />
        <RecruitersTablet
          className="hidden md:block lg:hidden absolute bottom-0 left-0 right-0 w-95% h-full mx-auto"
          preserveAspectRatio="xMidYMax meet"
        />
        <WaveMobile
          className="md:hidden"
          style={{ position: 'absolute', bottom: '0', left: '0', right: '0', top: '0' }}
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        />
        <RecruitersMobile
          className="md:hidden absolute bottom-0 left-0 right-0 w-60% h-full mx-auto"
          preserveAspectRatio="xMidYMax meet"
        />
      </section>
      <section className="relative mb-12 lg:mb-10%">
        <WaveSvg className="z-10 relative hidden lg:block" />
        <Wave2Tablet
          className={cx('z-10 relative w-full block lg:hidden', styles.wave2)}
          preserveAspectRatio="none"
        />
        <SpotlightSvg
          className="max-w-4xl absolute top-0 hidden lg:block w-37%"
          style={{ marginTop: '8%', marginLeft: '10%' }}
        />
        <div className={styles.spotlightWrapper}>
          <SpotlightSvg
            className={cx(
              'max-w-4xl absolute top-0 left-0 right-0 mx-auto lg:hidden w-60% md:w-50%',
              styles.spotlight
            )}
          />
        </div>
        <div className="max-w-screen-xxl main-padding mx-auto text-center md:text-left">
          <div className="lg:ml-auto lg:max-w-xl">
            <h2 className="font-bold mb-6 sm:mb-6">Find hidden talent</h2>
            <p className="text-primary-2-tint text-lg sm:text-2xl font-thin">
              Search the Hackers & Painters database of designers, developers, and data scientists. Take a closer
              look at how we’ve gone about finding candidates off the beaten track.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xxl mx-auto main-padding md:space-x-8 lg:space-x-10 xl:space-x-16 flex flex-col md:flex-row text-center md:text-left">
        <div className="md:flex-1.4 mb-8 md:mb-0">
          <h2 className="font-bold mb-6 sm:mb-6">Our features</h2>
          <p className="text-primary-2-tint text-lg sm:text-2xl font-thin mb-12">
            Frustrated with sourcing through traditional networks? Take a look at what we do differently. We’re a
            “show don’t tell” platform designed for you, to build your team. .
          </p>
          <ul className="md:flex space-x-8 mb-12">
            <li>
              <h5 className="leading-snug font-bold mb-4">Create complex search filters</h5>
              <p className="text-primary-2-tint text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </p>
            </li>
            <li>
              <h5 className="leading-snug font-bold mb-4">Create complex search filters</h5>
              <p className="text-primary-2-tint text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </p>
            </li>
            <li>
              <h5 className="leading-snug font-bold mb-4">Create complex search filters</h5>
              <p className="text-primary-2-tint text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </p>
            </li>
          </ul>
          <Link href="/sign-up/payment-complete">
            <button className="text-center py-3 px-8 font-medium text-white rounded-full bg-accent-orange mb-4 font-bold hover:bg-accent-shade">
              Complete Purchase
            </button>
          </Link>
        </div>
        <div className="md:flex-1 w-80% md:w-full ml-auto mr-auto">
          <div className="relative mb-30%">
            <img src={BrowserWindow} />
            <RecruiterDuoSvg
              className="absolute bottom-0 left-0"
              style={{ marginBottom: '-30%', marginLeft: '10%', marginRight: '15%' }}
            />
          </div>
        </div>
      </section>
      <section className="py-12 main-padding">
        <h2 className="font-bold mb-6 sm:mb-12 text-center">Trusted by clients everywhere</h2>
        <div className="text-justify flex justify-center items-center space-x-2 md:space-x-8 lg:space-x-16">
          <button className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 bg-primary-1-tint hover:bg-primary-2-shade rounded-full flex items-center justify-center">
            <MaterialIcon className="text-white text-xl md:text-2xl">arrow_back</MaterialIcon>
          </button>
          <div className="py-8 px-4 md:p-8 lg:p-16 max-w-2xl shadow-card-medium rounded-lg text-xl">
            <div className="text-primary-1-tint font-helvetica text-7xl leading-8 md:leading-10">“</div>
            <h6 className="text-avenir text-primary-2-navy font-bold">
              Our company fundamentally changed for the better after we started to use Hackers & Painters.
            </h6>
            <p className="text-lg md:text-xl text-primary-2-tint py-4 md:py-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam fugiat, sequi ex quia officia a
              necessitatibus ab suscipit asperiores
            </p>
            <p className="text-lg md:text-xl text-primary-2-navy font-medium">John Doe</p>
            <p className="text-lg md:text-xl text-primary-2-tint">Head of Recruting, Pomma</p>
          </div>
          <button className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 bg-primary-1-tint hover:bg-primary-2-shade rounded-full flex items-center justify-center">
            <MaterialIcon className="text-white text-xl md:text-2xl">arrow_forward</MaterialIcon>
          </button>
        </div>
      </section>
      <section className="py-12 flex justify-center main-padding">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full md:w-auto">
          <li className="text-primary-2-tint rounded-md text-lg md:text-xl inline-block border-1.5 border-primary-2-tint p-2 md:p-4">
            LOGO PLACEH
          </li>
          <li className="text-primary-2-tint rounded-md text-lg md:text-xl inline-block border-1.5 border-primary-2-tint p-2 md:p-4">
            LOGO PLACEH
          </li>
          <li className="text-primary-2-tint rounded-md text-lg md:text-xl inline-block border-1.5 border-primary-2-tint p-2 md:p-4">
            LOGO PLACEH
          </li>
          <li className="text-primary-2-tint rounded-md text-lg md:text-xl inline-block border-1.5 border-primary-2-tint p-2 md:p-4">
            LOGO PLACEH
          </li>
        </ul>
      </section>
      <section className="pb-10 mt-12 md:mt-32 space-x-0 md:space-x-8 lg:space-x-10 xl:space-x-16 md:flex text-center md:text-left max-w-screen-xxl mx-auto">
        <DiscoveryIcon className="inline-block w-2/5 h-full" />
        <div className="inline-block">
          <h2 className="font-bold mb-6 sm:mb-6">Start discovering hidden talent</h2>
          <div className="space-x-4 md:space-x-8 flex md:block justify-center ">
            <Link href="/sign-up/user-type">
              <button className="text-center py-2 w-40 font-medium text-white text-sm md:text-base rounded-full bg-accent-orange font-bold hover:bg-accent-shade border border-accent-orange">
                Sign up
              </button>
            </Link>
            <button className="text-center py-2 w-40 font-medium text-accent-orange text-sm md:text-base rounded-full border border-accent-orange font-bold hover:bg-primary-1-light">
              View demo
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
