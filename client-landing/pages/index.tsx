import { Fragment, useState } from 'react';
import cx from 'classnames';
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

import MaterialIcon from '../components/MaterialIcon';
import DiscoveryIcon from '../assets/images/svgs/component-6.svg';
import WaveDesktop from '../assets/images/svgs/homepage-wave.svg';
import WaveSvg from '../assets/images/svgs/wave.svg';
import BrowserWindow from '../assets/images/browser-window@3x.png';
import RecruiterDuoSvg from '../assets/images/svgs/recruiter-duo.svg';
import SpotlightSvg from '../assets/images/svgs/spotlight.svg';

import Wave2Tablet from '../assets/images/svgs/wave-2-tablet.svg';

import WaveMobile from '../assets/images/svgs/subtract.svg';
import styles from './index.module.css';
import MOV2 from '../assets/images/Talentito.webm';
import Gif2 from '../assets/images/Talentito.gif';
import logo1 from '../assets/images/logo-pomma.png';
import logo2 from '../assets/images/logo-tim.png';
import logo3 from '../assets/images/logo-ll.png';

const References = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide(prev => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentSlide(prev => prev - 1);
  };

  const updateCurrentSlide = (index: number) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  return (
    <div className="text-justify flex justify-center items-center space-x-2 md:space-x-6 lg:space-x-16">
      <button
        className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 bg-primary-1-tint hover:bg-primary-2-shade rounded-full flex items-center justify-center"
        onClick={handlePrevious}
      >
        <MaterialIcon className="text-white text-xl md:text-2xl">arrow_back</MaterialIcon>
      </button>
      <Carousel
        autoPlay={false}
        onChange={updateCurrentSlide}
        showThumbs={false}
        selectedItem={currentSlide}
        className="text-left max-w-85% md:max-w-2xl shadow-card-medium rounded-lg"
        infiniteLoop={true}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
      >
        <div className="py-8 px-4 md:p-8 lg:p-16  text-xl  text-left">
          <div className="text-primary-1-tint font-helvetica text-7xl leading-8 md:leading-10">“</div>
          <h6 className="text-avenir text-primary-2-navy font-bold">
            Our company had a very specific developer type in mind.
          </h6>
          <p className="text-lg md:text-xl text-primary-2-tint py-4 md:py-6">
            We were able to use Talentito to find that person. As a company focused on diversity, it was important
            for us to dig deeper than a person’s resume.
          </p>
          <p className="text-lg md:text-xl text-primary-2-navy font-medium">Hannah F.</p>
          <p className="text-lg md:text-xl text-primary-2-tint">Pomma</p>
        </div>
        <div className="py-8 px-4 md:p-8 lg:p-16 text-xl  text-left">
          <div className="text-primary-1-tint font-helvetica text-7xl leading-8 md:leading-10">“</div>
          <h6 className="text-avenir text-primary-2-navy font-bold">
            We used Hackers and Painter to source for candidates that we wouldn’t have otherwise found on LinkedIn.
          </h6>
          <p className="text-lg md:text-xl text-primary-2-tint py-4 md:py-6">
            Our recruiting team mostly targets technical talent who don’t keep their LinkedIn profiles updated, so
            it was important to find a tool that also sourced from other networks.
          </p>
          <p className="text-lg md:text-xl text-primary-2-navy font-medium">David B.</p>
          <p className="text-lg md:text-xl text-primary-2-tint">TIM Group</p>
        </div>
        <div className="py-8 px-4 md:p-8 lg:p-16 text-xl  text-left">
          <div className="text-primary-1-tint font-helvetica text-7xl leading-8 md:leading-10">“</div>
          <h6 className="text-avenir text-primary-2-navy font-bold">
            Talentito had great transparency into the portfolio work of candidates.
          </h6>
          <p className="text-lg md:text-xl text-primary-2-tint py-4 md:py-6">
            Our focus included passive candidates in addition to active searchers, which are usually harder to
            find. We were able to effectively reach out through H&P’s candidate portfolio insights.
          </p>
          <p className="text-lg md:text-xl text-primary-2-navy font-medium">Philip M.</p>
          <p className="text-lg md:text-xl text-primary-2-tint">Luneta Labs</p>
        </div>
      </Carousel>
      <button
        className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 bg-primary-1-tint hover:bg-primary-2-shade rounded-full flex items-center justify-center"
        onClick={handleNext}
      >
        <MaterialIcon className="text-white text-xl md:text-2xl">arrow_forward</MaterialIcon>
      </button>
    </div>
  );
};

const Home = () => {
  return (
    <Fragment>
      <section className="relative overflow-hidden" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div
          className="max-w-screen-xxl mx-auto flex items-center inner flex-col lg:flex-row text-center lg:text-left"
          style={{ minHeight: 'calc(100vh - 80px)' }}
        >
          <div className="relative z-10 flex-1.2">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl max-w-xl leading-snug font-bold">
              Discover <span className="text-primary-3-shade">designers</span>,{' '}
              <span className="text-primary-3-shade">developers</span>, &{' '}
              <span className="text-primary-3-shade">data scientists</span>
            </h1>
            <p className="font-light text-primary-2-tint text-xl md:text-2xl my-4 md:my-6 lg:my-10">
              We help companies build entrepreneurially focused teams.
            </p>
            <Link href="#">
              <button className="text-center py-2 px-6 md:py-3 md:px-10 font-medium text-white rounded-full bg-accent-orange mb-4 hover:bg-accent-shade text-sm md:text-base">
                Discover talent
              </button>
            </Link>
          </div>
          <WaveDesktop
            className="hidden lg:block opacity-50"
            style={{ position: 'absolute', bottom: '0', left: '0', top: '0', height: '100%' }}
            preserveAspectRatio="none"
            width="100%"
          />
          <div className="flex max-w-screen-xxl mx-auto justify-center flex-2 lg:pl-16">
            <video id="video" autoPlay={true} muted={true} loop={true} className="z-10" poster={Gif2}>
              <source src={MOV2} type='video/webm; codecs="vp8, vorbis"' />
            </video>
          </div>
        </div>
        <WaveMobile
          className="lg:hidden"
          style={{ position: 'absolute', bottom: '0', left: '0', right: '0', top: '0' }}
          width="100%"
          height="100%"
          preserveAspectRatio="none"
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
              Search the Talentito database for designers, developers, and data scientists. Take a closer look at
              how we’ve gone about finding candidates off the beaten track.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xxl mx-auto main-padding md:space-x-8 lg:space-x-10 xl:space-x-16 flex flex-col md:flex-row text-center md:text-left">
        <div className="md:flex-1.4 mb-8 md:mb-0">
          <h2 className="font-bold mb-6 sm:mb-6">Our features</h2>
          <p className="text-primary-2-tint text-lg sm:text-2xl font-thin mb-12">
            Frustrated with sourcing through traditional networks? Take a look at what we do differently. We’re a
            “show don’t tell” platform designed for you, to build your ideal team.
          </p>
          <ul className="md:flex space-x-8 mb-12">
            <li>
              <h5 className="leading-snug font-bold mb-4">View candidate’s project portfolio</h5>
              <p className="text-primary-2-tint text-xl">
                Developer heat maps, designer case studies, data scientist’s datasets, and more
              </p>
            </li>
            <li>
              <h5 className="leading-snug font-bold mb-4">Query multiple sources at once</h5>
              <p className="text-primary-2-tint text-xl">
                We aggregate from public profiles available on GitHub, Kaggle, Behance, and more
              </p>
            </li>
            <li>
              <h5 className="leading-snug font-bold mb-4">Create search filters</h5>
              <p className="text-primary-2-tint text-xl">
                Get notified when a candidate fits your criteria. Build with diversity in mind
              </p>
            </li>
          </ul>
          <Link href="/features">
            <button className="text-center py-3 px-8 font-medium text-white rounded-full bg-accent-orange mb-4  hover:bg-accent-shade">
              View all features
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
        <References />
      </section>
      <section className="pt-0 pb-6 flex justify-center main-padding">
        <ul className="flex justify-center flex-wrap w-full md:w-auto md-py-8">
          <li className="inline-flex items-center mx-2 md:mx-4 lg:mx-8 my-6 w-26% md:w-30% lg:w-64">
            <img src={logo1} alt="logo" />
          </li>
          <li className="inline-flex items-center mx-2 md:mx-4 lg:mx-8 my-6 w-26% md:w-30% lg:w-64">
            <img src={logo2} alt="logo" />
          </li>
          <li className="inline-flex items-center mx-2 md:mx-4 lg:mx-8 my-6 w-26% md:w-30% lg:w-64">
            <img src={logo3} alt="logo" />
          </li>
        </ul>
      </section>
      <section className="pb-10 mt-12 md:mt-32 space-x-0 md:space-x-8 lg:space-x-10 xl:space-x-16 md:flex text-center md:text-left max-w-screen-xxl mx-auto">
        <DiscoveryIcon className="inline-block w-2/5 h-full" />
        <div className="inline-block">
          <h2 className="font-bold mb-6 sm:mb-6">Start discovering hidden talent</h2>
          <div className="space-x-4 md:space-x-8 flex md:block justify-center ">
            <Link href="/sign-up/waiting-list">
              <button className="text-center py-2 w-40 font-medium text-white text-sm md:text-base rounded-full bg-accent-orange hover:bg-accent-shade border border-accent-orange">
                Join waitlist
              </button>
            </Link>
            <Link href="/contact">
              <button className="text-center py-2 w-40 font-medium text-accent-orange text-sm md:text-base rounded-full border border-accent-orange hover:bg-primary-1-light">
                Reach out
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
