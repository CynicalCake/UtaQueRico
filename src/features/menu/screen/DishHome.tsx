import { useCategory } from "@/src/core/context/CategoryContext";
import { useDepartment } from "@/src/core/context/DepartmentContext";
import { supabase } from "@/src/core/supabase/client";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "react-native-url-polyfill/auto";
import CategoryFilter from "../components/CategoryFilter";
import { getDishes } from "../api/dishApi";
import DishCard from "../components/DishCard";
import DishSearchBar from "../components/DishSearchBar";
import { DishItem } from "../types/Dish";


const DishHome = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState("");
    const { selectedCategory, setSelectedCategory } = useCategory();
    const { department } = useDepartment();
    const [dishes, setDishes] = useState<DishItem[]>([]); // Renombrado de 'post' a 'dishes'

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
        <SafeAreaView className="flex-1 bg-white" edges={["top"]}>  
            <ScrollView contentContainerClassName="gap-4 px-4 pb-8">
                <View className="flex-row items-center justify-between pt-1">
                    <Text className="text-2xl font-bold text-primary">Sabores de  {department?.name ?? "Bolivia"}</Text>
                    <Pressable
                        onPress={() => navigation.goBack()}
                        className="rounded-full bg-orange-100 p-2"
                    >
                        <Ionicons name="arrow-back" size={24} color="#FB923C" />
                    </Pressable>
                </View>

                <DishSearchBar value={search} onChangeText={setSearch} />
                <View className="mt-3">
                    <CategoryFilter
                        onSelect={(cat) => setSelectedCategory(cat)} 
                    />
                </View>

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