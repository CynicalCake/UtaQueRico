import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getDepartments } from "../api/departaments";
import { DeptoCard } from "../components/DeptoCard";
import { Department } from "../types/Department";

export default function LocationScreen({
  onSelect,
}: {
  onSelect: (name: string) => void;
}) {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadDepartments() {
      try {
        const items = await getDepartments();

        if (isMounted) {
          setDepartments(items);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadDepartments();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSelect = (item: Department) => {
    setSelected(item.id);
    onSelect(item.name);
  };

  return (
    <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-background">
      <View className="flex-1 bg-white ">
        <FlatList
          data={departments}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
          ListEmptyComponent={
            <View className="items-center justify-center py-10">
              <Text className="text-slate-500 text-sm">
                {loading
                  ? "Cargando departamentos..."
                  : "No se encontraron departamentos."}
              </Text>
            </View>
          }
          ListHeaderComponent={
            <View className="items-center mb-8 mt-2">
              
                <Image
                  source={require("../../../assets/logo-uta-que-rico.png")}
                  style={{ width: 130, height: 100 }}
                />
              
              {/* <Text className="text-3xl font-bold text-slate-900 text-center">
                Sabor Boliviano
              </Text> */}
              <Text className="text-muted font-poppins text-sm mt-4 self-center text-center">
                Descubre los tesoros gastronómicos de Bolivia
              </Text>
              <Text className="text-textDark font-poppins text-lg mt-6 self-start">
                Selecciona tu ciudad
              </Text>
            </View>
          }
          ListFooterComponent={
            <View className="flex-row items-center justify-center mt-4 gap-1">
              <Text className="text-slate-400 text-xs">ⓘ</Text>
              <Text className="text-slate-400 text-xs">
                Puedes cambiar tu ubicación luego.
              </Text>
            </View>
          }
          renderItem={({ item }) => (
            <DeptoCard
              item={item}
              selected={selected === item.id}
              onPress={() => handleSelect(item)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
