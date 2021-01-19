import React from 'react';
import { Route, Switch } from 'react-router';

import { AccountRoutes } from 'constants/routes';
import GeneralInformation from './general/GeneralInformation';
import MembershipSettings from './membership/MembershipSettings';
import AccountLayout from './AccountLayout';

const AccountRoot = () => {
  return (
    <AccountLayout>
      <Switch>
        <Route path={AccountRoutes.GENERAL} component={GeneralInformation} />
        <Route path={AccountRoutes.MEMBERSHIP} component={MembershipSettings} />
      </Switch>
    </AccountLayout>
  );
};

export default AccountRoot;
