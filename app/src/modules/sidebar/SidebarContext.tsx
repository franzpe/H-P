import React, { createContext, FC, useContext, useState } from 'react';

type Output = [boolean, (value: React.SetStateAction<boolean>) => void];

const SidebarContext = createContext<Output>([false, () => {}]);

const SidebarProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return <SidebarContext.Provider value={[isOpen, setIsOpen] as Output}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;

export const useSidebar = () => useContext(SidebarContext);
