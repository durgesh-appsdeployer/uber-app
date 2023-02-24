import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MobileVerification from './src/screens/MobileVerification';
import OTPScreen from './src/screens/OTPScreen';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

function App() {


  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="verify" component={MobileVerification} options={{ title: 'Mobile Verification', headerShown: false }}></Stack.Screen>
          <Stack.Screen name="otp" component={OTPScreen} options={{ title: 'OTP Screen', headerShown: false }}></Stack.Screen>
          <Stack.Screen name="home" component={Home} options={{ title: 'Home', headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
