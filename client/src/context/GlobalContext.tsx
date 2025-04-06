import React, { createContext, useState, ReactNode } from "react";

// Types
interface GlobalContextType {
  intoFlag: boolean;
  setIntoFlag: (value: boolean) => void;
}

// Create context
export const GlobalContext = createContext<GlobalContextType | null>(null);

// Provider component
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [intoFlag, setIntoFlag] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ intoFlag, setIntoFlag }}>
      {children}
    </GlobalContext.Provider>
  );
};
