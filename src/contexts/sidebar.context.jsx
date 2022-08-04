import { createContext, useState } from 'react';

export const SidebarContext = createContext({
  isSidebarOpen: true,
  setIsSidebarOpen: () => {},
});

export const SideBarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const value = {
    isSidebarOpen,
    setIsSidebarOpen,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
