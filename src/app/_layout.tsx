import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { Poppins_600SemiBold, } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import React, { useEffect } from 'react';
import "./global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'Poppins_600SemiBold': Poppins_600SemiBold,
    'Inter_400Regular': Inter_400Regular,
    'Inter_500Medium': Inter_500Medium
  });

  useEffect(() => {
    if (error) console.log(error);
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }
  return <Slot />;
  // return (
  //   <Stack screenOptions={{ headerShown: false }} />
  // );
}

export default RootLayout