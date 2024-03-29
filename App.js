import React, { useState } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import LoginScreen from './login';
import HomeScreen from './HomeScreen';
import ProfileScreen from './profile';
import ProductsScreen from './BallsSwipe';
import GalleryScreen from './Pics';
import WishScreen from './Favorite';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigator = ({ isNightMode }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#024A9B',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: isNightMode ? '#292929' : '#BBBABA',
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  const theme = DarkTheme;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={HomeTabNavigator} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Balls" component={ProductsScreen} />
        <Stack.Screen name="PicsScreen" component={GalleryScreen} />
        <Stack.Screen name="Favourites" component={WishScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
