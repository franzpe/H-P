import React, { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';

import { getLayout } from '../../../components/layouts/SiteLayout';

import DesignerImage from '../../assets/images/svgs/designer.svg';
import DeveloperImage from '../../assets/images/svgs/developer.svg';
import ScientistImage from '../../assets/images/svgs/data-scientist.svg';
import styles from './activation-complete.module.css';

enum Expertise {
  Designer = 'designer',
  Developer = 'developer',
  DataScientist = 'data-scientist'
}

const ActivationComplete = () => {
  const [activeExpertise, setActiveExpertise] = useState({
    [Expertise.Designer]: true,
    [Expertise.Developer]: false,
    [Expertise.DataScientist]: false
  });

  const handleActiveClick = (expertise: Expertise) => e => {
    setActiveExpertise({ ...activeExpertise, [expertise]: !activeExpertise[expertise] });
  };

  return (
    <div className={cx('text-center mx-auto pt-8', styles.wrapper)}>
      <h2 className="font-bold mb-6 sm:mb-6 text-3xl sm:text-5xl">Let’s start creating the ultimate team</h2>
      <p className="text-primary-2-tint text-lg sm:text-lg">
        Our database has more than 300,000 profiles. Let us help you begin finding the right ones by telling us:
        <span className="font-semibold"> what expertise are you looking for?</span>
      </p>
      <div className="flex flex-row justify-evenly sm:justify-center sm:space-x-8 lg:space-x-16 my-12 sm:my-20 flex-wrap">
        <button
          className={cx(
            'w-2/5 h-2/5 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 shadow-card-medium flex flex-col justify-center items-center rounded-lg hover:shadow-card-medium-hov py-4 sm:py-6 md:py-8 border-1.5 border-transparent',
            { [styles.active]: activeExpertise[Expertise.Designer] }
          )}
          onClick={handleActiveClick(Expertise.Designer)}
        >
          <DesignerImage className="h-20 sm:h-full" height="116px " viewBox="0 0 116 116" />
          <span className="text-lg sm:text-xl md:sm:text-2xl  text-primary-2-shade font-semibold mt-4">
            Designers
          </span>
        </button>
        <button
          className={cx(
            'w-2/5 h-2/5 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 shadow-card-medium flex flex-col justify-center items-center rounded-lg hover:shadow-card-medium-hov py-4 sm:py-6 md:py-8 border-1.5 border-transparent',
            { [styles.active]: activeExpertise[Expertise.Developer] }
          )}
          onClick={handleActiveClick(Expertise.Developer)}
        >
          <DeveloperImage className="h-20 sm:h-full pt-2" viewBox="0 0 115 98" />
          <span className="text-lg sm:text-xl md:sm:text-2xl  text-primary-2-shade font-semibold mt-4">
            Developers
          </span>
        </button>
        <button
          className={cx(
            'w-2/5 h-2/5 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 shadow-card-medium flex flex-col justify-center items-center rounded-lg hover:shadow-card-medium-hov mt-6 sm:py-6 md:py-8 sm:mt-0 mx-0 py-4 border-1.5 border-transparent',
            { [styles.active]: activeExpertise[Expertise.DataScientist] }
          )}
          onClick={handleActiveClick(Expertise.DataScientist)}
        >
          <ScientistImage className="h-20 pt-2 sm:h-full" viewBox="0 0 144 108" />
          <span className="text-lg sm:text-xl md:sm:text-2xl  text-primary-2-shade font-semibold mt-4">
            Data Scientists
          </span>
        </button>
      </div>
      <Link href="#">
        <button className="text-center py-2 px-16 font-medium text-white rounded-full bg-accent-orange mb-6 hover:bg-accent-shade">
          Start searching
        </button>
      </Link>
    </div>
  );
};

ActivationComplete.getLayout = getLayout;

export default ActivationComplete;
