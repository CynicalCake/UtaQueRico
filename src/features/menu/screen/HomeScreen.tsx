import { useRouter } from "expo-router";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import CategoryFilter from '../../menu/components/CategoryFilter';

const HomeScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-slate-950">
            <View className="flex-1 justify-between px-6 py-8">
                <View className="gap-4">
                    <View className="self-start rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2">
                        <Text className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
                            UtaQueRico
                        </Text>
                    </View>
                    <CategoryFilter onSelect={(id) => console.log("filtro:", id)} />
                    
                </View>

                <View className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/30">
                    <Pressable
                        onPress={() => router.push("/tabs/home/dishHome")}
                        className="mt-5 items-center rounded-2xl bg-amber-400 px-5 py-4 active:opacity-80"
                    >
                        <Text className="text-base font-bold text-slate-950">
                            Botón principal
                        </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>

    );

}

export default HomeScreen;