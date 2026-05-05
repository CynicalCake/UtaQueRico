import { useRouter } from "expo-router";
import { useDepartment } from "../core/context/DepartmentContext";
import LocationScreen from "../features/location/screens/LocationScreen";

export default function Home() {
  const router = useRouter();
  const { setDepartment } = useDepartment();

  const handleSelect = (department: { id: string; name: string, description: string, photo: string }) => {
    setDepartment(department);
    router.push("/tabs/home/indexHome");
  };

  return <LocationScreen onSelect={handleSelect} />;
}
