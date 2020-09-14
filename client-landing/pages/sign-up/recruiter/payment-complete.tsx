import React from 'react';
import { getLayout } from '../../../components/layouts/SiteLayout';

import Image from '../../assets/images/svgs/flying-recruiters-1.svg';

const PaymentComplete = () => {
  return (
    <div className="text-center mx-auto pt-8 ">
      <h2 className="font-bold mb-6 sm:mb-16 text-3xl  sm:text-5xl">Payment complete!</h2>
      <Image className="inline-block mb-4 sm:mb-16 w-10/12 md:w-full" viewBox="0 0 481 191" />
      <p className="text-primary-2-tint text-lg sm:text-2xl">
        We have sent a confirmation link to <span className="font-semibold">johndoe@email.com</span>
      </p>
      <p className="text-primary-2-tint text-lg sm:text-2xl mt-2 sm:mt-0">Click the link to continue!</p>
    </div>
  );
};

PaymentComplete.getLayout = getLayout;

export default PaymentComplete;
