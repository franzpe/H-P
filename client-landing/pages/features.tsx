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
import aggrVideoWebm from '../assets/images/process.webm';
import aggrVideoGif from '../assets/images/process.gif';

import profileViewImg from '../assets/images/profile-view.jpg';
import profileSnapshotImg from '../assets/images/profile-snapshot.jpg';
import profileCustomSearchImg from '../assets/images/profile-custom-search.jpg';
import candidateTrackingImg from '../assets/images/candidate-tracking.jpg';
import searchAlertsImg from '../assets/images/search-alerts.jpg';
import foldersListImg from '../assets/images/folders-list.jpg';
import readyToHireImg from '../assets/images/ready-to-hire.jpg';
import ActiveIndexSwitcher from '../components/ActiveIndexSwitcher';

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

const ratingSources = [readyToHireImg, candidateTrackingImg];
const recruiterToolsSources = [profileSnapshotImg, profileCustomSearchImg, foldersListImg];

const Featuers = () => {
  return (
    <div>
      <header className="relative mb-24">
        <div className="max-w-4xl z-10 relative">
          <h1>Revolutionize your team</h1>
          <div className="text-2xl lg:text-3xl text-primary-2-tint avenir-roman mb-8 mt-2">
            Hackers and Painters has all of the tools you need to help propel your company forward by hiring hidden
            diverse talent.
          </div>
          <div className="flex space-x-4 md:space-x-6">
            <Link href="/sign-up/waiting-list">
              <button className="text-center py-2 w-48 font-medium text-white text-sm md:text-base rounded-full bg-accent-orange hover:bg-accent-shade border border-accent-orange">
                Get started
              </button>
            </Link>
            {/* <Link href="#">
              <button className="text-center py-2 w-48 text-accent-orange text-sm md:text-base rounded-full border border-accent-orange font-avenir-heavy hover:bg-primary-1-light">
                View demo
              </button>
            </Link> */}
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
            Unconventional sourcing
          </div>
        </Slider>
      </nav>
      <section className="mt-40 space-y-24">
        <article id="candidates" className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16">
          <div className="flex flex-col text-center md:text-right justify-center flex-1 ">
            <span className="font-avenir-black text-xl text-primary-2-navy uppercase">candidate search</span>
            <h2 className="text-3.5xl text-accent-shade font-bold my-4">Find underrepresented talent</h2>
            <p className="text-2xl text-primary-1-shade font-light">
              Hackers and Painters aggregates from hundreds of sources, searching and rating millions of candidates
              that can show you what they’ve built, more than any resume can.
            </p>
          </div>
          <img className="h-124 flex-1.5 shadow-card-medium" src={profileViewImg} />
        </article>
        <ActiveIndexSwitcher
          render={({ activeIndex, onChangeIndex }) => (
            <article
              id="tools"
              className="flex flex-col-reverse lg:flex-row space-y-8 space-y-reverse lg:space-y-0 lg:space-x-16"
            >
              <img
                key={recruiterToolsSources[activeIndex]}
                className={cx('h-124 flex-1 shadow-card-medium', styles.featureImage)}
                src={recruiterToolsSources[activeIndex]}
              />
              <div className="flex flex-col text-center md:text-left justify-center flex-1.1">
                <span className="font-avenir-black text-xl text-primary-2-navy uppercase">recruiter tools</span>
                <h2 className="text-3.5xl text-accent-shade font-bold my-4">
                  Stay organized with your candidate search
                </h2>
                <div className="flex md:space-x-6 mt-8">
                  <button
                    className={cx(styles.articleSliderItem, { [styles.active]: activeIndex === 0 })}
                    onClick={onChangeIndex(0)}
                  >
                    <img className="h-12 w-20 rounded-" src={profileSnapshotImg} />
                    <p className="font-avenir-heavy text-xl mb-1 mt-3">Portfolio Snapshots</p>
                    <p>View GitHub heatmaps, Kaggle datasets, Dribbble design projects – all in one place</p>
                  </button>
                  <button
                    className={cx(styles.articleSliderItem, { [styles.active]: activeIndex === 1 })}
                    onClick={onChangeIndex(1)}
                  >
                    <img className="h-12 w-20" src={profileCustomSearchImg} />
                    <p className="font-avenir-heavy text-xl mb-1 mt-3">Custom Searches</p>
                    <p>
                      Sort by dozens of filters highlighting diversity, skills, and more in order to find your
                      perfect candidate
                    </p>
                  </button>
                  <button
                    className={cx(styles.articleSliderItem, { [styles.active]: activeIndex === 2 })}
                    onClick={onChangeIndex(2)}
                  >
                    <img className="h-12 w-20" src={foldersListImg} />
                    <p className="font-avenir-heavy text-xl mb-1 mt-3">Candidate Tracking</p>
                    <p>
                      Take notes on, favorite, or sort candidates into folders in order to stay on top of your
                      hiring pipeline
                    </p>
                  </button>
                </div>
              </div>
            </article>
          )}
        />
        <ActiveIndexSwitcher
          render={({ activeIndex, onChangeIndex }) => (
            <article id="rating" className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16">
              <div className="flex flex-col text-center md:text-right justify-center flex-1 ">
                <span className="font-avenir-black text-xl text-primary-2-navy uppercase">rating system</span>
                <h2 className="text-3.5xl text-accent-shade font-bold my-4">
                  Hackers and Painters uses machine learning to calculate a score for each candidate that
                  determines the likelihood of a potential match
                </h2>
                <div className="flex space-x-6 mt-8">
                  <button
                    className={cx('flex-0.8', styles.articleSliderItem, { [styles.active]: activeIndex === 0 })}
                    onClick={onChangeIndex(0)}
                  >
                    <img className="h-12 w-20" src={readyToHireImg} />
                    <p className="font-avenir-heavy text-xl mb-1 mt-3">Ready to hire</p>
                    <p>Track when candidates might be receptive to a new job or career</p>
                  </button>
                  <button
                    className={cx('flex-0.8', styles.articleSliderItem, { [styles.active]: activeIndex === 1 })}
                    onClick={onChangeIndex(1)}
                  >
                    <img className="h-12 w-20" src={candidateTrackingImg} />
                    <p className="font-avenir-heavy text-xl mb-1 mt-3">Entrepreneurial spirit</p>
                    <p>Determine how active each candidate is in regards to building businesses</p>
                  </button>
                </div>
              </div>
              <img
                key={ratingSources[activeIndex]}
                className={cx('h-124 flex-1.5 shadow-card-medium', styles.featureImage)}
                src={ratingSources[activeIndex]}
              />
            </article>
          )}
        />
        <article
          id="alerts"
          className="flex flex-col-reverse lg:flex-row space-y-8 space-y-reverse lg:space-y-0 lg:space-x-16"
        >
          <img className="h-124 flex-1.5 shadow-card-medium" src={searchAlertsImg} />
          <div className="flex flex-col text-center md:text-left justify-center flex-1">
            <span className="font-avenir-black text-xl text-primary-2-navy uppercase">search alerts</span>
            <h2 className="text-3.5xl text-accent-shade font-bold my-4">
              Be notified whenever a new candidate meets your criteria
            </h2>
            <p className="text-2xl text-primary-1-shade font-light">
              Create and save Boolean searches that allow you to put your sourcing on autopilot. Automate the
              discovery and qualification portions of your recruiting process in order to hire better candidates
              faster.
            </p>
          </div>
        </article>
        <article id="sourcing" className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16">
          <div className="flex flex-col text-center md:text-right justify-center flex-1 ">
            <span className="font-avenir-black text-xl text-primary-2-navy uppercase">
              unconventional sourcing
            </span>
            <h2 className="text-3.5xl text-accent-shade font-bold my-4">Data aggregated from 100+ sources</h2>
            <p className="text-2xl text-primary-1-shade font-light">
              Hackers and Painters is a “show don’t tell” platform. We go out and find candidates who can point to
              what they’ve built, when they built it, and how they did it. View snapshots from networks such as
              GitHub, Dribbble, Kaggle, and more.
            </p>
          </div>
          <div className="h-152 flex flex-1.5">
            <video id="video" autoPlay={true} muted={true} loop={true} className="z-10" poster={aggrVideoGif}>
              <source src={aggrVideoWebm} type='video/webm; codecs="vp8, vorbis"' />
            </video>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Featuers;
