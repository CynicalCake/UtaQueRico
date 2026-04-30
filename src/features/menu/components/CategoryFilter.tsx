import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { CATEGORIAS } from "../../../shared/components/data";

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
      className="bg-background/30 grow-0"
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 16,
      }}
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
                isSelected ? "bg-primary/20" : "bg-secondary/5"
              }`}
            >
              <Icon
                size={24}
                color={isSelected ? "#F97316" : "#733E00"}
                strokeWidth={1.5}
              />
            </View>

            <Text
              className={`text-xs text-center leading-tight ${
                isSelected ? "text-primary font-semibold" : "text-secondary/50"
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
