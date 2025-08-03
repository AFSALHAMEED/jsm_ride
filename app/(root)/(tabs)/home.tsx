import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Rides from "@/app/(root)/(tabs)/rides";
import { useAuth } from "@clerk/clerk-expo";

const Home = () => {
  const { userId } = useAuth();
  return (
    <SafeAreaView>
      <Text>Home {userId}</Text>
    </SafeAreaView>
  );
};
export default Home;
