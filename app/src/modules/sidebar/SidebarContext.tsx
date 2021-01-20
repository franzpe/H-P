import React, { createContext, FC, useContext, useState } from 'react';
import { ChildrenProp } from 'types';

type Output = [boolean, (value: React.SetStateAction<boolean>) => void];

const SidebarContext = createContext<Output>([false, () => {}]);

export const SidebarMainProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return <SidebarContext.Provider value={[isOpen, setIsOpen] as Output}>{children}</SidebarContext.Provider>;
};

export const useMainSidebar = () => useContext(SidebarContext);

/**
 * Right sidebar
 */

const SidebarRightContext = createContext<Output>([false, () => {}]);

export const SidebarRightProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarRightContext.Provider value={[isOpen, setIsOpen] as Output}>{children}</SidebarRightContext.Provider>
  );
};

export const useRightSidebar = () => useContext(SidebarRightContext);

export const SidebarProvider = ({ children }: ChildrenProp) => (
  <SidebarMainProvider>
    <SidebarRightProvider>{children}</SidebarRightProvider>
  </SidebarMainProvider>
);

export default SidebarProvider;
