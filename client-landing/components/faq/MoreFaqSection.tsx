import React, { Fragment } from 'react';

import MoreIcon from '../../assets/images/svgs/faq-more.svg';
import FaqArticle from './FaqArticle';

import styles from '../../pages/faq.module.css';

const MoreFaqSection = () => {
  return (
    <Fragment>
      <div className={styles.title}>
        <MoreIcon width={25} height={25} className="inline-block mr-2" />{' '}
        <span className="align-middle"> More</span>
      </div>
      <FaqArticle header="Egestas sed tempus urna">
        <p className="pl-4 pb-5 text-primary-2-tint">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </FaqArticle>
      <FaqArticle header="Lorem ipsum dolor sit amet">
        <p className="pl-4 pb-5 text-primary-2-tint">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </FaqArticle>
      <FaqArticle header="Lorem dolor sed viverra ipsum">
        <p className="pl-4 pb-5 text-primary-2-tint">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </FaqArticle>
      <FaqArticle header="Egestas sed tempus urna">
        <p className="pl-4 pb-5 text-primary-2-tint">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </FaqArticle>
    </Fragment>
  );
};

export default MoreFaqSection;
