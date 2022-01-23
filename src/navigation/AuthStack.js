import React from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {noHeader} from '../config/navigationOptions';
import {authStack} from '../config/navigator';
import {createStackNavigator} from '@react-navigation/stack';
import AuthInit from '../screens/auth/authInit';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import ForgotPassword from '../screens/auth/forgotPassword';
import CheckEmail from '../screens/auth/checkEmail';
import About from '../screens/auth/about';

const Stack = createStackNavigator();
const {width, height} = Dimensions.get('screen');
const AuthStack = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName={authStack.authInit}
      screenOptions={noHeader}>
      <Stack.Screen name={authStack.authInit} component={AuthInit} />
      <Stack.Screen name={authStack.login} component={Login} />
      <Stack.Screen name={authStack.register} component={Register} />
      <Stack.Screen
        name={authStack.forgotPassword}
        component={ForgotPassword}
      />
      <Stack.Screen name={authStack.checkEmail} component={CheckEmail} />
      <Stack.Screen name={authStack.about} component={About} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AuthStack;
