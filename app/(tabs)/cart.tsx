import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

interface Drink {
  id: number;
  name: string;
  price: number;
  image: any;
  description: string;
}

const App = () => {
  const [drinks] = useState<Drink[]>([
    { id: 1, name: 'Tom Yummy', price: 5000, image: require('../../assets/food.jpg'), description: 'Kaffir Lime Vodka, Lemongrass, Ginger, Citrus' },
    { id: 2, name: 'Singapore Sling', price: 5000, image: require('../../assets/food.jpg'), description: 'Gin, Grenadine, Citrus, Cucumber' },
    { id: 3, name: 'White Russian', price: 6000, image: require('../../assets/food.jpg'), description: 'Vanilla, Coffee and Chocolate with hints of Orange' },
  ]);



  const [quantities, setQuantities] = useState<number[]>(new Array(drinks.length).fill(0));

  const updateQuantity = (index: number, change: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(0, newQuantities[index] + change);
    setQuantities(newQuantities);
  };

  const router = useRouter()
  const handleCheckout = () => {
   router.push('/checkout')
  }

  const total = quantities.reduce((sum, qty, index) => sum + qty * drinks[index].price, 0);

  return (
    <View className="flex h-full gap-8 space-y-5  justify-center  bg-white p-6">
      <View className='flex  '>
      <Text className="text-2xl font-bold my-4 text-right text-orange-500 mt-4">Choose Kigali </Text>
      <Text className=' text-right mx-4 text-2xl'>Drinks</Text>
      {drinks.map((drink, index) => (
        <View key={drink.id} className="bg-gray-100 p-4 rounded-lg mb-4 flex-row items-center">
          <Image source={drink.image} className="w-16 h-16 mr-4" />
          <View className="flex-1">
            <Text className="text-lg font-semibold">{drink.name} - {drink.price / 1000}.5</Text>
            <Text className="text-gray-600">{drink.description}</Text>
            <Text className="text-green-600">Frw {drink.price}</Text>
          </View>
          <View className="flex-row bg-white rounded-md items-center">
            <TouchableOpacity onPress={() => updateQuantity(index, -1)} className="bg-gray-300 p-2 rounded">
              <Text className="text-orange-500">-</Text>
            </TouchableOpacity>
            <Text className="mx-2 text-black">{quantities[index]}</Text>
            <TouchableOpacity onPress={() => updateQuantity(index, 1)} className="bg-gray-300 p-2 rounded">
              <Text className="text-orange-500">+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <TouchableOpacity className=" p-5 rounded-lg mb-4">
        <Text className="text-orange-500 text-xl text-center">more drinks  →</Text>
      </TouchableOpacity>
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-semibold">Total</Text>
        <Text className="text-lg text-orange-500">Frw {total}</Text>
      </View>
      <TouchableOpacity 
      onPress={handleCheckout}
      className="bg-orange-500 p-6 rounded-lg">
        <Text className="text-white text-center">Proceed to checkout</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;