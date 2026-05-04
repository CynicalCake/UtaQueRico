import { useNavigation } from "@react-navigation/native";
import { useEffect, useMemo, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import "react-native-url-polyfill/auto";
import { getDishes } from "../api/dishApi";
import DishCard from "../components/DishCard";
import DishSearchBar from "../components/DishSearchBar";
import { DishItem } from "../types/Dish";


const DishHome = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todas");
    const [dishes, setDishes] = useState<DishItem[]>([]);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDishes('Cochabamba', 'Típico de aquí');
        console.log("Respuesta de la API:", data); // Verificar los datos devueltos por la API
        setDishes(data);
        console.log("Datos establecidos en el estado:", data);
      } catch (err) {
        console.error("Error al consumir la API:", err); // Verificar si hay errores
      }
    };

    fetchData();
  }, []); // Dependencias del useEffect

    console.log(dishes);

    const filteredDishes = useMemo(() => {
        const query = search.trim().toLowerCase();

        return dishes.filter((dish) => {
            return (
                query.length === 0 ||
                dish.dish_name.toLowerCase().includes(query) ||
                (dish.dish_description ?? "").toLowerCase().includes(query)
        );
        });
    }, [search, dishes]);


    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView contentContainerClassName="gap-4 px-4 pb-8">
                <View className="flex-row items-center justify-between pt-14">
                    <Text className="text-2xl font-bold text-primary">Sabor Boliviano</Text>
                    <Pressable
                        onPress={() => navigation.goBack()}
                        className="rounded-full bg-orange-100 p-2"
                    >
                        <Ionicons name="arrow-back" size={24} color="#FB923C" />
                    </Pressable>
                </View>

                <DishSearchBar value={search} onChangeText={setSearch} />

                

                <View className="gap-4">
                    {filteredDishes.map((dish) => (
                        <DishCard
                            key={dish.dish_id}
                            name={dish.dish_name}
                            restaurantName={dish.restaurant_name}
                            department={dish.department_name}
                            imageUri={dish.dish_photo} // Cambia esto si tienes una URL de imagen
                            onPress={() => undefined}
                        />
                    ))}

                    {filteredDishes.length === 0 ? (
                        <View className="rounded-2xl border border-dashed border-slate-300 px-4 py-8">
                            <Text className="text-center text-slate-500">
                                No encontramos platos con ese filtro.
                            </Text>
                        </View>
                    ) : null}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DishHome;