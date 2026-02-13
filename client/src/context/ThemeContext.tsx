import { createContext, useEffect, useMemo, useState } from "react";

export type ThemeMode = "dark" | "light";

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
  setMode: (mode: ThemeMode) => void;
}

export const THEME_STORAGE_KEY = "todo_theme_mode";

const getInitialMode = (): ThemeMode => {
  try {
    const storedMode = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedMode === "dark" || storedMode === "light") {
      return storedMode;
    }
  } catch {
    return "dark";
  }

  return "dark";
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  }, [mode]);

  const value = useMemo(
    () => ({
      mode,
      toggleTheme: () => setMode((prev) => (prev === "dark" ? "light" : "dark")),
      setMode,
    }),
    [mode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
