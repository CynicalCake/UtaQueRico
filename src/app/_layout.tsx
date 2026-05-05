import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import { router, SplashScreen, Stack, usePathname } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryProvider } from "../core/context/CategoryContext";
import { DepartmentProvider } from "../core/context/DepartmentContext";
import "./global.css";

SplashScreen.preventAutoHideAsync();

const SCREEN_TITLES: Record<string, string> = {
  "/tabs/home": "Inicio",
  "/tabs/routes": "Rutas",
  "/tabs/profile": "Tu perfil",
  "/tabs/home/dishHome": "¿Qué se te antoja hoy?",
};

const RootLayout = () => {
  const pathname = usePathname();
  const [fontsLoaded, error] = useFonts({
    Poppins_600SemiBold: Poppins_600SemiBold,
    Inter_400Regular: Inter_400Regular,
    Inter_500Medium: Inter_500Medium,
  });

  useEffect(() => {
    if (error) console.log(error);
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  const currentTitle =
    SCREEN_TITLES[pathname] ??
    Object.entries(SCREEN_TITLES).find(
      ([key]) => pathname.startsWith(key) && key !== "/",
    )?.[1] ??
    "";

  return (
    <DepartmentProvider>
      <CategoryProvider>
        <SafeAreaView className="flex-1 bg-white" edges={["top", "left"]}>
          <Stack
            screenOptions={{
              animation: "slide_from_right",
              header: ({ navigation }) => {
                const canGoBack = navigation.canGoBack();

                return (
                  <View className="bg-white pt-2 pb-2 px-4 flex-row items-center justify-between">
                    <View className="w-10">
                      {canGoBack && (
                        <TouchableOpacity onPress={() => router.back()}>
                          <ChevronLeft color="#F97316" size={30} />
                        </TouchableOpacity>
                      )}
                    </View>
                    <Text className="text-primary text-xl font-bold font-poppins text-center flex-1">
                      {currentTitle}
                    </Text>
                    <View className="w-10" />
                  </View>
                );
              },
            }}
          >
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="tabs" options={{ headerShown: true }} />
          </Stack>
        </SafeAreaView>
      </CategoryProvider>
    </DepartmentProvider>
  );
};

export default RootLayout;
