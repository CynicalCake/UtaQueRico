import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView>
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl font-poppins text-primary">Test</Text>
      <Text className="text-2xl font-inter text-secondary">Test</Text>
      <Text className="text-2xl font-medium text-tertiary">Test</Text>
    </View>
    </SafeAreaView>
  );
}