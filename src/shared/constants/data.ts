import {
  Beef,
  Beer,
  Flame,
  IceCream,
  LucideIcon,
  Soup,
  Utensils,
  Zap,
} from "lucide-react-native";
import { ImageSourcePropType } from "react-native";

export type Departamento = {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  image: ImageSourcePropType;
};

export type Categoria = {
  id: string;
  name: string;
  icon: LucideIcon;
};

const emptyImage = require("@/src/assets/images/empty-image.jpg");

const depto = (slug: string): ImageSourcePropType => {
  const images: Record<string, ImageSourcePropType> = {
    santaCruz: require("@/src/assets/deptos/santa-cruz.jpg"),
    laPaz: require("@/src/assets/deptos/la-paz.png"),
    cochabamba: require("@/src/assets/deptos/cochabamba.jpg"),
    oruro: require("@/src/assets/deptos/oruro.png"),
    potosi: require("@/src/assets/deptos/potosi.png"),
    sucre: require("@/src/assets/deptos/sucre.jpg"),
    tarija: require("@/src/assets/deptos/tarija.jpg"),
    beni: require("@/src/assets/deptos/beni.jpg"),
    pando: require("@/src/assets/deptos/pando.png"),
  };
  return images[slug] ?? emptyImage;
};

export const DEPARTAMENTOS: Departamento[] = [
  {
    id: "1",
    name: "Santa Cruz",
    slug: "santaCruz",
    subtitle: "El corazón tropical",
    image: depto("santaCruz"),
  },
  {
    id: "2",
    name: "La Paz",
    slug: "laPaz",
    subtitle: "Ciudad del Cielo",
    image: depto("laPaz"),
  },
  {
    id: "3",
    name: "Cochabamba",
    slug: "cochabamba",
    subtitle: "Capital gastronómica",
    image: depto("cochabamba"),
  },
  {
    id: "4",
    name: "Oruro",
    slug: "oruro",
    subtitle: "Carnaval",
    image: depto("oruro"),
  },
  {
    id: "5",
    name: "Potosí",
    slug: "potosi",
    subtitle: "La Villa Imperial",
    image: depto("potosi"),
  },
  {
    id: "6",
    name: "Sucre",
    slug: "sucre",
    subtitle: "La Ciudad Blanca",
    image: depto("sucre"),
  },
  {
    id: "7",
    name: "Tarija",
    slug: "tarija",
    subtitle: "Capital de la uva",
    image: depto("tarija"),
  },
  {
    id: "8",
    name: "Beni",
    slug: "beni",
    subtitle: "La Amazonía boliviana",
    image: depto("beni"),
  },
  {
    id: "9",
    name: "Pando",
    slug: "pando",
    subtitle: "Selva y naturaleza",
    image: depto("pando"),
  },
];

export const CATEGORIAS: Categoria[] = [
  { id: "1", name: "Comida típica", icon: Utensils },
  { id: "2", name: "Comida callejera", icon: Flame },
  { id: "3", name: "Comida rápida", icon: Zap },
  { id: "4", name: "Parrillas / carnes", icon: Beef },
  { id: "5", name: "Sopas y caldos", icon: Soup },
  { id: "6", name: "Postres", icon: IceCream },
  { id: "7", name: "Bebidas tradicionales", icon: Beer },
];
