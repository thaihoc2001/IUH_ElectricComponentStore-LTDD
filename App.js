import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from "@expo/vector-icons/FontAwesome5";
import HomeScreen from './src/screens/home/home';
import OrderScreen from './src/screens/orders/orders';
import UserScreen from './src/screens/user/user';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from './src/screens/cart/cart';
import Navigation from './src/navigation';
import { StatusBar } from 'expo-status-bar';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();


// function MyTabs() {
//   return (
//     <Tab.Navigator screenOptions={{
//       tabBarActiveTintColor: '#F16529',
//       headerTintColor: '#F16529',
//     }}>
//       <Tab.Screen name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="home" size={size} color={color} />
//           ),
//         }}
//       ></Tab.Screen>
//       <Tab.Screen name="Order"
//         component={OrderScreen}
//         options={{
//           tabBarLabel: 'Order',
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="clipboard-list" size={size} color={color} />
//           ),
//         }}
//       ></Tab.Screen>
//       <Tab.Screen name="Cart"
//         component={CartScreen}
//         options={{
//           tabBarLabel: 'User',
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="cart-plus" size={size} color={color} />
//           ),
//         }}
//       ></Tab.Screen>
//       <Tab.Screen name="User"
//         component={MyStack}
//         options={{
//           tabBarLabel: 'User',
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="user" size={size} color={color} />
//           ),
//         }}
//       ></Tab.Screen>
//     </Tab.Navigator>
//   )
// }

// function MyStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="User" component={UserScreen} />
//       <Stack.Screen name="Cart" component={CartScreen} />
//     </Stack.Navigator>
//   );
// }

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
