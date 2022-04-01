import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import Button from "@components/Button";
import Header from "./Header";
import Tabs from "./Tabs";

import { margin, padding } from "@config/spacing";
import { gray900 } from "@config/colors";

const { width, height } = Dimensions.get("screen");

const imageHeight = height / 3;
const tabBarHeight = imageHeight / 6;

const CourseInfo = ({ route }) => {
  const { course, defaultImage } = route?.params;

  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Header
        title={course?.title}
        image={course?.infoImage}
        defaultImage={defaultImage}
        imageHeight={imageHeight}
      />
      <Tabs course={course} tabBarHeight={tabBarHeight} />
      <Button
        primary
        label="Enroll"
        style={[
          styles.button,
          { bottom: insets.bottom > 0 ? insets.bottom : margin.big },
        ]}
      />
    </View>
  );
};

export default CourseInfo;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: gray900,
  },
  button: {
    left: padding.big,
    width: width - padding.big * 2,
    height: height <= 700 ? width / 9 : width / 8,
    borderRadius: 20,
  },
});
