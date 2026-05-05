import { CheckCircle } from "lucide-react-native";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Department } from "../types/Department";

export function DeptoCard({
  item,
  selected,
  onPress,
}: {
  item: Department;
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
        source={{ uri: item.photo }}
        className="h-44 rounded-2xl overflow-hidden justify-end"
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
          <Text className="  text-white text-xm font-bold leading-tight">
            {item.name}
          </Text>
          <View className="self-start rounded-full bg-primary px-1.5 py-0.5 mb-2">
            <Text className="text-[10px] font-semibold text-white">
              {item.description}
            </Text>
          </View>

          
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
