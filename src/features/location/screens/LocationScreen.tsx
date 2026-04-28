import { DEPARTAMENTOS, Departamento } from "@/src/shared/constants/data";
import { UtensilsCrossed } from "lucide-react-native";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DeptoCard } from "../components/DeptoCard";

export default function LocationScreen({
  onSelect,
}: {
  onSelect: (name: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (item: Departamento) => {
    setSelected(item.id);
    onSelect(item.name);
  };

  return (
    <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-background">
      <View className="flex-1 bg-background">
        <FlatList
          data={DEPARTAMENTOS}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
          ListHeaderComponent={
            <View className="items-center mb-8 mt-2">
              <View className="rounded-full bg-primary/20 p-3 mb-4 ">
                <UtensilsCrossed color="#733E00" />
              </View>
              <Text className="text-3xl font-bold text-slate-900 text-center">
                Sabor Boliviano
              </Text>
              <Text className="text-secondary/50 font-poppins text-sm text-center mt-2 px-6">
                Descubre los tesoros culinarios en{"\n"}el corazón de Bolivia.
              </Text>
              <Text className="text-secondary font-poppins text-lg mt-6 self-start">
                Selecciona tu ciudad
              </Text>
            </View>
          }
          ListFooterComponent={
            <View className="flex-row items-center justify-center mt-4 gap-1">
              <Text className="text-slate-400 text-xs">ⓘ</Text>
              <Text className="text-slate-400 text-xs">
                Puedes cambiar tu ubicación luego.
              </Text>
            </View>
          }
          renderItem={({ item }) => (
            <DeptoCard
              item={item}
              selected={selected === item.id}
              onPress={() => handleSelect(item)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
