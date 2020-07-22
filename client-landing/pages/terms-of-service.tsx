import React from 'react';

import PolicyHeader from '../components/PolicyHeader';

const TermsOfService = () => {
  return (
    <div>
      <PolicyHeader heading="Terms of Service">
        These Terms of Service describe your rights and responsibilities.
      </PolicyHeader>
      <div className="inner max-w-6xl flex flex-col lg:flex-row lg:space-x-8 relative">
        <div>
          <ul className="list-decimal text-primary-2-tint text-xl w-68 mb-4 lg:my-4 space-y-3 lg:sticky lg:top-32 list-inside">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div>
          <section className="mb-16">
            <h6 className="my-4 text-accent-orange font-bold font-avenir">1. Lorem ipsum</h6>
            <p className="my-4 text-primary-2-tint text-lg font-medium">1.1 Subsection</p>
            <p className="text-lg text-primary-2-shade">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur
              adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet,
              consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor
              sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem
              ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing
              elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>
          </section>
          <section className="mb-16">
            <h6 className="my-4 text-accent-orange font-bold font-avenir">2. Lorem ipsum</h6>
            <ul className="text-lg text-primary-2-shade list-disc list-outside pl-6 md:pl-11 space-y-2">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur
                adipiscing elit? Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem{' '}
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur
                adipiscing elit? Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem{' '}
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur
                adipiscing elit? Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem{' '}
              </li>
            </ul>
          </section>
          <section className="mb-16">
            <h6 className="my-4 text-accent-orange font-bold font-avenir">3. Lorem ipsum</h6>
            <p className="text-lg text-primary-2-shade">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur
              adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet,
              consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor
              sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem
              ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing
              elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur
              adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet,
              consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor
              sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem
              ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing
              elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
