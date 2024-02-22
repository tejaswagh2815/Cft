import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [name, setName] = useState();

  const Func = async () => {
    console.log('im here');
    let uname = await AsyncStorage.getItem('name');
    const m = JSON.parse(uname);
    setName(m);
  };

  useEffect(() => {
    Func();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>welcome to home {name}</Text>
    </View>
  );
};

export default Home;
