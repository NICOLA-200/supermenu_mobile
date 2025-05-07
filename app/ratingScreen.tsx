import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';

const RatingScreen = () => {




  const [rating, setRating] = useState<number>(0);

  return (
    <View className="flex-1 bg-black justify-center items-center p-4">
      <Text className="text-orange-500 text-2xl font-bold mb-2">Yayy!</Text>
      <Text className="text-orange-500 text-center mb-4">We value all feedback, please rate your experience below:</Text>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity key={star} onPress={() => setRating(star)}>
          <Text className={`text-3xl ${star <= rating ? 'text-orange-500' : 'text-gray-400'}`}>★</Text>
        </TouchableOpacity>
      ))}
      <Text className="text-orange-500 text-center mt-4">Thank you for helping us improve our service !</Text>
      <Text className="text-orange-500 text-2xl font-bold mt-4">SupaMenu</Text>
    </View>
  );
};

export default LoadingScreen;