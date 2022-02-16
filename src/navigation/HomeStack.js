import React from "react";
import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import FeatherIcon from "react-native-vector-icons/Feather";
import IoniconIcon from "react-native-vector-icons/Ionicons";

import Home from "@screens/Home";
import Profile from "@screens/Profile";

import { homeStack } from "@config/navigator";
import { mainOptions, tab } from "@config/navigationOptions";

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeStack.home}
      screenOptions={{ ...tab, ...mainOptions }}>
      <Tab.Screen
        name={homeStack.home}
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "home" : "home"}
              size={size}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />

      <Tab.Screen
        name={homeStack.coding}
        component={Profile}
        options={{
          tabBarLabel: "Coding",
          tabBarIcon: ({ focused, color, size }) => (
            <FeatherIcon
              name={focused ? "code" : "code"}
              size={size}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name={homeStack.learn}
        component={Profile}
        options={{
          tabBarLabel: "Learn",
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "book" : "book"}
              size={size}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name={homeStack.community}
        component={Profile}
        options={{
          tabBarLabel: "Community",
          tabBarIcon: ({ focused, color, size }) => (
            <IoniconIcon
              name={focused ? "chatbubble" : "chatbubble"}
              size={size}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name={homeStack.profile}
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name={focused ? "user-alt" : "user-alt"}
              size={size}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  icon: {
    // marginTop: 10,
  },
});
