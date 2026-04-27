import { LucideIcon } from "lucide-react-native"; // Importamos el tipo para TypeScript
import { Text, TouchableOpacity, View } from "react-native";

interface SelectionTileProps {
  label: string;
  onPress: () => void;
  Icon?: LucideIcon | string;
  isGrid?: boolean;
}

export default function SelectionTile({
  label,
  onPress,
  Icon,
  isGrid,
}: SelectionTileProps) {
  const renderIcon = () => {
    if (!Icon) return null;

    if (typeof Icon === "string") {
      return <Text style={{ fontSize: isGrid ? 32 : 24 }}>{Icon}</Text>;
    }
    const LucideIconComponent = Icon;
    return (
      <LucideIconComponent
        size={isGrid ? 30 : 24}
        color="#E31C19"
        strokeWidth={2.5}
      />
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.1}
      className={`bg-white border border-gray-100 rounded-3xl p-5 mb-4 shadow-sm items-center 
        ${isGrid ? "w-[48%]" : "w-full flex-row"} active:border-primary `}
    >
      <View
        className={` rounded-full items-center justify-center 
        ${isGrid ? "w-16 h-16 mb-3" : "w-12 h-12 mr-4"}`}
      >
        {renderIcon()}
      </View>

      <Text className="text-slate-800 font-bold text-base text-center">
        {label}
      </Text>
    </TouchableOpacity>
  );
}
