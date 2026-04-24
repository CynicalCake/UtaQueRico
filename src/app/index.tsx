import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView>
    <View className="px-4 pt-6">

        {/* titulos */}
        <Text className="text-3xl font-poppins text-black">
          Explorar comida
        </Text>

         {/* Subtitulos1 */}
        <Text className="text-xl font-medium text-primary mt-2">
          Categorías
        </Text>

        {/* Subtitulos2 */}
        <Text className="text-base font-inter text-secondary mt-2">
          Descubre platos y rutas gastronómicas en tu ciudad
        </Text>

        {/* texto normal */}
        <Text className="text-base font-inter text-black mt-2">
          Elige entre comida típica, rápida o callejera
        </Text>

        {/* texto pequeño */}
        <Text className="text-sm font-inter text-tertiary mt-4">
          Recomendado para ti
        </Text>

      </View>
    </SafeAreaView>
  );
}