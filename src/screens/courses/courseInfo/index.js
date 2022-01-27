import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import Text from "../../../components/text";
import FastImage from "react-native-fast-image";
import { gray50, gray900 } from "../../../config/colors";
import { margin } from "../../../config/spacing";
import Icon from "react-native-vector-icons/Ionicons";
import { hitBox20 } from "../../../config/helpers";
import { verticalScale } from "../../../config/fonts";
import { TabView, SceneMap } from "react-native-tab-view";

const { width, height } = Dimensions.get("screen");

const CourseInfo = ({ route, navigation }) => {
  const { course, defaultImage } = route?.params;
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);
  const layout = useWindowDimensions();
  console.log("🚀 ~ file: index.js ~ line 29 ~ CourseInfo ~ layout", layout);

  const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
  );

  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  return (
    <View style={styles.container}>
      <FastImage
        source={{
          uri: course?.infoImage || defaultImage,
        }}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.image}>
        <View style={styles.overlay}>
          <Text bold white style={styles.title}>
            {course?.title}
          </Text>
        </View>
      </FastImage>
      <TouchableOpacity
        hitSlop={hitBox20}
        onPress={() => navigation.goBack()}
        style={styles.back}>
        <Icon name="md-arrow-back" size={30} color={gray50} />
      </TouchableOpacity>
      <ScrollView style={styles.body}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </ScrollView>
    </View>
  );
};

export default CourseInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray900,
    position: "relative",
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
    height: "13%",
    width,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    backgroundColor: gray900,
    position: "absolute",
    bottom: 0,
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: verticalScale(17),
  },
});
