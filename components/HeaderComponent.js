import { Text, View, TouchableOpacity, Image } from "react-native";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid";

export default function HeaderComponent() {
  return (
    <View className="h-auto bg-white mt-2">
      <View className="m-4 flex-row items-center justify-between">
        <View className="flex-row">
          <Image source={require("../assets/ball.png")} className="w-8 h-8" />
          <Text className="ml-2 font-bold text-2xl">XtraFoot</Text>
        </View>
        <View className="flex-row">
          <TouchableOpacity className="bg-white shadow  rounded-full p-2 mr-3">
            <MagnifyingGlassIcon size={25} color="#000"/>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white shadow-md  rounded-full p-2">
            <BellIcon size={25} color="#000"/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
