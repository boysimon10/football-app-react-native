import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import ScoreCard from "./ScoreCard";

export default function BodyComponent() {
  return (
    <View className="mb-[175px]">
      <View className="mt-2 mx-4">
        <Text className="font-sans font-bold text-xl">Top League</Text>
      </View>
      <View className="">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row my-4">
            <TouchableOpacity className="bg-gray-200 w-14 h-14 rounded-full flex items-center justify-center  ml-4 mr-5">
              <Image
                source={{
                  uri: "https://media.api-sports.io/football/leagues/39.png",
                }}
                className="w-10 h-10"
              />
            </TouchableOpacity>

            <TouchableOpacity className="bg-gray-200 w-14 h-14 rounded-full flex items-center justify-center  mr-5">
              <Image
                source={{
                  uri: "https://media.api-sports.io/football/leagues/39.png",
                }}
                className="w-10 h-10"
              />
            </TouchableOpacity>

            <TouchableOpacity className="bg-gray-200 w-14 h-14 rounded-full flex items-center justify-center  mr-5">
              <Image
                source={{
                  uri: "https://media.api-sports.io/football/leagues/39.png",
                }}
                className="w-10 h-10"
              />
            </TouchableOpacity>

            <TouchableOpacity className="bg-gray-200 w-14 h-14 rounded-full flex items-center justify-center  mr-5">
              <Image
                source={{
                  uri: "https://media.api-sports.io/football/leagues/39.png",
                }}
                className="w-10 h-10"
              />
            </TouchableOpacity>

            <TouchableOpacity className="bg-gray-200 w-14 h-14 rounded-full flex items-center justify-center  mr-5">
              <Image
                source={{
                  uri: "https://media.api-sports.io/football/leagues/39.png",
                }}
                className="w-10 h-10"
              />
            </TouchableOpacity>

            <TouchableOpacity className="bg-gray-200 w-14 h-14 rounded-full flex items-center justify-center  mr-5">
              <Image
                source={{
                  uri: "https://media.api-sports.io/football/leagues/39.png",
                }}
                className="w-10 h-10"
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <View className="mx-4 flex-row justify-between">
        <Text className="font-sans font-bold text-xl">Live Match</Text>
        <TouchableOpacity>
          <Text className="text-gray-400 text-xl">See All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
