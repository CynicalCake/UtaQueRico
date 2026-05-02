import { supabase } from "@/src/core/supabase/client";
import { Department } from "../types/Department";


export async function getDepartments() {
  const { data, error } = await supabase.rpc("get_departments");
  console.log("DATA:", JSON.stringify(data));
  console.log("ERROR:", JSON.stringify(error));
  
  if (error) {
    throw error;
  }
  return (data ?? []) as Department[];
}