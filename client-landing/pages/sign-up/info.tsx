import React, { FC } from 'react';

import { getSignupStepperLayout, SignupStepProps } from '../../components/layouts/SignupStepperLayout';
import Link from 'next/link';
import Input from '../../components/forms/Input';

type Props = SignupStepProps;

const Info: FC<Props> = ({ previousStep, nextStep }) => {
  return (
    <div>
      <form>
        <div className="flex md:space-x-2 flex-wrap">
          <Input id="firstName" label="First Name" wrapperClassName="w-full md:w-auto" />
          <Input id="lastName" label="Last Name" wrapperClassName="w-full md:w-auto" />
        </div>
        <Input id="companyName" label="Company" value="" wrapperClassName="w-full" />
        <Input id="email" label="Company Email" value="" wrapperClassName="w-full" />
        <Input id="password" label="Password" value="" wrapperClassName="w-full" icon="visibility" />
        <Input id="passwordConfirm" label="Confirm Password" wrapperClassName="w-full" icon="visibility" />
        <Link href={nextStep}>
          <button className="block w-full text-center py-2 font-medium text-white rounded-full bg-accent-orange mt-24 mb-6 hover:bg-accent-shade">
            Next
          </button>
        </Link>
      </form>
      <hr className="border-primary-1-tint" />
      <div className="mt-6 text-center">
        <p className="text-primary-2-shade">Already have an account?</p>
        <button className="text-primary-3-shade font-medium">Log in</button>
      </div>
    </div>
  );
};

(Info as any).getLayout = getSignupStepperLayout;

export default Info;
