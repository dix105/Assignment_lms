import { Stack } from "expo-router";

export default function RootLayoutNav() {
  return (
    <Stack initialRouteName="loader">
      <Stack.Screen name="loader" options={{ headerShown: false }} />
      <Stack.Screen
        name="(dashboard)/index"
        options={{ headerTitle: "My Learning" }}
      />
    </Stack>
  );
}
