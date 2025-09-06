import { create } from "zustand";

type ThemeState = {
  darkMode: boolean;
  toggle: () => void;
};

export const useTheme = create<ThemeState>((set) => ({
  darkMode: typeof window !== "undefined"
    ? localStorage.getItem("darkMode") === "true"
    : false,
  toggle: () =>
    set((state) => {
      const newMode = !state.darkMode;
      localStorage.setItem("darkMode", String(newMode));
      return { darkMode: newMode };
    }),
}));
