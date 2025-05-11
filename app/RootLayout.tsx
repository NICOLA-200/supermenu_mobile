
import { Stack, SplashScreen, Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import "./globals.css";
import React, { useEffect, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ToastProvider } from 'react-native-toast-notifications';
import { Provider, useSelector } from 'react-redux';
import { store } from '../redux/store'; 
import { RootState } from '../redux/store';

type RestaurantRouteParams = {
  id: string;
  name?: string;
};

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  useEffect(() => {
    async function initializeApp() {
      try {
        // Simulate initialization tasks (e.g., load fonts, check auth, fetch data)
        await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay for demo
        // Add real initialization logic here, e.g.:
        // await Font.loadAsync({ ... });
        // await store.dispatch(checkAuth()); // Optionally dispatch checkAuth here
      } catch (error) {
        console.error('Initialization error:', error);
      } finally {
        setIsLoading(false);
        // Hide the native splash screen
        SplashScreen.hideAsync();
      }
    }

    initializeApp();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Provider store={store}>
      <ToastProvider>
        {/* {isAuthenticated ? ( */}
          <Stack>
            <Stack.Screen 
              name="(tabs)" 
              options={{ 
                headerShown: false,
                animation: 'fade'
              }} 
            />
            <Stack.Screen
              name="restaurant/[id]"
              options={({ navigation, route }) => {
                const params = route.params as RestaurantRouteParams | undefined;
                return {
                  headerTitle: params?.name || 'Restaurant',
                  headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()} className="ml-4">
                      <Ionicons name="arrow-back" size={24} color="#F97316" />
                    </TouchableOpacity>
                  ),
                  headerStyle: { backgroundColor: '#000000' },
                  headerTintColor: '#F97316',
                  headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
                };
              }}
            />
            
            <Stack.Screen name="checkout" options={({ navigation, route }) => {
              return {
                headerTitle: '',
                headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.goBack()} className="ml-4">
                    <Ionicons name="arrow-back" size={24} color="#F97316" />
                  </TouchableOpacity>
                ),
                headerStyle: { backgroundColor: '#fff' },
                headerTintColor: '#F97316',
                headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
              };
            }} />
            <Stack.Screen name="payment_success" options={({ navigation, route }) => {
              return {
                headerTitle: '',
                headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.goBack()} className="ml-4">
                    <Ionicons name="arrow-back" size={24} color="#F97316" />
                  </TouchableOpacity>
                ),
                headerStyle: { backgroundColor: '#000' },
                headerTintColor: '#F97316',
                headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
              };
            }} />
            <Stack.Screen name="+not-found" />
            {/* <Stack.Screen name="index" /> */}
          </Stack>
        ) : (
          <Stack>
            <Stack.Screen 
              name="(auth)" 
              options={{ 
                headerShown: false,
                animation: 'fade'
              }} 
            />
            <Stack.Screen name="+not-found" />
          </Stack>
          
        {/* )} */}
        <StatusBar style="auto" />
      </ToastProvider>
    </Provider>
  );
}