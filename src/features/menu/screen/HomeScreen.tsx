import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
    Image,
    Pressable,
    ScrollView,
    Text,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../shared/ui/Button";
import CategoryFilter from "../../menu/components/CategoryFilter";
import { GASTRO_ROUTES, TRENDING_DISHES } from "../data/mockData";

// HomeScreen.tsx
const HomeScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
            
            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 32 }}
            >
                {/* Header */}
                <View className="px-4 pt-4 pb-2">
                    <Text className="font-poppins text-2xl text-slate-900">
                        UtaQueRico
                    </Text>
                    <Text className="font-regular text-sm text-slate-500 mt-0.5">
                        CABECERA
                    </Text>
                </View>

                {/* Banner */}
                <LinearGradient
                    colors={["#E85D04", "#FB923C"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="rounded-xl p-6"
                >
                    <Text className="font-poppins text-3xl text-white mb-1">
                        Sabor Boliviano
                    </Text>
                    <Text className="font-regular text-sm text-white/90">
                        Descubre lo mejor de la gastronomía boliviana con nosotros
                    </Text>
                </LinearGradient>

                {/* Category Filter */}
                <View className="mt-3">
                    <Text className="font-poppins px-4 py-2 text-base text-slate-900">
                        ¿Qué se te antoja hoy?
                    </Text>
                    <CategoryFilter onSelect={(id) => console.log("filtro:", id)} />
                </View>

                {/* Platos en Tendencia */}
                <View className="mt-6 px-4">
                    <Text className="font-poppins text-base text-slate-900 mb-3">
                        Platos en Tendencia
                    </Text>
                    <View className="flex-row flex-wrap gap-3">
                        {TRENDING_DISHES.map((dish) => (
                            <View
                                key={dish.id}
                                style={{ width: "47%" }}
                                className="rounded-2xl overflow-hidden bg-slate-100"
                            >
                                <View className="relative">
                                    <Image
                                        source={dish.image}
                                        style={{ width: "100%", height: 130 }}
                                        resizeMode="cover"
                                    />
                                </View>
                                <View className="p-2.5">
                                    <Text
                                        className="font-medium text-xs text-slate-800 mb-2"
                                        numberOfLines={2}
                                    >
                                        {dish.name}
                                    </Text>
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        fullWidth
                                        onPress={() => router.push("/tabs/home/dishHome")}
                                    >
                                        Ver Ruta
                                    </Button>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Rutas Gastronómicas */}
                <View className="mt-5 px-4">
                    <View className="flex-row justify-between items-center mb-3">
                        <View>
                            <Text className="font-poppins text-base text-slate-900">
                                Rutas Gastronómicas
                            </Text>
                            <Text className="font-regular text-xs text-slate-400">
                                Experiencias curadas para ti
                            </Text>
                        </View>
                        <Button
                            variant="noborder"
                            size="sm"
                            onPress={() => router.push("/tabs/routes")}
                        >
                            Ver todas
                        </Button>
                    </View>

                    {GASTRO_ROUTES.map((route) => (
                        <Pressable
                            key={route.id}
                            onPress={() => router.push("/tabs/routes")}
                            className="rounded-2xl overflow-hidden active:opacity-90"
                            style={{ height: 180 }}
                        >
                            <Image
                                source={route.image}
                                className="absolute inset-0 w-full h-full"
                                resizeMode="cover"
                            />
                            <View
                                className="absolute inset-0"
                                style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
                            />
                            {/* Badge */}
                            <View className="absolute top-3 left-3 bg-primaryLt rounded-full px-3 py-1">
                                <Text className="font-medium text-xs text-white">
                                    {route.badge}
                                </Text>
                            </View>
                            {/* Info */}
                            <View className="absolute bottom-0 left-0 right-0 p-4">
                                <Text className="font-poppins text-white text-base">
                                    {route.title}
                                </Text>
                                <View className="flex-row items-center gap-3 mt-1">
                                    <Text className="font-regular text-white/80 text-xs">
                                        ⏱ {route.duration}
                                    </Text>
                                    <Text className="font-regular text-white/80 text-xs">
                                        ★ {route.rating} ({route.reviews} reviews)
                                    </Text>
                                </View>
                            </View>
                        </Pressable>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;