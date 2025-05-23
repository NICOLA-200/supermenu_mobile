import React from 'react';
import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function LoadingScreen() {
  return (
    <View className="flex-1 bg-orange-400 justify-center items-center">
      <ActivityIndicator size="large" color="#ffffff" />
      <Text className="mt-4 text-4xl font-extrabold text-white">Super <Text className='text-orange-500'>Menu</Text></Text>
    </View>
  );
}