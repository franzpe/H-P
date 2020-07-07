import React, { useState, FC } from 'react';

import { getSignupStepperLayout, SignupStepProps } from '../../components/layouts/SignupStepperLayout';
import Plans from '../../components/Plans';

type Props = SignupStepProps;

const MembershipPlan: FC<Props> = ({ previousStep, nextStep }) => {
  return <Plans href={nextStep} />;
};

(MembershipPlan as any).getLayout = getSignupStepperLayout;

export default MembershipPlan;
