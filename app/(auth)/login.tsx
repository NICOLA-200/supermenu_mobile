
import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Checkbox } from 'react-native-paper'; 
import { useRouter } from 'expo-router';

const SignupScreen = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(false);
    const router =  useRouter()
  

    const handleHome = () => {
      // Navigate to a sign-in screen (placeholder)
      router.replace("/home");
    };

    const handleSignin = () => {
      // Navigate to a register screen (placeholder)
      router.push('/signup');
    };

    return (
      <View className="flex-1">
            {/* Orange top background */}
            <View className="absolute top-0 left-0 right-0 h-1/4 bg-orange-400 " />
        {/* Header */}
        <View className="flex-1 gap-2 bg-white rounded-t-[4rem] mt-32 py-4  px-6 ">
           <Text className="text-5xl font-bold text-center mt-8">
                   <Text className="text-black">Supa</Text>
                   <Text className="text-orange-500">Menu</Text>
                 </Text>
  
        {/* Sign In Form */}
        <Text className="text-xl text-center font-semibold mb-4">Sign in to continue</Text>
  
        {/* Email Input */}
        <View className="mb-4">
          <TextInput
            className="border border-gray-300 rounded-lg p-4"
            placeholder="Your Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
  
        {/* Password Input */}
        <View className="mb-4">
          <TextInput
            className="border border-gray-300 rounded-lg p-4"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
  
        {/* Remember Me Checkbox */}
        <View className="flex-row items-center mb-6">
          <Checkbox
            status={rememberMe ? 'checked' : 'unchecked'}
            onPress={() => setRememberMe(!rememberMe)}
            color="#4F4600" // Indigo-600
          />
          <Text className="ml-2 text-neutral-700">Remember me</Text>
        </View>
  
        {/* Sign In Button */}
        <TouchableOpacity 
          onPress={handleHome}
        className="bg-orange-500 py-5 rounded-lg mb-6">
          <Text className="text-white text-center font-bold">Sign In</Text>
        </TouchableOpacity>
  
        {/* Divider */}
        <View className="flex-row items-center mb-6">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-gray-500">OR</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>
  
        {/* Social Login Options */}
        <View className=" flex gap-4">
          <TouchableOpacity className="border border-gray-300 py-3 rounded-lg flex-row justify-center items-center">
            <Image source={require('../../assets/google.png')} className="w-6 h-6 mr-2" />
            <Text>Login with Google</Text>
          </TouchableOpacity>
  
          <TouchableOpacity className="border border-gray-300 py-3 rounded-lg flex-row justify-center items-center">
            <Image source={require('../../assets/facebook.png')} className="w-6 h-6 mr-2" />
            <Text>Login with Facebook</Text>
          </TouchableOpacity>
        </View>
  
        {/* Footer Links */}
        <View className="mt-6 text-xl space-y-2">
          <TouchableOpacity>
            <Text className="text-orange-500 text-center">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={handleSignin}>
            <Text className="text-gray-600 text-center mt-3">
<Text className="text-gray-500">Don&apos;t have a account? </Text>
            <Text className="text-orange-500 font-semibold">Register</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
      

  

      
    );
  };

export default SignupScreen