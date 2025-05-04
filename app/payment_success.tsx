import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';

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
    { id: 1, name: 'Tom Yummy', price: 5000, image: require('../assets/mtn.jpeg'), description: 'Kaffir Lime Vodka, Lemongrass, Ginger, Citrus' },
    { id: 2, name: 'Singapore Sling', price: 5000, image: require('../assets/mtn.jpeg'), description: 'Gin, Grenadine, Citrus, Cucumber' },
    { id: 3, name: 'White Russian', price: 6000, image: require('../assets/mtn.jpeg'), description: 'Vanilla, Coffee and Chocolate with hints of Orange' },
  ]);

  const [quantities, setQuantities] = useState<number[]>(new Array(drinks.length).fill(0));
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const [paymentSuccessVisible, setPaymentSuccessVisible] = useState(false);

  const updateQuantity = (index: number, change: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(0, newQuantities[index] + change);
    setQuantities(newQuantities);
  };

  const total = quantities.reduce((sum, qty, index) => sum + qty * drinks[index].price, 0);
  const vat = total * 0.18;
  const totalWithVat = total + vat;

  const paymentMethods = [
    { id: 1, name: 'MTN Mobile Money', image: require('../assets/mtn.jpeg') },
    { id: 2, name: 'Airtel Money', image: require('../assets/airtel.png') },
    { id: 3, name: 'Cash', image: require('../assets/cash.jpg') },
  ];



  return (
    <View className="flex-1 gap-12 bg-black justify-center items-center p-4">
      <Image source={require('../assets/pay.png')} className="w-32 h-32 mb-4" />
      <Text className="text-orange-500 text-2xl font-bold mb-2">Payment Success, Yayy!</Text>
      <Text className="text-white text-center mb-4">We will send order details and invoice in your contact no. and registered email</Text>
      <TouchableOpacity className=" p-4 rounded-lg mb-4">
        <Text className="text-orange-500 text-2xl font-bold text-center">Check Details   →</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-orange-500 p-4 px-12 rounded-lg mb-4">
        <Text className="text-white text-2xl text-center">Download Invoice</Text>
      </TouchableOpacity>
      <Text className="text-white text-5xl font-extrabold">Supa<Text className='text-orange-500'
      >Menu</Text></Text>
    </View>
  );
};

export default App;