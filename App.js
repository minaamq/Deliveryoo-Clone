import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
const Stack = createNativeStackNavigator();
import { NativeWindStyleSheet } from "nativewind";
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from  "react-redux"
import { store } from './store';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';

NativeWindStyleSheet.setOutput({
  default: "native",
});
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
     <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurants" component={RestaurantScreen}/>
      <Stack.Screen name="Basket" component={BasketScreen}
      options={{presentation:'modal', headerShown:false}} />
      <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen}
      options={{presentation:"fullScreenModal" , headerShown:false}}/>
      <Stack.Screen name="Delivery" component={DeliveryScreen}
      options={{presentation:"fullScreenModal" , headerShown:false}}/>
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>

  );
}

