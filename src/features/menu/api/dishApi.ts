import { supabase } from "@/src/core/supabase/client";
import { DishItem } from "../types/Dish";

export const getDishes = async(dep:string, category:string): Promise<DishItem[]> =>{
    const { data, error } = await supabase.rpc(
    'get_dishes_by_dep_and_category',
    {
      dep_name: dep,
      category_name: category,
    }
  );

  if (error) {
    console.error('Error:', error);
    throw error;
  }

  return data as DishItem[];
}