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

const recruiterSteps: SignupStep[] = [
  { path: '/sign-up/recruiter/info', heading: 'Join Hackers & Painters', label: 'My Info' },
  { path: '/sign-up/recruiter/membership-plan', heading: 'Select Membership Plan', label: 'Membership Plan' },
  { path: '/sign-up/recruiter/payment', heading: 'Enter Payment Details', label: 'Payment' }
];

const candidateSteps: SignupStep[] = [
  { path: '/sign-up/candidate/info', heading: 'Join Hackers & Painters', label: 'Basic Info' },
  { path: '/sign-up/candidate/profile', heading: 'Create Your Profile', label: 'Your Profile' },
  {
    path: '/sign-up/candidate/equal-opportunity',
    heading: 'Equal Opportunities For Everyone',
    label: 'Equal Opportunity'
  }
];

const getAdjacentSteps = (step: number, steps: SignupStep[]) => {
  return {
    previousStep: step > 0 ? steps[step - 1].path : null,
    nextStep: step + 1 < steps.length ? steps[step + 1].path : null
  };
};

const getCurrStepIndex = (path: string, steps: SignupStep[]): number => {
  return steps.findIndex(s => path.endsWith(s.path));
};

const SignupStepperLayout = ({ children }) => {
  const router = useRouter();
  const steps = router.pathname.includes('/recruiter/') ? recruiterSteps : candidateSteps;
  const currStepIndex = getCurrStepIndex(router.pathname, steps);
  const currStep = currStepIndex > -1 ? steps[currStepIndex] : null;
  const { previousStep, nextStep } = getAdjacentSteps(currStepIndex, steps);

  return (
    <div className="relative ">
      {previousStep && (
        <Link href={previousStep} passHref={true}>
          <SignupBackBtn className="absolute" />
        </Link>
      )}
      <div className="w-full max-w-screen-xxl mx-auto">
        <div className="mx-auto max-w-xl w-full text-center mb-8">
          <h3 className="font-semibold mb-4 text-2xl md:text-4xl">{currStep.heading}</h3>
          <ProgressBar value={currStepIndex / (steps.length - 1)} labels={steps.map(s => s.label)} />
        </div>
        {cloneElement<SignupStepProps>(children, { previousStep, nextStep })}
      </div>
    </div>
  );
};

export const getSignupStepperLayout = page => getLayout(<SignupStepperLayout>{page}</SignupStepperLayout>);

export default SignupStepperLayout;
