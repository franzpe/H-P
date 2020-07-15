import React, { Fragment } from 'react';

import GettingStartedIcon from '../../assets/images/svgs/faq-getting-started.svg';
import FaqArticle from './FaqArticle';

import styles from '../../pages/faq.module.css';

const GettingStartedFaqSection = () => {
  return (
    <Fragment>
      <div className={styles.title}>
        <GettingStartedIcon width={25} height={25} className="inline-block mr-2" />{' '}
        <span className="align-middle"> Getting Started</span>
      </div>
      <section>
        <FaqArticle key="1" header="Egestas sed tempus urna">
          <p className="pl-4 pb-5 text-primary-2-tint">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </FaqArticle>
        <FaqArticle key="2" header="Lorem ipsum dolor sit amet">
          <p className="pl-4 pb-5 text-primary-2-tint">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </FaqArticle>
        <FaqArticle key="3" header="Lorem dolor sed viverra ipsum">
          <p className="pl-4 pb-5 text-primary-2-tint">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </FaqArticle>
        <FaqArticle key="4" header="Egestas sed tempus urna">
          <p className="pl-4 pb-5 text-primary-2-tint">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </FaqArticle>
      </section>
    </Fragment>
  );
};

export default GettingStartedFaqSection;
