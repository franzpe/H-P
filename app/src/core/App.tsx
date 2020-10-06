import SidebarProvider from 'libs/ui/sidebarContext';
import React from 'react';

import MobileHeader from './MobileHeader';
import Routes from './routes';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div className="app">
      <SidebarProvider>
        <MobileHeader />
        <Sidebar />
      </SidebarProvider>
      <Routes />
    </div>
  );
};

export default App;
