import { DEPARTAMENTOS } from "@/src/shared/constants/data";
import { MapPin } from "lucide-react-native";
import { FlatList, Text, View } from "react-native";
import SelectionTile from "../components/SelectionTile";

export default function LocationScreen({
  onSelect,
}: {
  onSelect: (name: string) => void;
}) {
  return (
    // Ya no necesitas edges=['top'] aquí porque la cabecera ocupa ese lugar
    <View className="flex-1 bg-background">
      <View className="p-6">
        <Text className="text-2xl font-bold text-slate-800 mb-6">
          ¿Dónde te encuentras?
        </Text>
        <FlatList
          data={DEPARTAMENTOS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SelectionTile
              label={item.name}
              onPress={() => onSelect(item.name)}
              Icon={MapPin}
            />
          )}
        />
      </View>
    </View>
  );
}
