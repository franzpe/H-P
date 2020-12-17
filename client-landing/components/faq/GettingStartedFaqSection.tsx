import React, { Fragment } from 'react';

import GettingStartedIcon from '../../assets/images/svgs/faq-getting-started.svg';
import FaqArticle from './FaqArticle';

import styles from '../../pages/faq.module.css';

const GettingStartedFaqSection = () => {
  return (
    <Fragment>
      <div className={styles.title}>
        <GettingStartedIcon width={25} height={25} className="inline-block mr-2" />{' '}
        <span className="align-middle">Getting Started</span>
      </div>
      <section>
        <FaqArticle key="1" header="How do I create an account?">
          <p className="pl-4 pb-5 text-primary-2-tint">Currently we are accepting applications to our waitlist.</p>
        </FaqArticle>
        <FaqArticle key="2" header="What information should I submit?">
          <p className="pl-4 pb-5 text-primary-2-tint">We need only your name and email to join our waitlist.</p>
        </FaqArticle>
        <FaqArticle key="3" header="Can I import my profile from other networks?">
          <p className="pl-4 pb-5 text-primary-2-tint">
            You can use single sign-on authentication with third party such as gmail, facebook or linkeding but
            you're not able to import profile.
          </p>
        </FaqArticle>
      </section>
    </Fragment>
  );
};

export default GettingStartedFaqSection;
