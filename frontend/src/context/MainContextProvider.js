import React, { createContext, useState } from 'react';

export const MainContext = createContext();

export function MainContextProvider({ children }) {
  const [isNewsDrawerOpen, setIsNewsDrawerOpen] = useState(false);

  return (
    <MainContext.Provider value={{ isNewsDrawerOpen, setIsNewsDrawerOpen }}>
      {children}
    </MainContext.Provider>
  );
}
