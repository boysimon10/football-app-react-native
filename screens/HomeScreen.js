import { View, ScrollView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent.js';
import BodyComponent from '../components/BodyComponent';

export default function HomeScreen() { 
    return (
        <View>
            <HeaderComponent />
            <ScrollView showsVerticalScrollIndicator={false}>
                <BodyComponent/>
            </ScrollView>
        </View>
    );
}