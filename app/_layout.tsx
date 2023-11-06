import { SplashScreen, Stack, useRootNavigationState } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import RootLayout from "../components/RootLayout";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const rootNavigationState = useRootNavigationState();

  useEffect(() => {
    console.log(rootNavigationState?.key);
  }, [rootNavigationState?.key]);

  return (
    <>
      <StatusBar style="dark" />
      <RootLayout />
    </>
  );
}
