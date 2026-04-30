
import { Stack } from "expo-router";

export default function HomeStackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" options={{ title: "Home" }} />
      <Stack.Screen name="dishHome" options={{ title: "Dish Home" }} />
    </Stack>
  );
}