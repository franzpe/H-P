import React, { Fragment } from 'react';

import MoreIcon from '../../assets/images/svgs/faq-more.svg';
import FaqArticle from './FaqArticle';

import styles from '../../pages/faq.module.css';
import Link from 'next/link';

const MoreFaqSection = () => {
  return (
    <Fragment>
      <div className={styles.title}>
        <MoreIcon width={25} height={25} className="inline-block mr-2" />{' '}
        <span className="align-middle">More</span>
      </div>
      <FaqArticle header="How do you deal with data privacy? ">
        <p className="pl-4 pb-5 text-primary-2-tint">
          We keep your sensitive information encrypted, we also use secure hypertext transfer protocol to use
          secure communication over a computer network, Firewall and most recent OS security updates to ensure your
          data is safe.
        </p>
      </FaqArticle>
      <FaqArticle header="What do I do if a candidate’s contact information isn’t listed?">
        <p className="pl-4 pb-5 text-primary-2-tint">
          We do our best to provide the contact information of every candidate in our database. If any information
          is missing, it likely means that the candidate has not completed their profile.
        </p>
      </FaqArticle>
      <FaqArticle header="What email tools do you integrate with?">
        <p className="pl-4 pb-5 text-primary-2-tint">
          We integrate with Gmail, Microsoft Outlook, and macOS mail.
        </p>
      </FaqArticle>
      <FaqArticle header="A recruiter reached out to me and I wish to not be contacted.">
        <p className="pl-4 pb-5 text-primary-2-tint">
          We do our best to match available candidates with recruiters with open roles. If you would like to opt
          out of being contacted by recruiters, please send us a message on our{' '}
          <Link href="/contact">
            <a className="underline">Contact page</a>
          </Link>
          .
        </p>
      </FaqArticle>
    </Fragment>
  );
};

export default MoreFaqSection;
