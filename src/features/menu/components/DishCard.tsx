import { Image, Pressable, Text, View } from "react-native";

type DishCardProps = {
    name: string;
    restaurantName: string;
    department: string;
    distance?: string;
    rating?: string;
    imageUri: string;
    onPress?: () => void;
};

const DishCard = ({
    name,
    restaurantName,
    department,
    distance,
    rating,
    imageUri,
    onPress,
}: DishCardProps) => {
    return (
        <View className="flex-row overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image source={{ uri: imageUri }} className="h-full w-36 bg-slate-200" resizeMode="cover" />

            <View className="flex-1 gap-2 px-4 py-3">
                <View className="flex-row items-start justify-between gap-3">
                    <View className="flex-1">
                        <Text className="text-base font-semibold text-slate-900" numberOfLines={2}>
                            {name}
                        </Text>
                        <Text className="mt-1 text-sm text-slate-600" numberOfLines={2}>
                            Restaurante:{restaurantName}
                        </Text>
                    </View>

                    <Text className="text-sm font-bold text-amber-500">{rating}</Text>
                </View>

                <Text className="text-sm text-slate-500" numberOfLines={1}>
                    {department}
                </Text>
                <Text className="text-sm text-slate-500">{distance}</Text>

                <Pressable
                    onPress={onPress}
                    className="mt-1 self-end rounded-full bg-orange-500 px-4 py-2 active:opacity-80"
                >
                    <Text className="text-sm font-semibold text-white">Ver Ruta</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default DishCard;