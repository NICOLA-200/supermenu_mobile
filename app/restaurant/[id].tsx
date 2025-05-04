import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ChooseKigaliScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const navigation = useNavigation();

  const handleOrdered = () => {
     router.push('/choice/[id]');
  };

  const handleCallWaiter = () => {
    // Add logic for calling waiter (e.g., alert or API call)
    alert('Calling waiter...');
  };

  const handleCategoryPress = (category: string) => {
     router.push({
      pathname: '/choice/[id]',
      params: { id: id.toString(), category },
    });
  };

  return (
    <View className="flex-1 bg-black p-12 justify-center gap-8">
      {/* Header */}


      {/* Table and Actions */}
      <View className="flex-row justify-around items-center mb-8">
        {/* <View className="items-center">
          <Ionicons name="restaurant" size={24} color="#F97316" />
          <Text className="text-orange-500 mt-1">N8</Text>
        </View> */}
       
        <TouchableOpacity onPress={handleOrdered} className="items-center">
          <Ionicons name="list" size={24} color="#F97316" />
          <Text className="text-orange-500 mt-1">Ordered</Text>
        </TouchableOpacity>
        <View className="border-l border-gray-600 h-12" />
        <TouchableOpacity onPress={handleCallWaiter} className="items-center">
          <Ionicons name="person" size={24} color="#F97316" />
          <Text className="text-orange-500 mt-1">call waiter</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Section */}
      <Text className="text-orange-500 text-2xl font-bold text-center mb-6">menu</Text>
      <View className="space-y-4">
        {['Appetizer', 'Starter', 'Main', 'Dessert', 'Drink'].map((category) => (
          <TouchableOpacity
            key={category}
            className="flex-row justify-between items-center p-5 text-7xl  rounded-lg"
            onPress={() => handleCategoryPress(category)}
          >
            <Text className="text-white text-3xl">{category}</Text>
            <Ionicons name="chevron-forward" size={20} color="#F97316" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}