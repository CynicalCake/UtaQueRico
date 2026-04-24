import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView>
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-poppins">Test</Text>
      <Text className="text-xl font-inter">Test</Text>
      <Text className="text-sm font-medium">Test</Text>
    </View>
    </SafeAreaView>
  );
}