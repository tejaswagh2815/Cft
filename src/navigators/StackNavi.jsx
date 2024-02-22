import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Slpash from '../screens/Slpash';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const StackNavi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Slpash" component={Slpash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavi;
