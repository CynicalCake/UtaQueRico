import {
  Beef, Coffee, Flame, HamburgerIcon, IceCream, LucideIcon, Soup, Utensils
} from "lucide-react-native";


export const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "Típico de aquí": Utensils,
  "Comida callejera": Flame,
  "Comida rápida": HamburgerIcon,
  "Parrillas": Beef,
  "Sopas y caldos": Soup,
  "Postres": IceCream,
  "Desayunos": Coffee,
};
export const DEFAULT_ICON = Utensils;