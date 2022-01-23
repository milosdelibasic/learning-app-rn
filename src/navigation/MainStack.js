import React from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {noHeader} from '../config/navigationOptions';
import {homeStack, mainStack} from '../config/navigator';
import HomeStack from './HomeStack';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const {width, height} = Dimensions.get('screen');
const MainStack = ({}) => {
  return (
    <Stack.Navigator initialRouteName={mainStack.home} screenOptions={noHeader}>
      <Stack.Screen name={mainStack.home} component={HomeStack} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MainStack;
