import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import slpash from '../screens/slpash';

const Stack = createNativeStackNavigator();

const StackNavi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Slpash" component={slpash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavi;
