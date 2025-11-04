"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [screen, setScreen] = useState("home");
  return (
    <AppContext.Provider value={{ screen, setScreen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
