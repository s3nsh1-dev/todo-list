import React, { createContext, useState, ReactNode } from "react";

// Types
interface GlobalContextType {
  intoFlag: boolean;
  setIntoFlag: (value: boolean) => void;
}

// Create context
const GlobalContext = createContext<GlobalContextType | null>(null);

// Provider component
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [intoFlag, setIntoFlag] = useState<boolean>(true);

  const contextValue: GlobalContextType = {
    intoFlag,
    setIntoFlag,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;

// the value u want to pass as the global value and the schema of the context that contains the global value is same
