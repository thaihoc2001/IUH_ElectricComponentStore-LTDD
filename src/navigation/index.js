import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from "@expo/vector-icons/FontAwesome5";
import HomeScreen from '../screens/home/home';
import OrderScreen from '../screens/orders/orders';
import UserScreen from '../screens/user/user';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/cart/cart';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Navigation() { 
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="tab" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="auth" component={AuthNavigation} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }
  

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#F16529',
      headerTintColor: '#F16529',
    }}>
      <Tab.Screen name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen name="Order"
        component={OrderScreen}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({ color, size }) => (
            <Icon name="clipboard-list" size={size} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart-plus" size={size} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen name="User"
        component={UserScreen}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  )
}

function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}