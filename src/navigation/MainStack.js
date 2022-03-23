import React from "react";
import { StyleSheet, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import CourseInfo from "@screens/Courses/courseInfo";
import FeaturedCourses from "@screens/Courses/featuredCourses";
import HomeStack from "./HomeStack";

import { backOptions, noHeader } from "@config/navigationOptions";
import { mainStack } from "@config/navigator";
import Settings from "@screens/Settings";
import Share from "@screens/Share";
import Invite from "@screens/Invite";
import Rate from "@screens/Rate";
import FAQ from "@screens/FAQ";
import ToS from "@screens/ToS";
import Contact from "@screens/Contact";
import Blog from "@screens/Blog";

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
        options={backOptions}
      />
      <Stack.Screen
        name={mainStack.settings}
        component={Settings}
        options={backOptions}
      />
      <Stack.Screen
        name={mainStack.share}
        component={Share}
        options={backOptions}
      />
      <Stack.Screen
        name={mainStack.invite}
        component={Invite}
        options={backOptions}
      />
      <Stack.Screen
        name={mainStack.rate}
        component={Rate}
        options={backOptions}
      />
      <Stack.Screen
        name={mainStack.FAQ}
        component={FAQ}
        options={backOptions}
      />
      <Stack.Screen
        name={mainStack.ToS}
        component={ToS}
        options={backOptions}
      />
      <Stack.Screen
        name={mainStack.contact}
        component={Contact}
        options={backOptions}
      />
      <Stack.Screen
        name={mainStack.blog}
        component={Blog}
        options={backOptions}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MainStack;
