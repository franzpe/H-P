import React from 'react';
import { getSignupStepperLayout } from '../../../components/layouts/SignupStepperLayout';

const EqualOpportunity = () => {
  return <div>Equal Opportunity</div>;
};

(EqualOpportunity as any).getLayout = getSignupStepperLayout;

export default EqualOpportunity;
