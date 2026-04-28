import CategoryFilter from "@/src/features/categories/components/CategoryFilter";
import { Stack, useLocalSearchParams } from "expo-router";
import { MapPin } from "lucide-react-native";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const { ciudad } = useLocalSearchParams<{ ciudad: string }>();

  return (
    <>
      <Stack.Screen options={{ headerTitle: "Inicio" }} />
      <View className="flex-1 bg-white">
        {ciudad && (
          <View className=" bg-primary rounded-b-3xl flex-row  items-center gap-2 px-7 py-4">
            <MapPin size={20} color="white" />
            <Text className="text-white text-lg font-poppins">{ciudad}</Text>
          </View>
        )}

        <CategoryFilter onSelect={(id) => console.log("filtro:", id)} />
        <Text>Home Screen</Text>
      </View>
    </>
  );
}
