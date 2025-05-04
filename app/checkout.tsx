import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import {  useRouter } from 'expo-router';

interface Drink {
  id: number;
  name: string;
  price: number;
  image: any;
  description: string;
}

interface PaymentMethod {
  id: number;
  name: string;
  image: any;
}

const App = () => {
  const [drinks] = useState<Drink[]>([
    { id: 1, name: 'Tom Yummy', price: 5000, image: require('../assets/airtel.png'), description: 'Kaffir Lime Vodka, Lemongrass, Ginger, Citrus' },
    { id: 2, name: 'Singapore Sling', price: 5000, image: require('../assets/airtel.png'), description: 'Gin, Grenadine, Citrus, Cucumber' },
    { id: 3, name: 'White Russian', price: 6000, image: require('../assets/airtel.png'), description: 'Vanilla, Coffee and Chocolate with hints of Orange' },
  ]);

  const router = useRouter()

  const [quantities, setQuantities] = useState<number[]>(new Array(drinks.length).fill(0));
  const [checkoutVisible, setCheckoutVisible] = useState(false);

  const updateQuantity = (index: number, change: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(0, newQuantities[index] + change);
    setQuantities(newQuantities);
  };

  const total = quantities.reduce((sum, qty, index) => sum + qty * drinks[index].price, 0);
  const vat = total * 0.18;
  const totalWithVat = total + vat;

  const paymentMethods = [
    { id: 1, name: 'MTN Mobile Money', image: require('../assets/airtel.png') },
    { id: 2, name: 'Airtel Money', image: require('../assets/airtel.png') },
    { id: 3, name: 'Cash', image: require('../assets/airtel.png') },
  ];

  const handlePay = () => {
      router.push('/payment_success')
  }

  // if (!checkoutVisible) {
  //   return (
  //     <ScrollView className="flex-1 bg-white p-4">
  //       <Text className="text-2xl font-bold text-center text-orange-500 mt-4">Choose Kigali Drinks</Text>
  //       {drinks.map((drink, index) => (
  //         <View key={drink.id} className="bg-gray-100 p-4 rounded-lg mb-4 flex-row items-center">
  //           <Image source={drink.image} className="w-16 h-16 mr-4" />
  //           <View className="flex-1">
  //             <Text className="text-lg font-semibold">{drink.name} - {drink.price / 1000}.5</Text>
  //             <Text className="text-gray-600">{drink.description}</Text>
  //             <Text className="text-green-600">Frw {drink.price}</Text>
  //           </View>
  //           <View className="flex-row items-center">
  //             <TouchableOpacity onPress={() => updateQuantity(index, -1)} className="bg-gray-300 p-2 rounded">
  //               <Text className="text-white">-</Text>
  //             </TouchableOpacity>
  //             <Text className="mx-2">{quantities[index]}</Text>
  //             <TouchableOpacity onPress={() => updateQuantity(index, 1)} className="bg-gray-300 p-2 rounded">
  //               <Text className="text-white">+</Text>
  //             </TouchableOpacity>
  //           </View>
  //         </View>
  //       ))}
  //       <TouchableOpacity className="bg-orange-500 p-4 rounded-lg mb-4">
  //         <Text className="text-white text-center">more drinks →</Text>
  //       </TouchableOpacity>
  //       <View className="flex-row justify-between items-center mb-4">
  //         <Text className="text-lg font-semibold">Total</Text>
  //         <Text className="text-lg text-orange-500">Frw {total}</Text>
  //       </View>
  //       <TouchableOpacity className="bg-orange-500 p-4 rounded-lg" onPress={() => setCheckoutVisible(true)}>
  //         <Text className="text-white text-center">Proceed to checkout</Text>
  //       </TouchableOpacity>
  //     </ScrollView>
  //   );
  // }

  return (
    <View className="flex-1 bg-gray-50 ">
      <View className='bg-white mb-14 rounded-b-[4rem] py-16 shadow-sm shadow-neutral-200 px-5'>
      <View className="flex-row justify-between mb-4">
      <Text className="text-2xl font-bold mb-4">Checkout</Text>
      <View className='text-2xl gap-3'>
        <Text className='text-right '>Frw {total}</Text>
        <Text className="text-green-600">including VAT (18%)</Text>
        </View>
      </View>
      
      <View className="flex-row absolute rounded-3xl -bottom-12 right-14 items-center justify-center mb-4">
        <TouchableOpacity className="bg-white p-5 shadow-green-500 shadow-sm w-[40%] rounded">
          <Text className="text-black-">Credit card</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-green-600 p-5  shadow-sm w-[40%] rounded">
          <Text className="text-white font-bold">Mobile & Cash</Text>
        </TouchableOpacity>
      </View>
      </View>
      {paymentMethods.map((method) => (
        <View key={method.id} className=" p-6 rounded-lg mb-4 flex-row items-center">
          <Image source={method.image} className="w-12 h-12 mr-4" />
          <Text className="text-xl ">{method.name}</Text>
        </View>
      ))}
      <Text className="text-gray-500 my-8 text-center mb-4 w-[80%] mx-auto">We will send you an order detail to your email after the successful payment!</Text>
      <TouchableOpacity
         onPress={handlePay}
      className="bg-green-500 my-4 p-4 w-[80%] mx-auto rounded-lg">
        <Text className="text-white font-bold text-center">Pay for the order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;