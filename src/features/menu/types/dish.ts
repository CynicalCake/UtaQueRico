export type DishItem = {
  restaurant_id: string;
  restaurant_name: string;
  restaurant_description: string;
  restaurant_address: string | null; // Cambiado de 'address' a 'restaurant_address' para coincidir con la consulta SQL
  dish_id: string;
  dish_name: string;
  dish_photo: string;
  dish_description: string;
  department_name: string;
};