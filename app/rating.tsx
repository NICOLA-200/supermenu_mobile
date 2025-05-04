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
    { id: 1, name: 'Tom Yummy', price: 5000, image: require('../assets/airtel.png'), description: 'Kaffir Lime Vodka, Lemongrass, Ginger, Citrus' },
    { id: 2, name: 'Singapore Sling', price: 5000, image: require('../assets/airtel.png'), description: 'Gin, Grenadine, Citrus, Cucumber' },
    { id: 3, name: 'White Russian', price: 6000, image: require('../assets/airtel.png'), description: 'Vanilla, Coffee and Chocolate with hints of Orange' },
  ]);

  const [quantities, setQuantities] = useState<number[]>(new Array(drinks.length).fill(0));
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const [paymentSuccessVisible, setPaymentSuccessVisible] = useState(false);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [rating, setRating] = useState<number>(0);

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
    { id: 2, name: 'Airtel Money', image: require('../assets/mtn.jpeg') },
    { id: 3, name: 'Cash', image: require('../assets/mtn.jpeg') },
  ];

  if (!checkoutVisible) {
    return (
      <ScrollView className="flex-1 bg-white p-4">
        <Text className="text-2xl font-bold text-center text-orange-500 mt-4">Choose Kigali Drinks</Text>
        {drinks.map((drink, index) => (
          <View key={drink.id} className="bg-gray-100 p-4 rounded-lg mb-4 flex-row items-center">
            <Image source={drink.image} className="w-16 h-16 mr-4" />
            <View className="flex-1">
              <Text className="text-lg font-semibold">{drink.name} - {drink.price / 1000}.5</Text>
              <Text className="text-gray-600">{drink.description}</Text>
              <Text className="text-green-600">Frw {drink.price}</Text>
            </View>
            <View className="flex-row items-center">
              <TouchableOpacity onPress={() => updateQuantity(index, -1)} className="bg-gray-300 p-2 rounded">
                <Text className="text-white">-</Text>
              </TouchableOpacity>
              <Text className="mx-2">{quantities[index]}</Text>
              <TouchableOpacity onPress={() => updateQuantity(index, 1)} className="bg-gray-300 p-2 rounded">
                <Text className="text-white">+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <TouchableOpacity className="bg-orange-500 p-4 rounded-lg mb-4">
          <Text className="text-white text-center">more drinks →</Text>
        </TouchableOpacity>
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-semibold">Total</Text>
          <Text className="text-lg text-orange-500">Frw {total}</Text>
        </View>
        <TouchableOpacity className="bg-orange-500 p-4 rounded-lg" onPress={() => setCheckoutVisible(true)}>
          <Text className="text-white text-center">Proceed to checkout</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  if (!paymentSuccessVisible) {
    return (
      <ScrollView className="flex-1 bg-white p-4">
        <Text className="text-xl font-semibold mb-4">Checkout</Text>
        <View className="flex-row justify-between mb-4">
          <Text>Frw {total}</Text>
          <Text className="text-green-600">including VAT (18%)</Text>
        </View>
        <View className="flex-row justify-around mb-4">
          <TouchableOpacity className="bg-gray-200 p-2 rounded">
            <Text className="text-blue-500">Credit card</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-200 p-2 rounded">
            <Text className="text-green-500">Mobile & Cash</Text>
          </TouchableOpacity>
        </View>
        {paymentMethods.map((method) => (
          <View key={method.id} className="bg-gray-100 p-4 rounded-lg mb-4 flex-row items-center">
            <Image source={method.image} className="w-12 h-12 mr-4" />
            <Text className="text-lg">{method.name}</Text>
          </View>
        ))}
        <Text className="text-gray-500 text-center mb-4">We will send you an order detail to your email after the successful payment!</Text>
        <TouchableOpacity className="bg-green-500 p-4 rounded-lg" onPress={() => setPaymentSuccessVisible(true)}>
          <Text className="text-white text-center">Pay for the order</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  if (!feedbackVisible) {
    return (
      <View className="flex-1 bg-black justify-center items-center p-4">
        <Image source={require('../assets/airtel.png')} className="w-32 h-32 mb-4" />
        <Text className="text-orange-500 text-2xl font-bold mb-2">Payment Success, Yayy!</Text>
        <Text className="text-white text-center mb-4">We will send order details and invoice in your contact no. and registered email</Text>
        <TouchableOpacity className="bg-orange-500 p-4 rounded-lg mb-4" onPress={() => setFeedbackVisible(true)}>
          <Text className="text-white text-center">Check Details →</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-orange-500 p-4 rounded-lg mb-4">
          <Text className="text-white text-center">Download Invoice</Text>
        </TouchableOpacity>
        <Text className="text-orange-500 text-2xl font-bold">SupaMenu</Text>
      </View>
    );
  }

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

export default App;