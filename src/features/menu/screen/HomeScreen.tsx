import { useRouter } from "expo-router";
import { Pressable, SafeAreaView, Text, View } from "react-native";

const HomeScreen = () =>{
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

                    <View className="gap-3">
                        <Text className="text-4xl font-extrabold leading-tight text-black">
                            Este es el Home del ruteo SIUUU
                        </Text>
                    </View>
                </View>

                <View className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/30">
                    <Text className="text-sm font-medium uppercase tracking-[0.2em] text-amber-200">
                        Sugerencia de hoy
                    </Text>
                    <Text className="mt-3 text-2xl font-bold text-black">
                        Arma tu primera experiencia visual
                    </Text>

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