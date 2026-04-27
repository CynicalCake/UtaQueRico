import SelectionTile from "@/src/features/location/components/SelectionTile";
import { CATEGORIAS } from "@/src/shared/constants/data";
import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";

// const CATEGORIAS_MOCK = [
//   { id: "1", name: "Comida típica", icon: Utensils },
//   { id: "2", name: "Comida callejera", icon: Flame },
//   { id: "3", name: "Comida rápida", icon: Zap },
//   { id: "4", name: "Parrillas / carnes", icon: Beef },
//   { id: "5", name: "Sopas y caldos", icon: Soup },
//   { id: "6", name: "Postres", icon: IceCream },
//   { id: "7", name: "Bebidas tradicionales", icon: Beer },
// ];

export default function CategoriesScreen() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: "¿Qué se te antoja?" }} />
      <View className="flex-1 bg-background">
        <ScrollView contentContainerStyle={{ padding: 24 }}>
          <View className="flex-row flex-wrap justify-between">
            {CATEGORIAS.map((cat) => (
              <SelectionTile
                key={cat.id}
                label={cat.name}
                Icon={cat.icon}
                isGrid={true}
                onPress={() => console.log("Filtrar por:", cat.name)}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}
