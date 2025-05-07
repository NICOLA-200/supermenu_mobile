import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, SafeAreaView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import axios from '@/lib/axios.config';
import { Restaurant } from '@/types';
import  { useToast } from 'react-native-toast-notifications';



const RestaurantItem = ({ name, description, imageUrl, id }: Restaurant) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: '/restaurant/[id]',
      params: { id: id.toString(), name },
    });
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="flex-row p-4 bg-gray-100 mb-4 shadow-sm shadow-neutral-100 rounded-lg">
      <Image source={{ uri: imageUrl }} className="w-[4rem] h-[4rem] rounded-lg" />
      <View className="ml-4 space-y-2">
        <Text className="text-lg font-bold">{name}</Text>
        <Text className="text-gray-500">{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Restoraurant = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast()

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get('/restaurants');
      setRestaurants(response.data);
    } catch (error) {
      console.error('Failed to fetch restaurants', error);
      toast.show("Price must be greater than 0", {
        type: 'danger'
    });
    } finally {
      setLoading(false);

    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="auto" />
      <View className="w-full my-2 px-4">
        <TextInput
          className="bg-white w-full text-xl rounded-lg px-4 py-3  text-gray-700"
          placeholder="Search..."
          placeholderTextColor="#9ca3af"
        />
      </View>
      <View className="bg-neutral-400 h-[1px] w-full" />
      <View className="p-4">
        <Text className="text-orange-500 text-base font-semibold mb-2">Restaurants</Text>
        {loading ? (
          
          <ActivityIndicator size="large" color="#FFA500" />
          
        ) : (
          <FlatList
            data={restaurants}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <RestaurantItem {...item} />}
            ListHeaderComponent={<View className="h-2" />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Restoraurant;
