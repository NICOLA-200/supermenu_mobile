import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

interface Drink {
  id: number;
  name: string;
  price: number;
  image: any;
  description: string;
}

const DrinkScreen = () => {
  const drinks: Drink[] = [
    {
      id: 1,
      name: 'Tom Yummy',
      price: 5000,
      image: require('../../assets/food.jpg'),
      description: 'Kaffir Lime Vodka, Lemongrass, Ginger, Citrus',
    },
    {
      id: 2,
      name: 'Singapore Sling',
      price: 5000,
      image: require('../../assets/food.jpg'),
      description: 'Gin, Grenadine, Citrus, Cucumber',
    },
    {
      id: 3,
      name: 'White Russian',
      price: 6000,
      image: require('../../assets/food.jpg'),
      description: 'Vanilla, Coffee and Chocolate with hints of Orange',
    },
  ];

  const [quantities, setQuantities] = useState<{ [id: number]: number }>({});
  const router = useRouter();

  const updateQuantity = (id: number, change: number) => {
    setQuantities((prev) => {
      const newQty = Math.max(0, (prev[id] || 0) + change);
      return { ...prev, [id]: newQty };
    });
  };

  const total = drinks.reduce(
    (sum, drink) => sum + (quantities[drink.id] || 0) * drink.price,
    0
  );

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <ScrollView className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold mb-1 text-right text-orange-500">Choose Kigali</Text>
      <Text className="text-right text-2xl mb-4">Drinks</Text>

      {drinks.map((drink) => (
        <View key={drink.id} className="bg-gray-100 p-4 rounded-lg mb-4 flex-row items-center">
          <Image source={drink.image} className="w-16 h-16 mr-4 rounded-md" />
          <View className="flex-1">
            <Text className="text-lg font-semibold">
              {drink.name} - {drink.price / 1000}.0
            </Text>
            <Text className="text-gray-600">{drink.description}</Text>
            <Text className="text-green-600">Frw {drink.price}</Text>
          </View>
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={() => updateQuantity(drink.id, -1)}
              className="bg-gray-300 p-2 rounded"
            >
              <Text className="text-orange-500">-</Text>
            </TouchableOpacity>
            <Text className="mx-2 text-black">{quantities[drink.id] || 0}</Text>
            <TouchableOpacity
              onPress={() => updateQuantity(drink.id, 1)}
              className="bg-gray-300 p-2 rounded"
            >
              <Text className="text-orange-500">+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity className="p-5 rounded-lg mb-4">
        <Text className="text-orange-500 text-xl text-center">more drinks →</Text>
      </TouchableOpacity>

      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-semibold">Total</Text>
        <Text className="text-lg text-orange-500">Frw {total}</Text>
      </View>

      <TouchableOpacity onPress={handleCheckout} className="bg-orange-500 p-6 rounded-lg">
        <Text className="text-white text-center">Proceed to checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DrinkScreen;
