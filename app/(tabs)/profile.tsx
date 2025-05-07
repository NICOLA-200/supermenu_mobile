import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Dispatch } from 'redux';

// Assuming logoutSuccess is defined elsewhere in your Redux setup
const logoutSuccess = () => ({ type: 'LOGOUT_SUCCESS' });

export const logout = () => async (dispatch: Dispatch) => {
  await AsyncStorage.removeItem('token');
  delete axios.defaults.headers.common['Authorization'];
  dispatch(logoutSuccess());
};

interface ProfileProps {
  fullName: string;
  email: string;
  imageUrl: string;
}

const Profile: React.FC<ProfileProps> = ({ fullName, email, imageUrl }) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout()(dispatch);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="auto" />
      <View className="flex-1 p-6">
        {/* Profile Header */}
        <View className="items-center mt-10">
          <Image
            source={{ uri: imageUrl }}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
          <Text className="text-2xl font-bold mt-4">{fullName}</Text>
          <Text className="text-gray-500 text-lg">{email}</Text>
        </View>

        {/* Spacer */}
        <View className="flex-1" />

        {/* Logout Button */}
        <TouchableOpacity
          onPress={handleLogout}
          className="bg-red-500 py-4 rounded-lg items-center mb-6"
        >
          <Text className="text-white text-lg font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Example usage with dummy data
const App: React.FC = () => {
  return (
    <Profile
      fullName="John Doe"
      email="john.doe@example.com"
      imageUrl="https://example.com/profile.jpg"
    />
  );
};

export default App;