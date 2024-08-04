import { Text, View, TouchableOpacity, Image } from "react-native";
import {
  BellIcon,
  MagnifyingGlassIcon,
  ArrowLeftIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function DisplayComponent() {
  const navigation = useNavigation();
  return (
    <View className="bg-[#081121] h-60">
      <View className="mt-4">
        <View className="mx-10 mt-8 mb-6 flex flex-row items-center">
          <TouchableOpacity
            title="Back"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <ArrowLeftIcon size={25} color="#fff" />
          </TouchableOpacity>
          <View className="">
            <Text className="text-white font-bold text-xl pl-4">
              Details
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-center justify-center">
          <View className="h-auto w-[85%] bg-white rounded-3xl shadow-sm">
            <View className="flex flex-row items-center justify-between my-6 mx-12">
              <View className="">
                <Image
                  source={{
                    uri: "https://media.api-sports.io/football/teams/38.png",
                  }}
                  className="w-10 h-10"
                  resizeMode="contain"
                />
              </View>

              <View className="flex flex-row">
                <Text className="font-bold text-3xl">2</Text>
                <Text className="font-bold text-3xl">-</Text>
                <Text className="font-bold text-3xl">4</Text>
              </View>

              <View>
                <Image
                  source={{
                    uri: "https://media.api-sports.io/football/teams/50.png",
                  }}
                  className="w-10 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
