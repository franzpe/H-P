import SidebarProvider from 'modules/sidebar/SidebarContext';
import React from 'react';

import { ChildrenProp } from 'types';
import MobileHeader from '../header/MobileHeader';
import Sidebar from '../sidebar/Sidebar';

const Layout = ({ children }: ChildrenProp) => {
  return (
    <div className="app">
      <SidebarProvider>
        <MobileHeader />
        <Sidebar />
      </SidebarProvider>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
