import React from "react";
import { StyleSheet, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import CourseInfo from "@screens/Courses/courseInfo";
import FeaturedCourses from "@screens/Courses/featuredCourses";
import HomeStack from "./HomeStack";

import { noHeader } from "@config/navigationOptions";
import { mainStack } from "@config/navigator";

const Stack = createStackNavigator();

const { width, height } = Dimensions.get("screen");

const MainStack = () => {
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
