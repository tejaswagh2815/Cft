import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validation = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string().required().min(4, 'password is short'),
});
const Signup = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Register</Text>
      <Formik
        initialValues={{name: '', email: '', password: ''}}
        validationSchema={validation}
        onSubmit={values => {
          console.log(values);
          AsyncStorage.setItem('name', JSON.stringify(values.name));
          AsyncStorage.setItem('email', JSON.stringify(values.email));
          AsyncStorage.setItem('pass', JSON.stringify(values.password));
          navigation.navigate('Login');
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={{width: '90%'}}>
            <Text style={styles.title}>Name</Text>
            <TextInput
              style={styles.txtinput}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {errors.name && touched.name && (
              <Text style={styles.errortxt}>{errors.name}</Text>
            )}
            <Text style={[styles.title, {paddingTop: 10}]}>Email Id</Text>
            <TextInput
              style={styles.txtinput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && touched.email && (
              <Text style={styles.errortxt}>{errors.email}</Text>
            )}
            <Text style={[styles.title, {paddingTop: 10}]}>Password</Text>
            <TextInput
              style={styles.txtinput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && touched.password && (
              <Text style={styles.errortxt}>{errors.password}</Text>
            )}
            <Button
              style={{marginTop: 20}}
              mode="contained"
              onPress={handleSubmit}
              title="Submit">
              Submit
            </Button>
            <Button
              style={{marginTop: 20}}
              onPress={() => navigation.navigate('Login')}>
              Back to Login
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '300',
    color: '#000',
  },
  txtinput: {
    width: '100%',
    alignSelf: 'center',
  },
  errortxt: {
    color: 'red',
  },
});
