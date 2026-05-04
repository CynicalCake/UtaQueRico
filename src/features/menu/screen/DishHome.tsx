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
import DishCard from "../components/DishCard";
import DishSearchBar from "../components/DishSearchBar";

interface Dish {
    id: string;
    name: string;
    description: string;
    is_typical: boolean;
    is_vegeterian: boolean;
    fhoto: string;
}

const DishHome = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState("");
    const { selectedCategory, setSelectedCategory } = useCategory();
    const { department } = useDepartment();
    const [dishes, setDishes] = useState<Dish[]>([]); // Renombrado de 'post' a 'dishes'

    useEffect(() => {
        const fetchDishes = async () => {
            console.log('Fetching data from Supabase...');
            console.log('Supabase URL:', supabase.from('dish').select('*').toString()); // Agrega este log

            const { data, error } = await supabase.from('dish').select('*');

            if (error) {
                console.log('Error fetching data:', error.message);
            } else {
                console.log('Data fetched:', data);
                setDishes(data as Dish[]);
            }
        };

        fetchDishes();
    }, []);

    console.log(dishes);

    const filteredDishes = useMemo(() => {
        const query = search.trim().toLowerCase();
        if (!query) return dishes;
        return dishes.filter(
            (dish) =>
                dish.name.toLowerCase().includes(query) ||
                dish.description.toLowerCase().includes(query)
        );
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
                            key={dish.id}
                            name={dish.name}
                            restaurant={dish.description}
                            imageUri={dish.fhoto} // Cambia esto si tienes una URL de imagen
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