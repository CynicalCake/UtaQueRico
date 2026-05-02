import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { CATEGORIAS } from "../../../shared/constants/data";

type Props = {
  onSelect?: (id: string | null) => void;
};

export default function CategoryFilter({ onSelect }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const handlePress = (id: string) => {
    const next = selected === id ? null : id;
    setSelected(next);
    onSelect?.(next);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="bg-slate-50 grow-0"
      contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 12, gap: 16 }}
    >
      {CATEGORIAS.map((cat) => {
        const isSelected = selected === cat.id;
        const Icon = cat.icon;

        return (
          <TouchableOpacity
            key={cat.id}
            onPress={() => handlePress(cat.id)}
            activeOpacity={0.8}
            className="items-center gap-2"
            style={{ width: 64 }}
          >
            <View
              className={`w-14 h-14 rounded-full items-center justify-center ${
                isSelected ? "bg-primaryTint" : "bg-slate-100"
              }`}
            >
              <Icon
                size={24}
                color={isSelected ? "#E85D04" : "#9B8B7A"}
                strokeWidth={2}
              />
            </View>
            <Text
              className={`text-xs text-center leading-tight ${
                isSelected ? "font-medium text-primary" : "font-regular text-muted"
              }`}
              numberOfLines={2}
            >
              {cat.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
