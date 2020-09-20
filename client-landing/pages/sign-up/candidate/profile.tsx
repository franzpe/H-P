import React from 'react';
import { getSignupStepperLayout } from '../../../components/layouts/SignupStepperLayout';

const SideMenu = ({ hidden = false }) => {
  return (
    <aside style={hidden ? { visibility: 'hidden' } : {}}>
      <ul>
        <li>Languages</li>
        <li>Skills</li>
        <li>Profiles</li>
        <li>Websites</li>
        <li>Experience</li>
        <li>Education</li>
        <li>Volunteer Experience</li>
        <li>Resume</li>
      </ul>
    </aside>
  );
};

const Profile = () => {
  return (
    <div>
      <SideMenu />
      <div>
        <div>languages</div>
        <div>skills</div>
        <div>profiles</div>
      </div>
      <SideMenu hidden={true} />
    </div>
  );
};

(Profile as any).getLayout = getSignupStepperLayout;

export default Profile;
