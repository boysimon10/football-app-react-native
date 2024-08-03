import { View, ScrollView } from "react-native";
import HeaderComponent from "../components/HeaderComponent.js";
import BodyComponent from "../components/BodyComponent";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <View>
      <SafeAreaView>
        <HeaderComponent />
        <ScrollView showsVerticalScrollIndicator={false}>
          <BodyComponent />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
