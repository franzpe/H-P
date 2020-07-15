import React from 'react';
import Plans from '../components/Plans';
import PriceFaqSection from '../components/faq/PriceFaqSection';
import Link from 'next/link';

const Pricing = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="max-w-full xl:max-w-5xl mb-24">
        <h2 className="font-bold text-3xl sm:text-5xl text-center md:text-left">Pricing</h2>
        <p className="font-light text-primary-2-tint text-lg sm:text-2xl mb-12 leading-relaxed md:max-w-lg text-center md:text-left">
          Needs change as your company grows. We’ll help you create the most talented & effective teams from the
          very start.
        </p>
        <Plans href="/sign-up/info" />
      </div>
      <div className="max-w-5xl flex flex-col md:flex-row">
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h2 className="font-bold mb-2 md:mb-12">Frequently Asked Questions</h2>
          <p className="font-light text-primary-2-tint text-xl lg:text-2xl mb-6">
            Don't see your question here? <span>Ask us!</span>
          </p>
          <Link href="/faq">
            <button className="border border-accent-orange text-accent-orange text-center w-40 lg:w-48 py-2 font-bold rounded-full hover:bg-primary-1-light">
              See all questions
            </button>
          </Link>
        </div>
        <div className="flex-1">
          <PriceFaqSection showTitle={false} />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
