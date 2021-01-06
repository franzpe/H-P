import React from 'react';
import { Route, Switch } from 'react-router';

import Tab from 'components/tabs/Tab';
import Tabs from 'components/tabs/Tabs';
import { AccountRoutes } from 'constants/routes';
import GeneralInformation from './general/GeneralInformation';
import MembershipSettings from './membership/MembershipSettings';

/**
 * Delete Account - Put somewhere below
 */

const AccountPage = () => {
  return (
    <>
      <Tabs>
        <Tab to={AccountRoutes.GENERAL}>General</Tab>
        <Tab to={AccountRoutes.MEMBERSHIP}>Membership</Tab>
        {/* Spacer */}
        <div className="flex-1 border-b-2 border-primary-1-tint" />
      </Tabs>
      <section className="py-10">
        <Switch>
          <Route path={AccountRoutes.GENERAL} component={GeneralInformation} />
          <Route path={AccountRoutes.MEMBERSHIP} component={MembershipSettings} />
        </Switch>
      </section>
    </>
  );
};

export default AccountPage;
