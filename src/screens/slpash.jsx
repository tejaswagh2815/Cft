import {View} from 'react-native';
import React, {useEffect} from 'react';
import {Text} from 'react-native-paper';

const Slpash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text variant="displayLarge">CFT</Text>
    </View>
  );
};

export default Slpash;
