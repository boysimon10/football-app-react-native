import { Text, View, TouchableOpacity } from "react-native";
import { Bars3Icon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

export default function HeaderComponent() {
  return (
    <View className="h-auto bg-white">
      <View className="m-4 flex-row justify-between items-center">
        <TouchableOpacity>
          <Bars3Icon size={25} color="#000000" />
        </TouchableOpacity>
      <Text className="font-bold text-xl">
        KickScore
      </Text>
      <TouchableOpacity>
      <MagnifyingGlassIcon size={25} color="#000000" />
      </TouchableOpacity>
      </View>
    </View>
  );
}
