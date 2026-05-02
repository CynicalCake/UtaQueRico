import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

type DishSearchBarProps = {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
};

const DishSearchBar = ({
    value,
    onChangeText,
    placeholder = "¿Qué se te antoja hoy?",
}: DishSearchBarProps) => {
    return (
        <View className="flex-row items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <Feather name="search" size={18} color="#94A3B8" />
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#94A3B8"
                className="flex-1 text-base text-slate-900"
            />
            {/* <Feather name="sliders" size={18} color="#F97316" /> */}
        </View>
    );
};

export default DishSearchBar;