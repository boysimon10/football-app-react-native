import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import ScoreCardComponent from "./ScoreCardComponent";

export default function BodyComponent() {
  return (
    <View className="mb-[175px] bg-gray-50 ">
      <View className="mt-2 mx-4">
        <Text className="font-bold text-xl">Derniers Match</Text>
      </View>
      <View className="">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="my-4 mx-4 flex flex-row">
            <ScoreCardComponent className="mx-2"/>
          </View>
          <View className="my-4 mx-2 flex flex-row">
            <ScoreCardComponent className="mx-2"/>
          </View>
          <View className="my-4 mx-2 flex flex-row">
            <ScoreCardComponent className="mx-2"/>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
