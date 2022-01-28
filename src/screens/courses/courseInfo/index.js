import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useState } from "react";
import Text from "../../../components/text";
import FastImage from "react-native-fast-image";
import { gray200, gray50, gray600, gray900 } from "../../../config/colors";
import { margin, padding } from "../../../config/spacing";
import Icon from "react-native-vector-icons/Ionicons";
import { hitBox20 } from "../../../config/helpers";
import fonts, { verticalScale } from "../../../config/fonts";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import CourseOverview from "./courseOverview";
import CourseContent from "./courseContent";

const { width, height } = Dimensions.get("screen");

const CourseInfo = ({ route, navigation }) => {
  const { course, defaultImage } = route?.params;
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Overview" },
    { key: "second", title: "Course content" },
  ]);

  const FirstRoute = () => <CourseOverview course={course} />;
  const SecondRoute = () => <CourseContent course={course} />;

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
          borderTopLeftRadius: 20,
        }}
        indicatorStyle={{ backgroundColor: gray200 }}
        bounces
        renderLabel={({ route, focused, color }) => {
          return (
            <Text
              h6
              style={{
                color: focused ? gray50 : gray600,
                marginBottom: 8,
                fontFamily: fonts.semiBoldOpen.fontFamily,
              }}>
              {route.title}
            </Text>
          );
        }}
      />
      // <View style={styles.tabBar}>
      //   {props.navigationState.routes.map((route, i) => {
      //     const opacity = props.position.interpolate({
      //       inputRange,
      //       outputRange: inputRange.map(inputIndex =>
      //         inputIndex === i ? 1 : 0.4,
      //       ),
      //     });

      //     return (
      //       <TouchableOpacity
      //         key={i}
      //         style={styles.tabItem}
      //         onPress={() => setIndex(i)}>
      //         <Animated.Text style={{ opacity, color: gray50 }}>
      //           {route.title}
      //         </Animated.Text>
      //       </TouchableOpacity>
      //     );
      //   })}
      // </View>
    );
  };

  return (
    <View style={styles.container}>
      <FastImage
        source={{
          uri: course?.infoImage || defaultImage,
        }}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.image}>
        <View style={styles.overlay}></View>
      </FastImage>
      <TouchableOpacity
        hitSlop={hitBox20}
        onPress={() => navigation.goBack()}
        style={styles.back}>
        <Icon name="md-arrow-back" size={30} color={gray50} />
      </TouchableOpacity>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        showPageIndicator
        initialLayout={{ width }}
      />
    </View>
  );
};

export default CourseInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray900,
    // position: "relative",
  },
  image: {
    width,
    height: height / 4,
  },
  back: {
    position: "absolute",
    left: margin.large,
    top: margin.large,
    height: 40,
    width: 40,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  body: {
    flex: 1,
  },
  overlay: {
    height: 20,
    width,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    backgroundColor: gray900,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: verticalScale(17),
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: gray900,
    // paddingTop: Constants.statusBarHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});
