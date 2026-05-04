import { useDepartment } from "@/src/core/context/DepartmentContext";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CATEGORY_ICONS, DEFAULT_ICON } from "../../../shared/constants/data";
import { getCategoriesByDepartment } from "../api/categories";
import { Category } from "../types/Category";

type Props = {
  onSelect?: (id: string | null) => void;
};

export default function CategoryFilter({  onSelect }: Props) {
  const { department } = useDepartment();
  const [selected, setSelected] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  const handlePress = (id: string) => {
    const next = selected === id ? null : id;
    setSelected(next);
    onSelect?.(next);
  };

  useEffect(() => {
    let isMounted = true;

    async function loadCategories() {
      if (!department?.id) {
        setCategories([]);
        setSelected(null);
        return;
      }
      setLoading(true);
      try {
        const items = await getCategoriesByDepartment(department?.id);
        if (isMounted) {
          setCategories(items);
          setSelected(null);
        }
      } catch (error) {
        console.error("No se pudieron cargar las categorías", error);
        if (isMounted) setCategories([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadCategories();
    return () => { isMounted = false; };
  }, [department?.id]);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="bg-slate-50 grow-0"
      contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 12, gap: 16 }}
    >
      {loading ? (
        <View className="min-h-16 min-w-full items-center justify-center py-2">
          <ActivityIndicator color="#E85D04" />
          <Text className="mt-2 text-xs text-slate-500">Cargando categorías...</Text>
        </View>
      ) : categories.length === 0 ? (
        <View className="min-h-16 min-w-full items-center justify-center py-2">
          <Text className="text-xs text-slate-500 text-center">
            Selecciona una ciudad para ver sus categorías.
          </Text>
        </View>
      ) : (
        categories.map((cat) => {
          const isSelected = selected === cat.id;
          const Icon = CATEGORY_ICONS[cat.name] ?? DEFAULT_ICON;

          return (
            <TouchableOpacity
              key={cat.id}
              onPress={() => handlePress(cat.id)}
              activeOpacity={0.8}
              className="items-center gap-2"
              style={{ width: 72 }}
            >
              <View
                className={`w-14 h-14 rounded-full items-center justify-center ${isSelected ? "bg-primaryTint" : "bg-slate-100"
                  }`}
              >
                <Icon
                  size={24}
                  color={isSelected ? "#E85D04" : "#9B8B7A"}
                  strokeWidth={2}
                />
              </View>
              <Text
                className={`text-xs text-center leading-tight ${isSelected ? "font-medium text-primary" : "font-regular text-muted"
                  }`}
                numberOfLines={2}
              >
                {cat.name}
              </Text>
            </TouchableOpacity>
          );
        })
      )}
    </ScrollView>
  );
}