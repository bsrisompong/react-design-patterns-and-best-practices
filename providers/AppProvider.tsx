import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NavigationProgress } from "@mantine/nprogress";
import { Notifications } from "@mantine/notifications";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <MantineProvider>
      <ModalsProvider>
        <NavigationProgress />
        {children}
        <Notifications />
      </ModalsProvider>
    </MantineProvider>
  );
};

export default AppProvider;
