import { Departamento } from "@/src/shared/constants/data";
import { CheckCircle } from "lucide-react-native";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export function DeptoCard({
  item,
  selected,
  onPress,
}: {
  item: Departamento;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      className="w-[48%] mb-3"
    >
      <ImageBackground
        source={item.image}
        className="h-40 rounded-2xl overflow-hidden justify-end"
        imageStyle={{ borderRadius: 16 }}
      >
        <View className="absolute inset-0 bg-black/40 rounded-2xl" />

        {selected && (
          <View className="absolute top-3 right-3">
            <CheckCircle size={22} color="#F97316" fill="white" />
          </View>
        )}

        {selected && (
          <View className="absolute inset-0 rounded-2xl border-2 border-primary" />
        )}

        <View className="p-3">
          <Text className="text-white text-base font-bold leading-tight">
            {item.name}
          </Text>
          <Text className="text-white/80 text-xs mt-0.5">{item.subtitle}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
