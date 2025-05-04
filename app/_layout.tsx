import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack , SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import "./globals.css";
import React, { useEffect, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useColorScheme } from '@/hooks/useColorScheme';

type RestaurantRouteParams = {
  id: string;
  name?: string;
};


export default function RootLayout() {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function initializeApp() {
      try {
        // Simulate initialization tasks (e.g., load fonts, check auth, fetch data)
        await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay for demo
        // Add real initialization logic here, e.g.:
        // await Font.loadAsync({ ... });
        // await checkUserAuth();
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

  const colorScheme = useColorScheme();
  // const [loaded] = useFonts({
  //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  // });

  if (isLoading ) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <Stack >
    
          <Stack.Screen 
            name="(auth)" 
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
              headerTitleStyle: { fontWeight: 'bold', fontSize: 18  },
            };
          }}
        />
          <Stack.Screen name ="choice/[id]" options={{
               
          }} />
          <Stack.Screen 
            name="(tabs)" 
            options={{ 
              headerShown: false,
              animation: 'fade'
            }} 
          />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="checkout" options={{ headerTitle: '', 
                 headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.goBack()} className="ml-4">
                    <Ionicons name="arrow-back" size={24} color="#F97316" />
                  </TouchableOpacity>
                ),
           }} />
         
   
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="payment_success" options={{
        headerShown: false
      }} />
    </Stack>
    <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
  </ThemeProvider>
);

}
