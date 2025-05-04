import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function LoginScreen() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleProceed = async () => {
    // Mark app as opened
    // await AsyncStorage.setItem('hasOpened', 'true');
    // Navigate to the main app (tabs)
    // router.replace('/(tabs)');
  };

  const handleHome = () => {
    // Navigate to a sign-in screen (placeholder)
    router.replace('/home');
  };

  const handleSign = () => {
    // Navigate to a register screen (placeholder)
    router.push('/login');
  };


  return (
    <View className="flex-1">
      {/* Orange top background */}
      <View className="absolute top-0 left-0 right-0 h-1/4 bg-orange-400 " />
      
      {/* Content */}
      <View className="flex-1 bg-white rounded-t-[4rem] space-y-3 mt-16 px-6">
        {/* Logo */}
        <Text className="text-4xl font-bold text-center mt-8">
          <Text className="text-black">Supa</Text>
          <Text className="text-orange-500">Menu</Text>
        </Text>

        {/* Welcome Text */}
        <Text className="text-2xl font-bold text-black text-center mt-6">Welcome ...</Text>
        <Text className="text-gray-500 text-center mt-2">Please fill in the information</Text>

        {/* Input Fields */}
        <View className="mt-8">
          {/* Full Name */}
          <View className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-4">
            <Ionicons name="person-outline" size={20} color="gray" />
            <TextInput
              className="flex-1 ml-2 text-black"
              placeholder="Full Name"
              placeholderTextColor="gray"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          {/* Phone Number */}
          <View className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-4">
            <Ionicons name="call-outline" size={20} color="gray" />
            <TextInput
              className="flex-1 ml-2 text-black"
              placeholder="Phone Number"
              placeholderTextColor="gray"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>

          {/* Email */}
          <View className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-4">
            <Ionicons name="mail-outline" size={20} color="gray" />
            <TextInput
              className="flex-1 ml-2 text-black"
              placeholder="Your Email"
              placeholderTextColor="gray"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>
        </View>

        {/* Proceed Button */}
        <TouchableOpacity
          className="bg-orange-500 rounded-lg py-3 mt-4"
          onPress={handleProceed}
        >
          <Text className="text-white text-center text-lg font-semibold">Proceed</Text>
        </TouchableOpacity>

        {/* OR Divider */}
        <Text className="text-gray-500 text-center my-4">OR</Text>

        {/* Sign In Text and Button */}
        <Text className="text-gray-500 text-center">If you have a PMG account</Text>
        <TouchableOpacity
          className="bg-orange-500 rounded-lg py-3 mt-4"
          onPress={handleHome}
        >
          <Text className="text-white text-center text-lg font-semibold">Sign In</Text>
        </TouchableOpacity>

        {/* Register Link */}
        <TouchableOpacity onPress={handleSign} className="mt-4">
          <Text className="text-center">
            
             have an account? <Text className="text-orange-500">sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}