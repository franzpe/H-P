import React from 'react';
import Plans from '../components/Plans';

const Pricing = () => {
  return (
    <div className="flex items-center flex-col">
      <div>
        <h2 className="font-bold text-3xl sm:text-5xl">Pricing</h2>
        <p className="font-light text-primary-2-tint text-lg sm:text-2xl mb-12 leading-relaxed max-w-lg">
          Needs change as your company grows. We’ll help you create the most talented & effective teams from the
          very start.
        </p>
        <Plans href="/sign-up/info" />
      </div>
    </div>
  );
};

export default Pricing;
