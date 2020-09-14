import Link from 'next/link';
import React, { useState } from 'react';
import cx from 'classnames';

import styles from './user-type.module.css';

const UserType = () => {
  const [isRecruiter, setIsRecruiter] = useState(true);
  const pathPart = isRecruiter ? 'recruiter' : 'candidate';

  return (
    <div className="text-center mx-auto pt-8 ">
      <div className="mx-auto max-w-xl w-full text-center mb-8">
        <h3 className="font-semibold mb-4 text-2xl md:text-4xl">Join Hackers & Painters</h3>
      </div>
      <p className="text-primary-1-shade text-xl my-2 sm:text-3.5xl font-light">I am...</p>
      <div
        className={cx(
          'flex flex-row justify-evenly sm:justify-center space-x-4 sm:space-x-8 lg:space-x-12 my-12 sm:my-20 flex-wrap mx-auto',
          styles.wrapper
        )}
      >
        <button
          className={cx(
            'flex-1 sm:flex-none sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 shadow-card-medium flex flex-col justify-center items-center rounded-lg hover:shadow-card-medium-hov py-4 sm:py-6 md:py-8 border-1.5 border-transparent',
            { [styles.active]: isRecruiter }
          )}
          onClick={() => setIsRecruiter(true)}
        >
          <span className="text-lg sm:text-xl md:sm:text-2xl  text-primary-2-shade font-semibold mt-4">
            Looking for candidates
          </span>
        </button>
        <button
          className={cx(
            'flex-1 sm:flex-none sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 shadow-card-medium flex flex-col justify-center items-center rounded-lg hover:shadow-card-medium-hov py-4 sm:py-6 md:py-8 border-1.5 border-transparent',
            { [styles.active]: !isRecruiter }
          )}
          onClick={() => setIsRecruiter(false)}
        >
          <span className="text-lg sm:text-xl md:sm:text-2xl  text-primary-2-shade font-semibold mt-4">
            A candidate
          </span>
        </button>
      </div>
      <div className="max-w-sm mx-auto">
        <Link href={`/sign-up/${pathPart}/info`} as={`/sign-up/${pathPart}/info`}>
          <button className="block w-full text-center py-2 font-medium text-white rounded-full bg-accent-orange mt-24 mb-6 hover:bg-accent-shade">
            Next
          </button>
        </Link>
        <hr className="border-primary-1-tint" />
        <div className="mt-6 text-center">
          <p className="text-primary-2-shade">Already have an account?</p>
          <button className="text-primary-3-shade font-medium">Log in</button>
        </div>
      </div>
    </div>
  );
};

export default UserType;
