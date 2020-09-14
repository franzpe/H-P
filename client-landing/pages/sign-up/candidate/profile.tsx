import React from 'react';
import { getSignupStepperLayout } from '../../../components/layouts/SignupStepperLayout';

const Profile = () => {
  return <div>Profile</div>;
};

(Profile as any).getLayout = getSignupStepperLayout;

export default Profile;
