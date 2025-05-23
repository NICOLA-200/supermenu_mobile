import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";



const AuthLayout = () => {


//   if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <>
      <Stack>
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signup"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

    
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default AuthLayout;