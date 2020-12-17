import React from 'react';

import Image from '../assets/images/svgs/flying-recruiters-1.svg';

const ContactSent = () => {
  return (
    <div className="text-center mx-auto pt-8 max-w-xl">
      <h2 className="font-bold mb-6 sm:mb-16 text-3xl  sm:text-5xl">Email sent!</h2>
      <Image className="inline-block mb-4 sm:mb-16 w-10/12 md:w-full" viewBox="0 0 481 191" />
      <p className="text-primary-2-tint text-lg sm:text-2xl">Thank you for reaching out to us</p>
    </div>
  );
};

export default ContactSent;
