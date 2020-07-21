import React, { useState, useMemo, Fragment } from 'react';
import cx from 'classnames';

import GettingStartedIcon from '../assets/images/svgs/faq-getting-started.svg';
import PricingIcon from '../assets/images/svgs/faq-pricing.svg';
import MoreIcon from '../assets/images/svgs/faq-more.svg';
import styles from './faq.module.css';

import FlyingRecruiters from '../assets/images/svgs/flying-recruiters-2.svg';
import PuzzlePiece from '../assets/images/svgs/puzzle-piece-2.svg';
import FlyingRecruiters2 from '../assets/images/svgs/flying-recruiters-3.svg';
import PriceFaqSection from '../components/faq/PriceFaqSection';
import MoreFaqSection from '../components/faq/MoreFaqSection';
import GettingStartedFaqSection from '../components/faq/GettingStartedFaqSection';

const Faq = () => {
  const [active, setActive] = useState(0);

  const handleActiveClick = (index: number) => e => {
    setActive(index);
  };

  const Section = useMemo(() => {
    const sections = [GettingStartedFaqSection, PriceFaqSection, MoreFaqSection];
    return sections[active];
  }, [active]);

  return (
    <Fragment>
      <FlyingRecruiters className="absolute right-0 top-0 mt-24 hidden lg:block" />
      <PuzzlePiece className="absolute left-0 top-0 ml-24 mt-48 hidden lg:block" />
      <FlyingRecruiters2 className="absolute left-0 top-0 ml-16 mt-128 hidden xl:block" />
      <div className={cx('text-center ', styles.wrapper)}>
        <h2 className="font-bold mb-6 sm:mb-6 text-3xl sm:text-5xl">Hello, how can we help?</h2>
        <p className="text-primary-2-tint text-lg my-2 sm:text-2xl font-light">
          Don't see your question here? <span className="text-primary-3-shade">Ask us</span>!
        </p>
        <div className="max-w-3xl mx-auto ">
          <div className="grid grid-cols-12 gap-6 sm:gap-8 my-12">
            <button
              className={cx(
                'flex flex-col justify-center items-center sm:flex-1 col-span-6 sm:col-span-4 h-32 shadow-card-medium hover:shadow-card-medium-hov rounded-lg border-1.5 border-transparent bg-white z-10',
                { [styles.active]: active === 0 }
              )}
              onClick={handleActiveClick(0)}
            >
              <GettingStartedIcon className="mb-2" width={40} height={40} />
              <span className="primary-2-shade text-lg">Getting Started</span>
            </button>
            <button
              className={cx(
                'flex flex-col justify-center items-center sm:flex-1 col-span-6 sm:col-span-4 h-32 shadow-card-medium hover:shadow-card-medium-hov rounded-lg border-1.5 border-transparent',
                { [styles.active]: active === 1 }
              )}
              onClick={handleActiveClick(1)}
            >
              <PricingIcon className="mb-2" width={40} height={40} />
              <span className="primary-2-shade text-lg">Pricing & Plans</span>
            </button>
            <button
              className={cx(
                'flex flex-col justify-center items-center sm:flex-1 col-start-4 col-end-10 sm:col-span-4 h-32 shadow-card-medium hover:shadow-card-medium-hov rounded-lg border-1.5 border-transparent z-10 relative bg-white',
                { [styles.active]: active === 2 }
              )}
              onClick={handleActiveClick(2)}
            >
              <MoreIcon className="mb-2" width={40} height={40} />
              <span className="primary-2-shade text-lg">More</span>
            </button>
          </div>
          <section className="my-8 text-left">
            <Section />
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default Faq;
