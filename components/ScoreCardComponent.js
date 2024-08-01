import { Text, View, TouchableOpacity, Image } from "react-native";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid";

export default function ScoreCardComponent() {
  return (
    <View className="h-32 w-64 bg-white rounded-2xl shadow-sm">
      <Text className="mx-4 mt-4 mb-2 font-semibold">Premier League</Text>
      <View className="flex flex-row justify-center">
        <View className="h-px bg-gray-200 w-56"></View>
      </View>
      <View className="flex flex-row justify-between mx-4 mt-4">
        <View className="flex flex-row items-center">
          <Image
            source={{
              uri: "https://media.api-sports.io/football/teams/33.png",
            }}
            className="w-6 h-6"
            resizeMode="contain"
          />
          <Text className="mx-2 text-gray-400">Man. United</Text>
        </View>
        <View className="mx-4">
          <Text className="font-bold">7</Text>
        </View>
      </View>

      <View className="flex flex-row justify-end">
        <View className="h-px bg-gray-200 w-8 mx-5"></View>
      </View>

      <View className="flex flex-row justify-between mx-4 mt-2">
        <View className="flex flex-row items-center">
          <Image
            source={{
              uri: "https://media.api-sports.io/football/teams/40.png",
            }}
            className="w-6 h-6"
            resizeMode="contain"
          />
          <Text className="mx-2 text-gray-400">Liverpool</Text>
        </View>
        <View className="mx-4">
          <Text className="font-bold">1</Text>
        </View>
      </View>
    </View>
  );
}
