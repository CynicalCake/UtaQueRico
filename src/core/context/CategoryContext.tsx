import { Category } from "@/src/features/menu/types/Category";
import { createContext, useContext, useState } from "react";

type CategoryContextType = {
    selectedCategory: Category | null;
    setSelectedCategory: (category: Category | null) => void;
};

const CategoryContext = createContext<CategoryContextType | null >(null);

export const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    return (
        <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            {children}
        </CategoryContext.Provider>
    );
}

export const useCategory = () => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error("useCategory debe usarse dentro de CategoryProvider");
    }  
    return context;
}