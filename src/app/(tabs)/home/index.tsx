// src/app/(tabs)/home/index.tsx
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: "Inicio" }} />
      <View>
        <Text>Home Screen</Text>
      </View>
    </>
  );
}
