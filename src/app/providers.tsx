import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, useThemeContext } from "../ix/stores/ThemeProvider";
import { StrictMode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: 1,
    },
    mutations: {
      onError: (error) => console.error("Mutation error:", error),
    },
  },
});

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <DarkWrapper>{children}</DarkWrapper>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);

interface DarkWrapperProps {
  children: ReactNode;
  className?: string;
}

const DarkWrapper = ({ children, className = "" }: DarkWrapperProps) => {
  const { darkMode } = useThemeContext();
  return <div className={`${darkMode ? "dark" : ""} ${className}`}>{children}</div>;
};
