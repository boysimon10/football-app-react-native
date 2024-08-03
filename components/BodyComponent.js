import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { useLinkTo } from '@react-navigation/native';
import ScoreCardComponent from "./ScoreCardComponent";
import MatchCardComponent from "./MatchCardComponent";

export default function BodyComponent() {
  const linkTo = useLinkTo();

  return (
    <View className="mb-[175px]">
      <View className="">
        <View className="mt-2 mx-4">
          <Text className="font-bold text-xl">Derniers Matchs</Text>
        </View>
        <View className="">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="my-4 ml-4 flex flex-row">
              <ScoreCardComponent className="mx-2" />
            </View>
            <View className="my-4 mx-4 flex flex-row">
              <ScoreCardComponent className="mx-2" />
            </View>
            <View className="my-4 flex flex-row">
              <ScoreCardComponent className="mx-2" />
            </View>
          </ScrollView>
        </View>
      </View>
      <View className="m-4">
            <TouchableOpacity className="mb-4" onPress={() => linkTo('/MatchDetails')}>
              <MatchCardComponent />
            </TouchableOpacity>
        <TouchableOpacity onPress={() => linkTo('/MatchDetails')} className="mb-4">
          <MatchCardComponent />
        </TouchableOpacity>
        <View className="mb-4">
          <MatchCardComponent />
        </View>
      </View>
    </View>
  );
}
