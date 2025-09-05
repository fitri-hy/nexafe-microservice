import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, useThemeContext } from "../ix/stores/ThemeProvider";

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <DarkWrapper>{children}</DarkWrapper>
    </ThemeProvider>
  </QueryClientProvider>
);

const DarkWrapper = ({ children }: { children: ReactNode }) => {
  const { darkMode } = useThemeContext();
  return <div className={darkMode ? "dark" : ""}>{children}</div>;
};
