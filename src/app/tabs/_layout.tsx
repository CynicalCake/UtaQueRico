import { Tabs } from "expo-router";
import { HomeIcon, MapIcon, UserRound } from "lucide-react-native";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#FBBF24', headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="routes/index"
        options={{
          title: 'Rutas',
          tabBarIcon: ({ color }) => <MapIcon size={28} color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <UserRound size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}