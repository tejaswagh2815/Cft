import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';

const validation = Yup.object().shape({
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string().required().min(4, 'password is short'),
});

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Login</Text>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validation}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={{width: '90%'}}>
            <Text style={styles.title}>Email Id</Text>
            <TextInput
              style={styles.txtinput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && (
              <Text style={styles.errortxt}>{errors.email}</Text>
            )}
            <Text style={[styles.title, {paddingTop: 10}]}>Password</Text>
            <TextInput
              style={styles.txtinput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {errors.password && (
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
              onPress={() => navigation.navigate('Signup')}>
              goto Sign Up
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;

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
