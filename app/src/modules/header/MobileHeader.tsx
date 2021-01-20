import React from 'react';
import MaterialIcon from 'components/icons/MaterialIcon';
import { useMainSidebar, useRightSidebar } from 'modules/sidebar/SidebarContext';

import { ReactComponent as Logo } from 'assets/images/logo.svg';

const MobileHeader = () => {
  const [, openMainSidebar] = useMainSidebar();
  const [, openRightSidebar] = useRightSidebar();

  return (
    <div className="hidden md:flex items-center justify-between h-16 fixed top-0 z-10 w-full shadow-sidebar px-2">
      <MaterialIcon
        type="round"
        className="text-center text-3xl text-primary-1-shade cursor-pointer"
        onClick={() => openMainSidebar(true)}
      >
        menu
      </MaterialIcon>
      <Logo />
      <MaterialIcon
        type="round"
        className="text-center text-3xl text-primary-1-shade cursor-pointer"
        onClick={() => openRightSidebar(true)}
      >
        read_more
      </MaterialIcon>
    </div>
  );
};

export default MobileHeader;
