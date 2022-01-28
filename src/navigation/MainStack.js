import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import {
  backOptions,
  mainOptions,
  noHeader,
} from "../config/navigationOptions";
import { homeStack, mainStack } from "../config/navigator";
import HomeStack from "./HomeStack";
import { createStackNavigator } from "@react-navigation/stack";
import CourseInfo from "../screens/courses/courseInfo";
import FeaturedCourses from "../screens/courses/featuredCourses";

const Stack = createStackNavigator();
const { width, height } = Dimensions.get("screen");
const MainStack = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName={mainStack.home}
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        detachPreviousScreen: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name={mainStack.home} component={HomeStack} />
      <Stack.Screen
        name={mainStack.courseInfo}
        component={CourseInfo}
        options={noHeader}
      />
      <Stack.Screen
        name={mainStack.featuredCourses}
        component={FeaturedCourses}
        // options={noHeader}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MainStack;
