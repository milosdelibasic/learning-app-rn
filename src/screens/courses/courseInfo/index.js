import React, { useState } from "react";
import { Dimensions, StyleSheet, View, TouchableOpacity } from "react-native";

import FastImage from "react-native-fast-image";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Icon from "react-native-vector-icons/Ionicons";
import Share from "react-native-share";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import CourseContent from "./CourseContent";
import CourseOverview from "./CourseOverview";
import Text from "@components/Text";
import Button from "@components/Button";
import Row from "@components/Row";

import { gray200, gray50, gray600, gray900 } from "@config/colors";
import fonts, { verticalScale } from "@config/fonts";
import { margin, padding } from "@config/spacing";
import { hitBox20 } from "@config/helpers";

const { width, height } = Dimensions.get("screen");

const imageHeight = height / 3;
const tabBarHeight = imageHeight / 6;

const CourseInfo = ({ route, navigation }) => {
  const { course, defaultImage } = route?.params;
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Overview" },
    { key: "second", title: "Course content" },
  ]);

  const insets = useSafeAreaInsets();

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
          height: tabBarHeight + StyleSheet.hairlineWidth,
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

  const onShareHandler = async () => {
    try {
      const options = {
        message: `Check out this amazing ${course?.title} course on PhantoxLearn app!
Google Play: https://google.com
App Store: https://apple.com`,
      };
      await Share.open(options);
    } catch (e) {
      handleError({
        message: e.message,
        source: "CourseInfo/onShareHandler",
        hide: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <FastImage
        source={{
          uri: course?.infoImage || defaultImage,
        }}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.image}>
        {/* <View style={styles.overlay}></View> */}
      </FastImage>
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
      <View style={styles.center}>
        <Button primary medium label="Enroll" style={styles.button} />
      </View>
      <Row
        style={[
          styles.row,
          {
            top: !insets.top || insets.top === 0 ? margin.large : insets.top,
          },
        ]}>
        <TouchableOpacity
          hitSlop={hitBox20}
          onPress={() => navigation.goBack()}
          style={styles.back}>
          <Icon name="md-arrow-back" size={30} color={gray50} />
        </TouchableOpacity>
        <TouchableOpacity
          hitSlop={hitBox20}
          onPress={onShareHandler}
          style={[styles.back, styles.shareIcon]}>
          <Icon name="share-social" size={24} color={gray50} />
        </TouchableOpacity>
      </Row>
    </View>
  );
};

export default CourseInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray900,
  },
  image: {
    width,
    height: imageHeight,
  },
  back: {
    height: 40,
    width: 40,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  shareIcon: {
    paddingRight: 3,
  },
  row: {
    position: "absolute",
    width,
    paddingHorizontal: padding.large,
  },
  body: {
    flex: 1,
  },
  title: {
    fontSize: verticalScale(17),
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: gray900,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  center: {
    position: "absolute",
    left: padding.big,
    bottom: padding.small,
  },
  button: {
    width: width - padding.big * 2,
    height: height <= 700 ? width / 9 : width / 8,
  },
});
