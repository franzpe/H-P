import React, { Fragment, FC } from 'react';

import PricingIcon from '../../assets/images/svgs/faq-pricing.svg';
import FaqArticle from './FaqArticle';

import styles from '../../pages/faq.module.css';
import Link from 'next/link';

interface Props {
  showTitle?: boolean;
}

const PriceFaqSection: FC<Props> = ({ showTitle = true }) => {
  return (
    <Fragment>
      {showTitle && (
        <div className={styles.title}>
          <PricingIcon width={25} height={25} className="inline-block mr-2" />{' '}
          <span className="align-middle"> Pricing & Plans</span>
        </div>
      )}
      <FaqArticle key="5" header="What is Hackers and Painters’ pricing model?">
        <p className="pl-4 pb-5 text-primary-2-tint">
          We charge a monthly fee that is modular based on usage. To view fees, please visit our{' '}
          <Link href="/pricing">
            <a className="underline">Pricing page</a>
          </Link>
          .
        </p>
      </FaqArticle>
      <FaqArticle key="6" header="What plan is the right one for me?">
        <p className="pl-4 pb-5 text-primary-2-tint">
          We suggest starting with our Pro tier and then adding or decreasing capacity depending on need.
        </p>
      </FaqArticle>
      <FaqArticle key="7" header="Do you offer a free trial?">
        <p className="pl-4 pb-5 text-primary-2-tint">
          We offer a money-back guarantee. If you are not happy with our service after two weeks of using it, we
          will fully refund your subscription amount.
        </p>
      </FaqArticle>
      <FaqArticle key="8" header="How do I upgrade or cancel my subscription?">
        <p className="pl-4 pb-5 text-primary-2-tint">
          This can be done at any time under the settings tab in your profile.
        </p>
      </FaqArticle>
      <FaqArticle key="9" header="Is there any flexibility on pricing?">
        <p className="pl-4 pb-5 text-primary-2-tint">
          We feel our product is priced fairly, but are glad to accommodate enterprise level accounts with bulk
          pricing.
        </p>
      </FaqArticle>
      <FaqArticle key="10" header="Does viewing the same profile twice count against my monthly/year view limits?">
        <p className="pl-4 pb-5 text-primary-2-tint">
          View counts reset monthly. Recruiters are able to track how many candidates they’ve viewed in their
          personal dashboard.
        </p>
      </FaqArticle>
    </Fragment>
  );
};

export default PriceFaqSection;
