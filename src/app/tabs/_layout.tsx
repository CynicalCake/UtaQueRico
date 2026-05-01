import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { HomeIcon, MapIcon, UserRound } from "lucide-react-native";

export default function TabsLayout() {
  return (
    <>
    <StatusBar style="dark" />
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#E85D04",
        tabBarInactiveTintColor: "#9B8B7A",
        tabBarStyle: {
          borderTopWidth: 0.5,
          borderTopColor: "#F1EDE8",
          backgroundColor: "#FFFFFF",
          paddingTop: 2,
        },
        tabBarLabelStyle: {
          fontFamily: "Inter_500Medium",
          fontSize: 11,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="routes/index"
        options={{
          title: "Rutas",
          tabBarIcon: ({ color }) => <MapIcon size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => <UserRound size={22} color={color} />,
        }}
      />
    </Tabs>
    </>
  );
  
}