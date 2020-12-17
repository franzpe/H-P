import Link from 'next/link';
import React from 'react';
import { OpenPosition, OpenPositions, OpenPositionSection } from '../../models/OpenPosition';

type PositionProps = {
  position: Omit<OpenPosition, 'preview'>;
};

const RENDER_SECTION = (section: OpenPositionSection, index) => (
  <section key={index} className="mb-12">
    {section.heading && <h6 className="my-4 text-accent-orange font-bold font-avenir">{section.heading}</h6>}
    {!section.isList &&
      section.data.map((d, i) => (
        <p key={i} className="text-lg text-primary-2-shade mb-6">
          {d}
        </p>
      ))}
    {section.isList && (
      <ul className="text-lg text-primary-2-shade list-disc list-outside pl-6 md:pl-11 space-y-2">
        {section.data.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    )}
  </section>
);

const Position = ({ position }: PositionProps) => {
  const { heading, sections } = position;

  return (
    <div className="inner max-w-6xl">
      <h3>{heading}</h3>
      {sections.map(RENDER_SECTION)}
      <p className="text-lg text-primary-2-shade mb-8">
        To apply for a job, please contact us by email{' '}
        <a href="mailto:careers@hackersandpainters.com" className="underline">
          careers@hackersandpainters.io
        </a>
        .
      </p>
      <Link href="/careers">
        <button className="text-center py-2 w-32 md:w-40 xl:w-48 text-accent-orange text-sm md:text-base rounded-full border border-accent-orange font-avenir-heavy hover:bg-primary-1-light">
          Go back to Careers
        </button>
      </Link>
    </div>
  );
};

/**
 * Prerender routes
 */
export const getStaticPaths = () => {
  return {
    paths: OpenPositions.map(o => ({
      params: {
        slug: o.slug
      }
    })),
    fallback: false
  };
};

/**
 * Fill props
 */
export const getStaticProps = async ({ params }) => {
  const position = OpenPositions.find(o => o.slug === params.slug);

  /**
   * Functions can not be serialized, therefore we need to get rid of them
   */
  const positionProp = Object.keys(position).reduce((acc, key) => {
    if (position[key] instanceof Function) {
      return acc;
    }

    acc[key] = position[key];
    return acc;
  }, {});

  return {
    props: { position: positionProp }
  };
};

export default Position;
