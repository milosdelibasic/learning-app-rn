import React from "react";
import { StyleSheet, Dimensions } from "react-native";

import AuthInit from "@screens/Auth/AuthInit";
import Login from "@screens/Auth/Login";
import Register from "@screens/Auth/Register";
import ForgotPassword from "@screens/Auth/ForgotPassword";
import CheckEmail from "@screens/Auth/CheckEmail";
import About from "@screens/Auth/About";

import { createStackNavigator } from "@react-navigation/stack";

import { noHeader, backOptions } from "@config/navigationOptions";
import { authStack } from "@config/navigator";

const Stack = createStackNavigator();

const { width, height } = Dimensions.get("screen");

const AuthStack = ({}) => {
  return (
    <Stack.Navigator initialRouteName={authStack.authInit}>
      <Stack.Screen
        name={authStack.authInit}
        component={AuthInit}
        options={noHeader}
      />
      <Stack.Screen
        name={authStack.login}
        component={Login}
        options={backOptions}
      />
      <Stack.Screen
        name={authStack.register}
        component={Register}
        options={backOptions}
      />
      <Stack.Screen
        name={authStack.forgotPassword}
        component={ForgotPassword}
        options={backOptions}
      />
      <Stack.Screen
        name={authStack.checkEmail}
        component={CheckEmail}
        options={backOptions}
      />
      <Stack.Screen
        name={authStack.about}
        component={About}
        options={backOptions}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AuthStack;
