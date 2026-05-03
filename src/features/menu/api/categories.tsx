import { supabase } from "@/src/core/supabase/client";
import { Category } from "../types/Category";

export async function getCategoriesByDepartment(
  departmentId: string
) {
  const { data, error } = await supabase.rpc(
    "get_categories_by_department",
    {
      p_department_id: departmentId,
    }
  );
  if (error) {throw error;}
  return (data ?? []) as Category[];
}