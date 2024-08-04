import { View, ScrollView, Text } from 'react-native';
import HeaderComponent from '../components/HeaderComponent.js';
import BodyComponent from '../components/BodyComponent';
import DisplayComponent from '../components/DisplayComponent'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function MatchDetailsScreen() { 
    return (
        <View>
            <DisplayComponent />
            <SafeAreaView>
                <View className="">
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View className="flex flex-row mx-8"> 
                            <View className="">
                                <Text className="mr-8 relative">Summary</Text>
                                <Text className="font-bold text-blue-600">_______</Text>
                            </View>
                            <Text className="mr-8 relative">Stats</Text>
                            <Text className="mr-8 relative">LineUp</Text>
                            <Text className="mr-8 relative">H24</Text>
                            <Text className="mr-8 relative">Commentary</Text>
                            <Text className="mr-8 relative">H24</Text>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    );
}