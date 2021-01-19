import React from 'react';

import Tab from 'components/tabs/Tab';
import Tabs from 'components/tabs/Tabs';
import { AccountRoutes } from 'constants/routes';
import { ChildrenProp } from 'types';

const AccountLayout = ({ children }: ChildrenProp) => {
  return (
    <>
      <Tabs>
        <Tab to={AccountRoutes.GENERAL}>General</Tab>
        <Tab to={AccountRoutes.MEMBERSHIP}>Membership</Tab>
        <div className="flex-1 border-b-2 border-primary-1-tint" />
      </Tabs>
      <section className="py-10">{children}</section>
    </>
  );
};

export default AccountLayout;
