import { useNavigation } from "@react-navigation/native";
import { useEffect, useMemo, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";

import { supabase } from "@/src/core/supabase/client";
import "react-native-url-polyfill/auto";
import DishCard from "../components/DishCard";
import DishSearchBar from "../components/DishSearchBar";


interface Dish {
    id: string;
    name: string;
    description: string;
    is_typical: boolean;
    is_vegeterian: boolean;
    fhoto:string;
}

const DishHome = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todas");

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

        return dishes.filter((dish) => {
            const matchesCategory = selectedCategory === "Todas" || dish.is_typical.toString() === selectedCategory;
            const matchesSearch =
                query.length === 0 ||
                dish.name.toLowerCase().includes(query) ||
                dish.description.toLowerCase().includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [search, selectedCategory, dishes]);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView contentContainerClassName="gap-4 px-4 pb-8">
                <View className="flex-row items-center justify-between pt-2">
                    <Text className="text-2xl font-bold text-orange-500">Sabor Boliviano</Text>
                    <Pressable
                        onPress={() => navigation.goBack()}
                        className="rounded-full px-2 py-1"
                    >
                        <Text className="text-2xl text-orange-400">←</Text>
                    </Pressable>
                </View>

                <DishSearchBar value={search} onChangeText={setSearch} />

                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-3 py-1">
                    <Pressable
                        onPress={() => setSelectedCategory("Todas")}
                        className={`items-center rounded-full px-4 py-3 ${selectedCategory === "Todas" ? "bg-orange-100" : "bg-slate-100"}`}
                    >
                        <Text className="text-sm font-semibold text-slate-700">Todas</Text>
                    </Pressable>
                    {/* Aquí puedes agregar más categorías si es necesario */}
                </ScrollView>

                <View className="gap-4">
                    {filteredDishes.map((dish) => (
                        <DishCard
                            key={dish.id}
                            name={dish.name}
                            restaurant={dish.description}
                            address={dish.is_typical ? "Típico" : "No típico"}
                            distance={dish.is_vegeterian ? "Vegetariano" : "No vegetariano"}
                            rating={"4.5"} // Puedes ajustar esto según los datos disponibles
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