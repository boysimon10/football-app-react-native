import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import MatchDetailsScreen from "./screens/MatchDetailsScreen";
import AppNavigation from "./navigation/appNavigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  );
}
