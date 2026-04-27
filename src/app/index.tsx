import { useRouter } from "expo-router";
import LocationScreen from "../features/location/screens/LocationScreen";

export default function Home() {
  const router = useRouter();

  const handleSelect = (name: string) => {
    router.push("/categories");
  };

  return <LocationScreen onSelect={handleSelect} />;
}
