import React, { useState, useMemo, Fragment, RefObject, ReactElement, FC } from 'react';
import cx from 'classnames';

import GettingStartedIcon from '../assets/images/svgs/faq-getting-started.svg';
import PricingIcon from '../assets/images/svgs/faq-pricing.svg';
import MoreIcon from '../assets/images/svgs/faq-more.svg';
import styles from './faq.module.css';
import MaterialIcon from '../components/MaterialIcon';
import Accordion from '../components/Accordion';

interface FaqArticleProps {
  header: String;
}

const FaqArticle: FC<FaqArticleProps> = ({ header, children }) => {
  return (
    <article className="border-b border-primary-1-tint-lt text-lg">
      <Accordion>
        <Accordion.Header className="flex justify-between items-center py-5 cursor-pointer select-none">
          {isCollapsed => (
            <Fragment>
              <span className="text-primary-2-navy">{header}</span>
              <MaterialIcon className="text-accent-tint">{isCollapsed ? 'add' : 'remove'}</MaterialIcon>
            </Fragment>
          )}
        </Accordion.Header>
        <Accordion.Content>{children}</Accordion.Content>
      </Accordion>
    </article>
  );
};

const Faq = () => {
  const [active, setActive] = useState(0);

  const handleActiveClick = (index: number) => e => {
    setActive(index);
  };

  const GettingStartedSection = (
    <Fragment>
      <div className={styles.title}>
        <GettingStartedIcon width={25} height={25} className="inline-block mr-2" />{' '}
        <span className="align-middle"> Getting Started</span>
      </div>
      <section>
        <FaqArticle header="Egestas sed tempus urna">
          <p className="pl-4 pb-5 text-primary-2-tint">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </FaqArticle>
        <FaqArticle header="Lorem ipsum dolor sit amet">
          <p className="pl-4 pb-5 text-primary-2-tint">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </FaqArticle>
        <FaqArticle header="Lorem dolor sed viverra ipsum">
          <p className="pl-4 pb-5 text-primary-2-tint">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </FaqArticle>
        <FaqArticle header="Egestas sed tempus urna">
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

  const PriceSection = (
    <Fragment>
      <div className={styles.title}>
        <PricingIcon width={25} height={25} className="inline-block mr-2" />{' '}
        <span className="align-middle"> Pricing & Plans</span>
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
    </Fragment>
  );

  const MoreSection = (
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

  const section = useMemo(() => {
    const sections = [GettingStartedSection, PriceSection, MoreSection];
    return sections[active];
  }, [active]);

  return (
    <div className={cx('text-center', styles.wrapper)}>
      <h2 className="font-bold mb-6 sm:mb-6 text-3xl sm:text-5xl">Hello, how can we help?</h2>
      <p className="text-primary-2-tint text-lg my-2 sm:text-2xl font-light">
        Don't see your question here? <span className="text-primary-3-shade">Ask us</span>!
      </p>
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 my-12">
          <button
            className={cx(
              'flex flex-col justify-center items-center sm:flex-1 col-span-6 sm:col-span-4 h-32 shadow-card-medium hover:shadow-card-medium-hov rounded-lg border-1.5 border-transparent',
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
              'flex flex-col justify-center items-center sm:flex-1 col-start-4 col-end-10 sm:col-span-4 h-32 shadow-card-medium hover:shadow-card-medium-hov rounded-lg border-1.5 border-transparent',
              { [styles.active]: active === 2 }
            )}
            onClick={handleActiveClick(2)}
          >
            <MoreIcon className="mb-2" width={40} height={40} />
            <span className="primary-2-shade text-lg">More</span>
          </button>
        </div>
        <section className="my-8 text-left">{section}</section>
      </div>
    </div>
  );
};

export default Faq;
