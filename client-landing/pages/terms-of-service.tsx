import React, { useRef, Fragment } from 'react';

import PolicyHeader from '../components/PolicyHeader';

const sections = [
  {
    heading: 'Lorem ipsum',
    content: (
      <Fragment>
        <p className="my-4 text-primary-2-tint text-lg font-medium">1.1 Subsection</p>
        <p className="text-lg text-primary-2-shade">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur
          adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet,
          consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit
          amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum
          dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem
          ipsum dolor sit amet, consectetur adipiscing elit?
        </p>
      </Fragment>
    )
  },
  {
    heading: 'Lorem ipsum',
    content: (
      <Fragment>
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
      </Fragment>
    )
  },
  {
    heading: 'Lorem ipsum',
    content: (
      <Fragment>
        <p className="text-lg text-primary-2-shade">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur
          adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet,
          consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit
          amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum
          dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem
          ipsum dolor sit amet, consectetur adipiscing elit?
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur
          adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet,
          consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit
          amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem ipsum
          dolor sit amet, consectetur adipiscing elit?Lorem ipsum dolor sit amet, consectetur adipiscing elit?Lorem
          ipsum dolor sit amet, consectetur adipiscing elit?
        </p>
      </Fragment>
    )
  }
];

const TermsOfService = () => {
  const sectionRefs = useRef(new Array(sections.length));

  const handleOnSectionClick = (index: number) => e => {
    sectionRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div>
      <PolicyHeader heading="Terms of Service">
        These Terms of Service describe your rights and responsibilities.
      </PolicyHeader>
      <div className="inner max-w-6xl flex flex-col lg:flex-row lg:space-x-8 relative">
        <div>
          <ul className="list-decimal text-primary-2-tint text-xl w-68 mb-4 lg:my-4 space-y-3 lg:sticky lg:top-32 list-inside font-medium">
            {sections.map((s, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-accent-orange"
                onClick={handleOnSectionClick(index)}
              >
                {s.heading}
              </li>
            ))}
          </ul>
        </div>
        <div>
          {sections.map((section, index) => (
            <section key={index} ref={el => (sectionRefs.current[index] = el)} className="mb-16">
              <h6 className="my-4 text-accent-orange font-bold font-avenir">
                {index + 1}. {section.heading}
              </h6>
              {section.content}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
