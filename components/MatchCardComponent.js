import { Text, View, TouchableOpacity, Image } from "react-native";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid";

export default function MatchCardComponent() {
  return (
    <View className="h-32 w-full bg-white rounded-2xl shadow-sm">
      <View className="mx-4 mt-4 mb-2 flex flex-row justify-between items-center">
        <Text className=" font-semibold">
          Premier League • 08/08/2024
        </Text>
          <Text className=" text-red-500 text-xs font-semibold">FULL-TIME</Text>
      </View>
      <View className="flex flex-row justify-center mx-4">
        <View className="h-px bg-gray-200 w-full"></View>
      </View>
      <View className="flex flex-row justify-between mx-4 mt-4">
        <View className="flex flex-row items-center">
          <Image
            source={{
              uri: "https://media.api-sports.io/football/teams/38.png",
            }}
            className="w-6 h-6"
            resizeMode="contain"
          />
          <Text className="mx-2 text-gray-400">Watford</Text>
        </View>
        <View className="mx-4">
          <Text className="font-bold">2</Text>
        </View>
      </View>

      <View className="flex flex-row justify-end">
        <View className="h-px bg-gray-200 w-8 mx-5"></View>
      </View>

      <View className="flex flex-row justify-between mx-4 mt-2">
        <View className="flex flex-row items-center">
          <Image
            source={{
              uri: "https://media.api-sports.io/football/teams/50.png",
            }}
            className="w-6 h-6"
            resizeMode="contain"
          />
          <Text className="mx-2 text-gray-400">Man. City</Text>
        </View>
        <View className="mx-4">
          <Text className="font-bold">4</Text>
        </View>
      </View>
    </View>
  );
}
