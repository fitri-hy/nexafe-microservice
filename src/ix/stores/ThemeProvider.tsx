import { ReactNode, createContext, useContext } from "react";
import { useTheme } from "./useTheme";

type ThemeContextType = {
  bg: string;
  text: string;
  darkMode: boolean;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { darkMode, toggle } = useTheme();

  const value = {
    darkMode,
    toggle,
    bg: darkMode ? "bg-slate-900" : "bg-slate-50",
    text: darkMode ? "text-neutral-200" : "text-neutral-700",
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeContext must be used within ThemeProvider");
  return context;
};
