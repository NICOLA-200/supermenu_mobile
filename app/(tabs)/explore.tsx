import React from 'react';
import { View, Text, Image, FlatList, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity , TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface Restaurant {
  name: string;
  categories: string;
  imageUrl: string;
  id: number;
}

const restaurants: Restaurant[] = [
  { id: 1, name: 'Choose Kigali', categories: 'World, African, Pizzeria, Coffee', imageUrl: 'https://www.google.com/imgres?q=restaurant%20image%20in%20rwanda&imgurl=https%3A%2F%2Fwww.explorerwandatours.com%2Fwp-content%2Fuploads%2F2023%2F03%2Frepubloungekigali-1024x683-2.jpg&imgrefurl=https%3A%2F%2Fwww.explorerwandatours.com%2Ftravel-blog%2Ftop-10-restaurants-in-rwandas-kigali-city.html&docid=ZzDMaSVC4fxu5M&tbnid=MjcRpdYuzL44AM&vet=12ahUKEwjSweXnoIeNAxWMa0EAHVaHFXUQM3oECBgQAA..i&w=1024&h=683&hcb=2&ved=2ahUKEwjSweXnoIeNAxWMa0EAHVaHFXUQM3oECBgQAA' },
  { id: 2,name: 'Choose Kigali1', categories: 'World, African, Pizzeria, Coffee', imageUrl: 'https://www.google.com/imgres?q=restaurant%20image%20in%20rwanda&imgurl=https%3A%2F%2Fwww.explorerwandatours.com%2Fwp-content%2Fuploads%2F2023%2F03%2Frepubloungekigali-1024x683-2.jpg&imgrefurl=https%3A%2F%2Fwww.explorerwandatours.com%2Ftravel-blog%2Ftop-10-restaurants-in-rwandas-kigali-city.html&docid=ZzDMaSVC4fxu5M&tbnid=MjcRpdYuzL44AM&vet=12ahUKEwjSweXnoIeNAxWMa0EAHVaHFXUQM3oECBgQAA..i&w=1024&h=683&hcb=2&ved=2ahUKEwjSweXnoIeNAxWMa0EAHVaHFXUQM3oECBgQAA' },
  { id: 3, name: 'Choose Kigali2', categories: 'World, African, Pizzeria, Coffee', imageUrl: 'https://www.google.com/imgres?q=restaurant%20image%20in%20rwanda&imgurl=https%3A%2F%2Fwww.explorerwandatours.com%2Fwp-content%2Fuploads%2F2023%2F03%2Frepubloungekigali-1024x683-2.jpg&imgrefurl=https%3A%2F%2Fwww.explorerwandatours.com%2Ftravel-blog%2Ftop-10-restaurants-in-rwandas-kigali-city.html&docid=ZzDMaSVC4fxu5M&tbnid=MjcRpdYuzL44AM&vet=12ahUKEwjSweXnoIeNAxWMa0EAHVaHFXUQM3oECBgQAA..i&w=1024&h=683&hcb=2&ved=2ahUKEwjSweXnoIeNAxWMa0EAHVaHFXUQM3oECBgQAA' },
  { id: 4, name: 'Choose Kigali3', categories: 'World, African, Pizzeria, Coffee', imageUrl: 'https://www.google.com/imgres?q=restaurant%20image%20in%20rwanda&imgurl=https%3A%2F%2Fwww.explorerwandatours.com%2Fwp-content%2Fuploads%2F2023%2F03%2Frepubloungekigali-1024x683-2.jpg&imgrefurl=https%3A%2F%2Fwww.explorerwandatours.com%2Ftravel-blog%2Ftop-10-restaurants-in-rwandas-kigali-city.html&docid=ZzDMaSVC4fxu5M&tbnid=MjcRpdYuzL44AM&vet=12ahUKEwjSweXnoIeNAxWMa0EAHVaHFXUQM3oECBgQAA..i&w=1024&h=683&hcb=2&ved=2ahUKEwjSweXnoIeNAxWMa0EAHVaHFXUQM3oECBgQAA' },
  { id: 5, name: 'Choose Kigali4', categories: 'World, African, Pizzeria, Coffee', imageUrl: 'https://www.google.com/imgres?q=restaurant%20image%20in%20rwanda&imgurl=https%3A%2F%2Fwww.explorerwandatours.com%2Fwp-content%2Fuploads%2F2023%2F03%2Frepubloungekigali-1024x683-2.jpg&imgrefurl=https%3A%2F%2Fwww.explorerwandatours.com%2Ftravel-blog%2Ftop-10-restaurants-in-rwandas-kigali-city.html&docid=ZzDMaSVC4fxu5M&tbnid=MjcRpdYuzL44AM&vet=12ahUKEwjSweXnoIeNAxWMa0EAHVaHFXUQM3oECBgQAA..i&w=1024&h=683&hcb=2&ved=2ahUKEwjSweXnoIeNAxWMa0EAHVaHFXUQM3oECBgQAA' },
];

const RestaurantItem = ({ name, categories, imageUrl , id }: Restaurant) => {
  const router = useRouter()

  const handlePress = () => {
    router.push({
      pathname: '/restaurant/[id]',
      params: { id: id.toString(), name },
    });
  };

  return (
    <TouchableOpacity
    onPress={handlePress}
     className="flex-row p-4 bg-gray-100 mb-4 rounded-lg ">
      <Image
         source={require('../../assets/resto.jpeg')} 
        className="w-12 h-12 rounded-lg"
      />
      <View className="ml-4 space-y-4">
        <Text className="text-lg font-bold">{name}</Text>
        <Text className="text-gray-500">{categories}</Text>
      </View>
    </TouchableOpacity>
  );
};

const NearbyResto = () => {
  return (
    <SafeAreaView className="flex-1  bg-white">
      <StatusBar style="auto" />
      <View className='w-full my-2 '>
    

             <TextInput
                  className="bg-white w-full text-2xl rounded-[0.7rem] px-4  py-3 text-gray-500"
                  placeholder="search..."
                  placeholderTextColor="#9ca3af"
                />

        <TouchableOpacity>
    
        </TouchableOpacity>
      </View>
      <View className='bg-neutral-400 h-[0.1rem] w-full' />
      <View className="p-4">
        <Text className="text-orange-500 text-base font-semibold mb-2">Nearby Restaurant</Text>
        <FlatList
          data={restaurants}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <RestaurantItem {...item} />}
          ListHeaderComponent={<View className="h-2" />}
        />
      </View>
    </SafeAreaView>
  );
};

export default NearbyResto;