import { useRouter } from "expo-router";
import {
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from "react-native";
import CategoryFilter from "../../menu/components/CategoryFilter";
import { GASTRO_ROUTES, TRENDING_DISHES } from "../data/mockData";

const HomeScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 32 }}
            >
                {/* Header */}
                <View className="px-4 pt-4 pb-2">
                    <Text className="text-2xl font-bold text-slate-900">
                        UtaQueRico 🍽️
                    </Text>
                    <Text className="text-sm text-slate-500 mt-0.5">
                        Descubrí lo mejor de Bolivia
                    </Text>
                </View>

                {/* Category Filter */}
                <View className="mt-2">
                    <CategoryFilter
                        onSelect={(id) => console.log("filtro:", id)}
                    />
                </View>

                {/* Rutas Gastronómicas */}
                <View className="mt-5 px-4">
                    <View className="flex-row justify-between items-center mb-3">
                        <View>
                            <Text className="text-base font-bold text-slate-900">
                                Rutas Gastronómicas
                            </Text>
                            <Text className="text-xs text-slate-400">
                                Experiencias curadas para ti
                            </Text>
                        </View>
                        <Pressable>
                            <Text className="text-sm font-semibold text-amber-500">
                                Ver todas
                            </Text>
                        </Pressable>
                    </View>

                    {/* Featured Route Card */}
                    {GASTRO_ROUTES.map((route) => (
                        <Pressable
                            key={route.id}
                            onPress={() =>
                                router.push("/tabs/routes")
                            }
                            className="rounded-2xl overflow-hidden active:opacity-90"
                            style={{ height: 180 }}
                        >
                            <Image
                                source={route.image}
                                className="absolute inset-0 w-full h-full"
                                resizeMode="cover"
                            />
                            {/* Gradient overlay */}
                            <View
                                className="absolute inset-0"
                                style={{
                                    backgroundColor: "rgba(0,0,0,0.45)",
                                }}
                            />
                            {/* Badge */}
                            <View className="absolute top-3 left-3 bg-amber-400 rounded-full px-3 py-1">
                                <Text className="text-xs font-black text-slate-900 tracking-widest">
                                    {route.badge}
                                </Text>
                            </View>
                            {/* Info */}
                            <View className="absolute bottom-0 left-0 right-0 p-4">
                                <Text className="text-white font-bold text-base">
                                    {route.title}
                                </Text>
                                <View className="flex-row items-center gap-3 mt-1">
                                    <Text className="text-white/80 text-xs">
                                        ⏱ {route.duration}
                                    </Text>
                                    <Text className="text-white/80 text-xs">
                                        ★ {route.rating} ({route.reviews}{" "}
                                        reviews)
                                    </Text>
                                </View>
                            </View>
                        </Pressable>
                    ))}
                </View>

                {/* Platos en Tendencia */}
                <View className="mt-6 px-4">
                    <Text className="text-base font-bold text-slate-900 mb-3">
                        Platos en Tendencia
                    </Text>
                    <View className="flex-row flex-wrap gap-3">
                        {TRENDING_DISHES.map((dish) => (
                            <View
                                key={dish.id}
                                style={{ width: "47%" }}
                                className="rounded-2xl overflow-hidden bg-slate-100"
                            >
                                {/* Dish Image */}
                                <View className="relative">
                                    <Image
                                        source={dish.image}
                                        style={{ width: "100%", height: 130 }}
                                        resizeMode="cover"
                                    />
                                    {/* Heart */}
                                    <Pressable className="absolute top-2 right-2 bg-white/80 rounded-full w-7 h-7 items-center justify-center">
                                        <Text className="text-xs">🤍</Text>
                                    </Pressable>
                                </View>

                                {/* Info */}
                                <View className="p-2.5">
                                    <Text
                                        className="text-xs font-semibold text-slate-800 mb-2"
                                        numberOfLines={2}
                                    >
                                        {dish.name}
                                    </Text>
                                    <Pressable
                                        onPress={() =>
                                            router.push("/tabs/home/dishHome")
                                        }
                                        className="bg-primary rounded-xl py-2 items-center active:opacity-80"
                                    >
                                        <Text className="text-xs font-bold text-white">
                                            Ver Ruta
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;