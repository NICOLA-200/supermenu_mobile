import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { Redirect } from 'expo-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '../../hooks/theme/useColorScheme';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#F97316', // Orange color for active tab
        tabBarInactiveTintColor: 'black', // Optional: Color for inactive tabs
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            shadowColor: 'black',
            shadowOffset: { width: 5, height: 8 },
            shadowOpacity: 0.9,
            shadowRadius: 15,
            borderRadius: 50,
            overflow: 'hidden',
            height: 80,
            paddingTop: 14,
            bottom: 0,
          },
          default: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'home',
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'notification',
          tabBarIcon: ({ color }) => <Ionicons name="notifications" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="restuarant"
        options={{
          title: 'restuarant',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="google-nearby" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          tabBarIcon: ({ color }) => <FontAwesome6 name="user" size={24} color="#111" />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={({ navigation }) => ({
          headerTitle: '',
          title: 'cart',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="ml-4 p-2 bg-neutral-200"
            >
              <Ionicons name="arrow-back" size={24} color="#F97316" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => <FontAwesome6 name="cart-shopping" size={24} color="#111" />,
          headerStyle: { backgroundColor: '#fff' },
          headerTintColor: '#F97316',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
        })}
      />
    </Tabs>
  );
}