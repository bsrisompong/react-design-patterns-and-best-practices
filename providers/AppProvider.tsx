import React from "react";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NavigationProgress } from "@mantine/nprogress";
import { Notifications } from "@mantine/notifications";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClient } from "lib/react-query";
import { theme } from "config/theme";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <NavigationProgress />
        <QueryClientProvider client={queryClient}>
          {children}

          <React.Suspense fallback={null}>
            <ReactQueryDevtools initialIsOpen={false} position="right" />
          </React.Suspense>
        </QueryClientProvider>
        <Notifications />
      </ModalsProvider>
    </MantineProvider>
  );
};

export default AppProvider;
