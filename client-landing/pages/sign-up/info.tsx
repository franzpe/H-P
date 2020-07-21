import React, { FC, useState } from 'react';
import cx from 'classnames';

import { getSignupStepperLayout, SignupStepProps } from '../../components/layouts/SignupStepperLayout';
import Link from 'next/link';
import Input from '../../components/forms/Input';
import Select from '../../components/forms/Select';

type Props = SignupStepProps;

const userTypesOptions = [
  { value: 'business', label: 'Small business' },
  { value: 'recruiter', label: 'Recruiter' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'other', label: 'Other' }
];

const Info: FC<Props> = ({ previousStep, nextStep }) => {
  const [option, setOption] = useState(null);

  return (
    <div className="max-w-sm mx-auto">
      <form>
        <div className="flex md:space-x-2 flex-wrap">
          <Input id="firstName" label="First Name" wrapperClassName="w-full md:flex-1" value="Frank" />
          <Input id="lastName" label="Last Name" wrapperClassName="w-full md:flex-1" />
        </div>
        <Select
          id="userType"
          value={option}
          onChange={selectedOption => setOption(selectedOption)}
          options={userTypesOptions}
          classNamePrefix="react-select"
          isSearchable={false}
          placeholder="Select User Type"
        />
        <Input id="companyName" label="Company" wrapperClassName="w-full" />
        <Input id="email" label="Company Email" value="" wrapperClassName="w-full" />
        <Input id="password" label="Password" value="" wrapperClassName="w-full" icon="visibility" />
        <Input
          id="passwordConfirm"
          label="Confirm Password"
          wrapperClassName="w-full"
          icon="visibility"
          error="Required"
        />
        <Link href={nextStep} as={nextStep}>
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
