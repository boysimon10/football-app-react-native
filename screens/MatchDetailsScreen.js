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
                <View>

                </View>
            </SafeAreaView>
        </View>
    );
}