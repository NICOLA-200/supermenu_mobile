import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-orange-400 justify-center gap-y-12 items-center p-4">
      {/* Search Bar */}
      <View className="w-full items-center max-w-md mb-8">
        <TextInput
          className="bg-white w-[80%] rounded-[0.7rem] px-4 py-3 text-gray-500"
          placeholder="Search for your preferred restaurant"
          placeholderTextColor="#9ca3af"
        />
        <Ionicons
          name="search"
          size={20}
          color="#f97316"
          style={{ position: 'absolute', right: 12, top: 8 }}
        />
      </View>

      {/* OR Text */}
      <Text className="text-black font-extrabold text-lg mb-4">or</Text>

      {/* QR Code Section */}
      <TouchableOpacity
        className="bg-white rounded-lg p-4 mb-4"
        onPress={() => router.push('/')} // Navigate to a QR scanner screen
      >
        <Ionicons name="qr-code" size={80} color="#000000" />
      </TouchableOpacity>

      {/* Scan, Pay & Enjoy Text */}
      <Text className="text-black  text-5xl font-bold ">Scan, Pay & Enjoy!</Text>
    </View>
  );
}