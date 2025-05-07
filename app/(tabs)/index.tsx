import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store'; 

export default function HomeScreen() {
  const router = useRouter();
 const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.navigate("/(auth)/login")
  //   }
  // },[isAuthenticated])

  

  return (
    isAuthenticated ? (
    <View className="flex-1 bg-orange-400 justify-center gap-y-12 items-center p-4">
      {/* Search Bar */}
      <View className="w-full items-center max-w-md bg-white pr-12 rounded-lg mb-8">
        <TextInput
          className="bg-white w-[80%] rounded-[1.3rem] px-4  py-3 text-gray-500"
          placeholder="Search for your preferred restaurant"
          placeholderTextColor="#9ca3af"
        />
        <Ionicons
          name="search"
          size={20}
          color="#f97316"
          style={{ position: 'absolute', right: 5, top: 8 }}
        />
      </View>

      {/* OR Text */}
      <Text className="text-black font-extrabold text-xl mb-4">or</Text>

      {/* QR Code Section */}
      <TouchableOpacity
        className="bg-white rounded-lg p-4 mb-4"
        onPress={() => router.push('/')} // Navigate to a QR scanner screen
      >
        <Ionicons name="qr-code" size={80} color="#000000" />
      </TouchableOpacity>

      {/* Scan, Pay & Enjoy Text */}
      <Text className="text-black  text-3xl font-bold ">Scan, Pay & Enjoy!</Text>
    </View>
    ) : (
      <View className='flex flex-1 justify-center items-center'>
        <Text className='text-neutral-500 text-2xl  mb-8'>you need to log in first </Text>
          <TouchableOpacity
          onPress={() => {
            router.replace("/(auth)/login")
          }}
          className='p-5 m-4 bg-orange-400 rounded-lg shadow'
          >
            <Text className='text-white font-bold'>Go to login</Text>
          </TouchableOpacity>
      </View>
    )
  );
}