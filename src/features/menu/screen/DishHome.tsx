import { useMemo, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";

import DishCard from "../components/DishCard";
import DishSearchBar from "../components/DishSearchBar";

// const categories = [
//     { label: "Comida típica", icon: "🍛" },
//     { label: "Comida callejera", icon: "🌮" },
//     { label: "Comida rápida", icon: "🍔" },
//     { label: "Parrillas", icon: "🍖" },
//     { label: "Sopas", icon: "🍲" },
// ];

const dishes = [
    {
        id: "1",
        name: "Silpancho",
        restaurant: "Doña Chorchi",
        address: "Cochabamba",
        distance: "1.2 km de ti",
        rating: "4.8",
        category: "Comida típica",
        imageUri: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: "2",
        name: "Anticuchos",
        restaurant: "Calle 25 de mayo y 16 de julio",
        address: "Cochabamba",
        distance: "1.2 km de ti",
        rating: "4.8",
        category: "Comida callejera",
        imageUri: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: "3",
        name: "Hamburguesa clásica",
        restaurant: "Fast Burger",
        address: "Cochabamba",
        distance: "2.0 km de ti",
        rating: "4.6",
        category: "Comida rápida",
        imageUri: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: "4",
        name: "Parrillada mixta",
        restaurant: "La Estancia",
        address: "Cochabamba",
        distance: "3.1 km de ti",
        rating: "4.9",
        category: "Parrillas",
        imageUri: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=400&q=80",
    },
];

const DishHome = ()=>{
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todas");

    const filteredDishes = useMemo(() => {
        const query = search.trim().toLowerCase();

        return dishes.filter((dish) => {
            const matchesCategory = selectedCategory === "Todas" || dish.category === selectedCategory;
            const matchesSearch =
                query.length === 0 ||
                dish.name.toLowerCase().includes(query) ||
                dish.restaurant.toLowerCase().includes(query) ||
                dish.address.toLowerCase().includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [search, selectedCategory]);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView contentContainerClassName="gap-4 px-4 pb-8">
                <View className="flex-row items-center justify-between pt-2">
                    <Text className="text-2xl font-bold text-orange-500">Sabor Boliviano</Text>
                    <Pressable className="rounded-full px-2 py-1">
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
                    {/* {categories.map((category) => {
                        const isActive = selectedCategory === category.label;

                        return (
                            <Pressable
                                key={category.label}
                                onPress={() => setSelectedCategory(category.label)}
                                className={`items-center rounded-full px-4 py-3 ${isActive ? "bg-orange-100" : "bg-slate-100"}`}
                            >
                                <Text className="text-xl">{category.icon}</Text>
                                <Text className="mt-1 text-center text-sm font-medium text-slate-700">
                                    {category.label}
                                </Text>
                            </Pressable>
                        );
                    })} */}
                </ScrollView>

                <View className="gap-4">
                    {filteredDishes.map((dish) => (
                        <DishCard
                            key={dish.id}
                            name={dish.name}
                            restaurant={dish.restaurant}
                            address={dish.address}
                            distance={dish.distance}
                            rating={dish.rating}
                            imageUri={dish.imageUri}
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
}

export default DishHome;