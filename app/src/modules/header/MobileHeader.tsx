import MaterialIcon from 'components/icons/MaterialIcon';
import { useSidebar } from 'modules/sidebar/SidebarContext';
import React from 'react';

import { MaterialIconType } from 'types';
import { ReactComponent as Logo } from 'assets/images/logo.svg';

const MobileHeader = () => {
  const [, openSidebar] = useSidebar();

  return (
    <div className="hidden md:flex items-center justify-between h-16 fixed top-0 z-10 w-full shadow-sidebar px-2">
      <MaterialIcon
        type={MaterialIconType.Round}
        className="text-center text-3xl text-primary-1-shade cursor-pointer"
        onClick={() => openSidebar(true)}
      >
        menu
      </MaterialIcon>
      <Logo />
      <MaterialIcon className="text-3xl invisible">menu</MaterialIcon>
    </div>
  );
};

export default MobileHeader;
