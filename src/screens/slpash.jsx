import {View} from 'react-native';
import React, { useEffect } from 'react';
import {Text} from 'react-native-paper';

const slpash = ({navigation}) => {

    useEffect(()=>{
        setTimeout(() => {
            navigation.replace("Login")
          }, 3000);
    },[])
  return (
    <View>
      <Text variant="displayLarge">CFT</Text>
    </View>
  );
};

export default slpash;
