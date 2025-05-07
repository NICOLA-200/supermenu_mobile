import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import axios from '@/lib/axios.config';
import { Ionicons } from '@expo/vector-icons';

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  unitPrice: number;
  category: string;
}

export default function ProductScreen() {
  const { category } = useLocalSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`/products?category=${category}`);
        setProducts(res.data);
      } catch (error) {
        console.error('Failed to fetch products', error);
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchProducts();
    }
  }, [category]);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({
        id: product.id,
        name: product.name,
        imageUrl: product.imageUrl,
        unitPrice: product.unitPrice,
        type: 'Drink',
        description: ''
    }));
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4 text-orange-500 capitalize">
        {category} Items
      </Text>

      {loading ? (
        <ActivityIndicator size="large" color="#FFA500" />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
              <Image source={{ uri: item.imageUrl }} className="h-32 w-full rounded-md" />
              <Text className="text-xl font-bold mt-2">{item.name}</Text>
              <Text className="text-gray-600 mb-2">{item.description}</Text>
              <Text className="text-orange-500 font-semibold mb-2">${item.unitPrice}</Text>
              <TouchableOpacity
                onPress={() => handleAddToCart(item)}
                className="bg-orange-500 py-2 px-4 rounded-md flex-row items-center justify-center"
              >
                <Ionicons name="cart" size={20} color="white" />
                <Text className="text-white ml-2">Add to Cart</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}
