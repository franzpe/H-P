import React from 'react';
import Slider, { ResponsiveObject } from 'react-slick';
import cx from 'classnames';

import Link from 'next/link';

import FlyingRecruiterSvg from '../assets/images/svgs/group-355.svg';
import FeatureAlertSvg from '../assets/images/svgs/features-alerts.svg';
import FeatureCandidatesSvg from '../assets/images/svgs/features-candidates.svg';
import FeatureRatingSvg from '../assets/images/svgs/features-rating.svg';
import FeatureSourcingSvg from '../assets/images/svgs/features-sourcing.svg';
import FeatureToolsSvg from '../assets/images/svgs/features-tools.svg';
import styles from './features.module.css';

const sliderSettings = {
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    { breakpoint: 99999, settings: 'unslick' } as ResponsiveObject,
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
    { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } }
  ] as ResponsiveObject[]
};

const handleNavClick = (id: string) => e => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

const Featuers = () => {
  return (
    <div>
      <header className="relative mb-24">
        <div className="max-w-4xl z-10 relative">
          <h1>Revolutionize your team.</h1>
          <div className="text-2xl lg:text-3xl text-primary-2-tint avenir-roman mb-8 mt-2">
            Hackers & Painters has all of the tools you need to help propel your company forward by hiring hidden
            diverse talent.
          </div>
          <div className="flex space-x-4 md:space-x-6">
            <Link href="#">
              <button className="text-center py-2 w-48 font-medium text-white text-sm md:text-base rounded-full bg-accent-orange hover:bg-accent-shade border border-accent-orange">
                Get started
              </button>
            </Link>
            <Link href="#">
              <button className="text-center py-2 w-48 text-accent-orange text-sm md:text-base rounded-full border border-accent-orange font-avenir-heavy hover:bg-primary-1-light">
                View demo
              </button>
            </Link>
          </div>
        </div>
        <FlyingRecruiterSvg className="mt-8 absolute top-0 right-0 hidden lg:block" />
      </header>
      <nav className={styles.nav}>
        <Slider className={cx('lg:space-x-2', styles.slider)} {...sliderSettings}>
          <div className={styles.navItem} onClick={handleNavClick('candidates')}>
            <FeatureCandidatesSvg className="mr-3 flex-shrink-0.25" />
            Candidate search
          </div>
          <div className={styles.navItem} onClick={handleNavClick('tools')}>
            <FeatureToolsSvg className="mr-3 flex-shrink-0.25" />
            Recruiter tools
          </div>
          <div className={styles.navItem} onClick={handleNavClick('rating')}>
            <FeatureRatingSvg className="mr-3 flex-shrink-0.25" />
            Rating system
          </div>
          <div className={styles.navItem} onClick={handleNavClick('alerts')}>
            <FeatureAlertSvg className="mr-3 flex-shrink-0.25" />
            Search alerts
          </div>
          <div className={styles.navItem} onClick={handleNavClick('sourcing')}>
            <FeatureSourcingSvg className="mr-3 flex-shrink-0.25" />
            Untraditional sourcing
          </div>
        </Slider>
      </nav>
      <section className="mt-40 space-y-24">
        <article id="candidates" className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16">
          <div className="flex flex-col text-center md:text-right justify-center flex-1 ">
            <span className="font-avenir-black text-xl text-primary-2-navy uppercase">candidate search</span>
            <h2 className="text-3.5xl text-accent-shade font-bold my-4">Find underrepresented talent</h2>
            <p className="text-2xl text-primary-1-shade font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
          <img className="h-124 flex-1.5" style={{ background: '#c4c4c4' }} />
        </article>
        <article
          id="tools"
          className="flex flex-col-reverse lg:flex-row space-y-8 space-y-reverse lg:space-y-0 lg:space-x-16"
        >
          <img className="h-124 flex-1" style={{ background: '#c4c4c4' }} />
          <div className="flex flex-col text-center md:text-left justify-center flex-1.1">
            <span className="font-avenir-black text-xl text-primary-2-navy uppercase">recruiter tools</span>
            <h2 className="text-3.5xl text-accent-shade font-bold my-4">
              Stay organized with your candidate search
            </h2>
            <p className="text-2xl text-primary-1-shade font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
            <div className="flex md:space-x-6 mt-8">
              <button className={cx(styles.articleSliderItem, styles.active)}>
                <img className="h-12 w-20" style={{ background: '#c4c4c4' }} />
                <p className="font-avenir-heavy text-xl mb-1 mt-3">Notetaking</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              </button>
              <button className={cx(styles.articleSliderItem)}>
                <img className="h-12 w-20" style={{ background: '#c4c4c4' }} />
                <p className="font-avenir-heavy text-xl mb-1 mt-3">Candidate Tracking</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              </button>
              <button className={cx(styles.articleSliderItem)}>
                <img className="h-12 w-20" style={{ background: '#c4c4c4' }} />
                <p className="font-avenir-heavy text-xl mb-1 mt-3">Folders</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              </button>
            </div>
          </div>
        </article>
        <article id="rating" className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16">
          <div className="flex flex-col text-center md:text-right justify-center flex-1 ">
            <span className="font-avenir-black text-xl text-primary-2-navy uppercase">ranking system</span>
            <h2 className="text-3.5xl text-accent-shade font-bold my-4">
              Automatically determine the most qualified candidates
            </h2>
            <p className="text-2xl text-primary-1-shade font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore
            </p>
            <div className="flex space-x-6 mt-8">
              <button className={cx('flex-0.8', styles.articleSliderItem, styles.active)}>
                <img className="h-12 w-20" style={{ background: '#c4c4c4' }} />
                <p className="font-avenir-heavy text-xl mb-1 mt-3">Notetaking</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              </button>
              <button className={cx('flex-0.8', styles.articleSliderItem)}>
                <img className="h-12 w-20" style={{ background: '#c4c4c4' }} />
                <p className="font-avenir-heavy text-xl mb-1 mt-3">Candidate Tracking</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              </button>
            </div>
          </div>
          <img className="h-124 flex-1.5" style={{ background: '#c4c4c4' }} />
        </article>
        <article
          id="alerts"
          className="flex flex-col-reverse lg:flex-row space-y-8 space-y-reverse lg:space-y-0 lg:space-x-16"
        >
          <img className="h-124 flex-1.5" style={{ background: '#c4c4c4' }} />
          <div className="flex flex-col text-center md:text-left justify-center flex-1">
            <span className="font-avenir-black text-xl text-primary-2-navy uppercase">search alerts</span>
            <h2 className="text-3.5xl text-accent-shade font-bold my-4">
              Be notified whenever a new candidate meets your criteria
            </h2>
            <p className="text-2xl text-primary-1-shade font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationn
            </p>
          </div>
        </article>
        <article id="sourcing" className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16">
          <div className="flex flex-col text-center md:text-right justify-center flex-1 ">
            <span className="font-avenir-black text-xl text-primary-2-navy uppercase">untraditional sourcing</span>
            <h2 className="text-3.5xl text-accent-shade font-bold my-4">Data aggregated from 100+ sources</h2>
            <p className="text-2xl text-primary-1-shade font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
          <img className="h-124 flex-1.5" style={{ background: '#c4c4c4' }} />
        </article>
      </section>
    </div>
  );
};

export default Featuers;
