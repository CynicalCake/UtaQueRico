import { supabase } from "@/src/core/supabase/client";
import { Department } from "../types/Department";


export async function getDepartments() {
  const { data, error } = await supabase.rpc("get_departments");
  if (error) {
    throw error;
  }
  return (data ?? []) as Department[];
}