import MaterialIcon from 'components/MaterialIcon';
import { useSidebar } from 'libs/ui/sidebarContext';
import React from 'react';
import { MaterialIconType } from 'types/common';
import { ReactComponent as Logo } from '../assets/images/logo.svg';

const MobileHeader = () => {
  const [_, openSidebar] = useSidebar();

  return (
    <div className="hidden sm:flex items-center justify-between h-16 fixed top-0 z-10 w-full shadow-sidebar px-2">
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
