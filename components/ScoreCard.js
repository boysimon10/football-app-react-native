import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import 'nativewind';

class ScoreCard extends Component {
  render() {
    return (
      <View className="bg-indigo-900 m-4 p-2 rounded-xl">
        <Text className="text-white text-lg font-bold">Premier League</Text>
        <Text className="text-gray-300 mb-4">Game Week 3</Text>
        <View className="flex-row justify-between items-center">
          <View className="items-center">
            <Image
              source={{ uri: 'https://example.com/manutd-logo.png' }}
              className="w-10 h-10"
            />
            <Text className="text-white mt-2">Man Utd</Text>
          </View>
          <Text className="text-pink-500 text-2xl font-bold">90+5</Text>
          <View className="items-center">
            <Image
              source={{ uri: 'https://example.com/forest-logo.png' }}
              className="w-10 h-10"
            />
            <Text className="text-white mt-2">Forest</Text>
          </View>
        </View>
        <Text className="text-white text-center text-4xl font-bold my-4">3 : 2</Text>
      </View>
    );
  }
}

export default ScoreCard;
