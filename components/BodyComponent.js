import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import ScoreCardComponent from './ScoreCardComponent';

export default function BodyComponent() {
  return (
    <View className="mb-[175px] bg-gray-50">
      <View className="mt-2 mx-4 h-20">
        <Text className="font-bold text-xl">Top League</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          
        </ScrollView>
      </View>
    </View>
  );
}
