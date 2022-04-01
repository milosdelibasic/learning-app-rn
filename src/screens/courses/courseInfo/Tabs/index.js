import React, { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";

import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import Text from "@components/Text";
import CourseContent from "../CourseContent";
import CourseOverview from "../CourseOverview";

import { gray200, gray50, gray600, gray900 } from "@config/colors";
import fonts from "@config/fonts";

const { width } = Dimensions.get("screen");

const routes = [
  { key: "first", title: "Overview" },
  { key: "second", title: "Course content" },
];

const Tabs = ({ course, tabBarHeight }) => {
  const [index, setIndex] = useState(0);

  const FirstRoute = () => (
    <CourseOverview course={course} extraHeight={tabBarHeight} />
  );
  const SecondRoute = () => (
    <CourseContent course={course} extraHeight={tabBarHeight} />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        style={{
          backgroundColor: gray900,
          borderTopLeftRadius: tabBarHeight / 1.8,
          borderTopRightRadius: tabBarHeight / 1.8,
          height: tabBarHeight + +StyleSheet.hairlineWidth,
        }}
        indicatorStyle={{ backgroundColor: gray200 }}
        bounces
        renderLabel={({ route, focused, color }) => {
          return (
            <Text
              h6
              style={{
                color: focused ? gray50 : gray600,
                fontFamily: fonts.semiBoldOpen.fontFamily,
              }}>
              {route.title}
            </Text>
          );
        }}
      />
    );
  };
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      showPageIndicator
      initialLayout={{ width }}
      style={{
        top: -tabBarHeight,
        width: width + StyleSheet.hairlineWidth,
      }}
    />
  );
};

export default Tabs;
