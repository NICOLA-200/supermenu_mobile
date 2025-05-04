import React from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoadingScreen() {
    const router = useRouter()
  return (
    <View className="flex-1  bg-orange-400 justify-center items-center">
      
      <TouchableOpacity
        onPress={() => {
            router.push("/explore")
        }}
      className="pb-16 text-5xl font-bold text-white">
        <Text className=' text-5xl font-bold'>
        <Text className='text-black '>Supa</Text>
       <Text className='text-white'>Menu</Text>
       </Text>
        </TouchableOpacity>
    </View>
  );
}