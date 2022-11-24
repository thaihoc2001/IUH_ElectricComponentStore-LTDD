import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from "@expo/vector-icons/FontAwesome5";
import HomeScreen from '../screens/home/home';
import OrderScreen from '../screens/orders/orders';
import UserScreen from '../screens/user/user';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/cart/cart';
import Login from '../screens/login/login';
import Register from '../screens/register/register';
import ProductDetail from '../screens/product-details/product-detail';
import { AntDesign } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from '../screens/favorite/favorite';
import OrderInforScreen from '../screens/order-info/order-info';
import OrderComplete from '../screens/order-complete/order-complete';

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
    <Stack.Navigator initialRouteName='auth'>
      <Stack.Screen name="sidebar" component={SideBar} options={{ headerShown: false }} />
      <Stack.Screen name="layout" component={MyTabs} options={{ headerShown: false }} />
      <Stack.Screen name="auth" component={AuthNavigation} options={{ headerShown: false }} />
      <Stack.Screen name="product" component={ProductNavigation} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function SideBar() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  )
}

function MyTabs() {
  
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      tabBarActiveTintColor: '#F16529',
      headerTintColor: '#F16529',
      tabBarShowLabel: false,
      tabBarIconStyle: {
        fontSize: 40,
      },
      tabBarStyle: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      headerShown: false,
    }}
    
    >
      <Tab.Screen name="Home"
        component={HomeScreen}
        options={{

          tabBarIcon: ({ color, size }) => (
            <AntDesign name="appstore-o" size={30} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="heart" size={30} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen name="Cart"
        component={OrderNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="handbag" size={30} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={30} color={color} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  )
}

function AuthNavigation() {
  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function OrderNavigation() {
  return (
    <Stack.Navigator initialRouteName='cart' options={{ headerShown: false }}>
      <Stack.Screen name="cart" component={CartScreen} options={{ headerShown: false }} />
      <Stack.Screen name="infor-order" component={OrderInforScreen} options={{ headerShown: false }} />
      <Stack.Screen name="order-complete" component={OrderComplete} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function ProductNavigation() {
  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen name="productDetail" component={ProductDetail} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}