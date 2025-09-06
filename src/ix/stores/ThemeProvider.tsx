import { ReactNode, createContext, useContext } from "react";
import { useTheme } from "./useTheme";
import { colors } from "../../ui/tokens/colors";

type ThemeContextType = {
  darkMode: boolean;
  toggle: () => void;
  colors: typeof tokenColors.light;
  base: { background: string; text: string; card: string; border: string };
  secondary: { background: string; text: string; border: string };
  accent: { background: string; text: string };
  primary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { darkMode, toggle } = useTheme();
  const theme = darkMode ? colors.dark : colors.light;

  const value: ThemeContextType = {
    darkMode,
    toggle,
    base: theme.base,
    secondary: theme.secondary,
    accent: theme.accent,
    primary: theme.primary,
    success: theme.success,
    danger: theme.danger,
    warning: theme.warning,
    info: theme.info,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeContext must be used within ThemeProvider");
  return context;
};
