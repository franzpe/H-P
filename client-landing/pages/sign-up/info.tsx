import React, { FC } from 'react';

import { getSignupStepperLayout, SignupStepProps } from '../../components/layouts/SignupStepperLayout';
import Link from 'next/link';
import Input from '../../components/forms/Input';

type Props = SignupStepProps;

const Info: FC<Props> = ({ previousStep, nextStep }) => {
  return (
    <div>
      <form>
        <div className="flex flex-wrap ">
          <Input id="firstName" label="First Name" value="" wrapperClassName="w-full md:w-auto md:mr-2" />
          <Input id="lastName" label="Last Name" value="" wrapperClassName="w-full md:w-auto md:ml-2" />
        </div>
      </form>
      <Link href={nextStep}>
        <a>membership plan</a>
      </Link>
    </div>
  );
};

(Info as any).getLayout = getSignupStepperLayout;

export default Info;
