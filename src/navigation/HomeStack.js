import {View, Text} from 'react-native';
import React from 'react';
import {homeStack} from '../config/navigator';
import Home from '../screens/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {mainOptions, tab} from '../config/navigationOptions';

const HomeStack = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={homeStack.home}
      screenOptions={{...tab, ...mainOptions}}>
      <Tab.Screen
        name={homeStack.home}
        component={Home}
        options={{
          tabBarLabel: 'Početna',
          //   tabBarIcon: ({focused, color, size}) => (
          //     <Icon
          //       name={focused ? 'home' : 'home-outline'}
          //       size={size}
          //       color={color}
          //     />
          //   ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;
