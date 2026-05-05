import { useCategory } from "@/src/core/context/CategoryContext";
import { useDepartment } from "@/src/core/context/DepartmentContext";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { MapPin } from "lucide-react-native";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../shared/ui/Button";
import CategoryFilter from "../../menu/components/CategoryFilter";
import { GASTRO_ROUTES, TRENDING_DISHES } from "../data/mockData";

const HomeScreen = () => {
    const router = useRouter();
    const { department } = useDepartment();
    const { setSelectedCategory } = useCategory();

    return (
        <SafeAreaView className="flex-1 bg-white" edges={["top"]}>  
        <ScrollView
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 32 }}
        >
            <View className="flex-1 bg-white">
                {department && (
                    <LinearGradient
                        colors={["#E85D04", "#FB923C"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        className="rounded-xl p-6"
                    >
                        <View className="flex-row items-center gap-2 mb-2">
                            <MapPin size={20} color="white" />
                            <Text className="text-white text-lg font-poppins">{department.name}</Text>
                        </View>
                        <Text className="font-regular text-sm text-white/90">
                            Descubre lo mejor de la gastronomía de {department.name} con nosotros
                        </Text>
                    </LinearGradient>
                )}

                <View className="mt-3">
                    <Text className="font-poppins px-4 py-2 text-base text-slate-900">
                        ¿Qué se te antoja hoy?
                    </Text>
                    <CategoryFilter
                        onSelect={(cat) => {
                            if (!cat) return
                            setSelectedCategory(cat);
                            router.push("/tabs/home/dishHome");
                        }}
                    />
                </View>

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
                                    //onPress={() => router.push("/tabs/home/dishHome")}
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
                            onPress={() => router.push("./tabs/routes")}
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
                            <View className="absolute top-3 left-3 bg-primary rounded-full px-3 py-1">
                                <Text className="font-medium text-xs text-white">
                                    {/* {route.badge} */}
                                    POPULAR
                                </Text>
                            </View>
                            {/* Info */}
                            <View className="absolute bottom-0 left-0 right-0 p-4">
                                <Text className="font-poppins text-white text-base">
                                    {route.title}
                                </Text>
                                {/* <View className="flex-row items-center gap-3 mt-1">
                                    <Text className="font-regular text-white/80 text-xs">
                                        ⏱ {route.duration}
                                    </Text>
                                    <Text className="font-regular text-white/80 text-xs">
                                        ★ {route.rating} ({route.reviews} reviews)
                                    </Text>
                                </View> */}
                            </View>
                        </Pressable>
                    ))}
                </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;