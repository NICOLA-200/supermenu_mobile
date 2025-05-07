import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from '@/lib/axios.config';

interface Restaurant {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export default function ChooseKigaliScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const navigation = useNavigation();

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await axios.get(`/restaurants/${id}`);
        setRestaurant(response.data);
      } catch (error) {
        console.error('Failed to fetch restaurant:', error);
        Alert.alert('Error', 'Could not load restaurant data');
      }
    };

    if (id) {
      fetchRestaurant();
    }
  }, [id]);

  const handleOrdered = () => {
    router.push('/cartScreen');
  };

  const handleCallWaiter = () => {
    alert('Calling waiter...');
  };

  const handleCategoryPress = (category: string) => {
    router.push({
      pathname: '/cartScreen',
      params: { id: id.toString(), category },
    });
  };

  return (
    <View className="flex-1 bg-black p-12 justify-center gap-8">
      {/* Restaurant name (optional display) */}
      {restaurant && (
        <Text className="text-orange-500 text-xl text-center">
          {restaurant.name}
        </Text>
      )}

      {/* Table and Actions */}
      <View className="flex-row justify-around items-center mb-8">
        <TouchableOpacity onPress={handleOrdered} className="items-center">
          <Ionicons name="list" size={24} color="#F97316" />
          <Text className="text-orange-500 mt-1">Ordered</Text>
        </TouchableOpacity>
        <View className="border-l border-gray-600 h-12" />
        <TouchableOpacity onPress={handleCallWaiter} className="items-center">
          <Ionicons name="person" size={24} color="#F97316" />
          <Text className="text-orange-500 mt-1">Call Waiter</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Section */}
      <Text className="text-orange-500 text-2xl font-bold text-center mb-6">Menu</Text>
      <View className="space-y-4">
        {['Appetizer', 'Starter', 'Main', 'Dessert', 'Drink'].map((category) => (
          <TouchableOpacity
            key={category}
            className="flex-row justify-between items-center p-5 rounded-lg"
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
