import React, { FC } from 'react';

import { getSignupStepperLayout, SignupStepProps } from '../../../components/layouts/SignupStepperLayout';
import Plans from '../../../components/Plans';

type Props = SignupStepProps;

const MembershipPlan: FC<Props> = ({ previousStep, nextStep }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <Plans href={nextStep} />
    </div>
  );
};

(MembershipPlan as any).getLayout = getSignupStepperLayout;

export default MembershipPlan;
