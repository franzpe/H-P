import React, { cloneElement } from 'react';

import { useRouter } from 'next/router';
import { getLayout } from './SiteLayout';
import Link from 'next/link';
import ProgressBar from '../ProgressBar';
import SignupBackBtn from '../buttons/SignupBackBtn';

type SignupStep = {
  path: string;
  heading: string;
  label: string;
};

export type SignupStepProps = {
  previousStep: string;
  nextStep: string;
};

const steps: SignupStep[] = [
  { path: '/sign-up/info', heading: 'Join Hackers & Painters', label: 'My Info' },
  { path: '/sign-up/membership-plan', heading: 'Select Membership Plan', label: 'Membership Plan' },
  { path: '/sign-up/payment', heading: 'Enter Payment Details', label: 'Payment' }
];

const getAdjacentSteps = (step: number) => {
  return {
    previousStep: step > 0 ? steps[step - 1].path : null,
    nextStep: step + 1 < steps.length ? steps[step + 1].path : null
  };
};

const getCurrStepIndex = (path: string): number => {
  return steps.findIndex(s => path.endsWith(s.path));
};

const SignupStepperLayout = ({ children }) => {
  const router = useRouter();
  const currStepIndex = getCurrStepIndex(router.pathname);
  const currStep = currStepIndex > -1 ? steps[currStepIndex] : null;
  const { previousStep, nextStep } = getAdjacentSteps(currStepIndex);

  return (
    <div className="relative">
      {previousStep && (
        <Link href={previousStep} passHref={true}>
          <SignupBackBtn className="absolute" />
        </Link>
      )}
      <div className="flex flex-col items-center justify-start w-full max-w-screen-xl mx-auto">
        <div className="max-w-xl w-full text-center mb-8">
          <h3 className="font-semibold mb-4">{currStep.heading}</h3>
          <ProgressBar value={currStepIndex / (steps.length - 1)} labels={steps.map(s => s.label)} />
        </div>
        {cloneElement<SignupStepProps>(children, { previousStep, nextStep })}
      </div>
    </div>
  );
};

export const getSignupStepperLayout = page => getLayout(<SignupStepperLayout>{page}</SignupStepperLayout>);

export default SignupStepperLayout;
