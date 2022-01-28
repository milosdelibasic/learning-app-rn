import { StyleSheet, useWindowDimensions, View } from "react-native";
import React from "react";
import { gray900 } from "../../../config/colors";
import Text from "../../../components/text";
import { SceneMap, TabView } from "react-native-tab-view";

const FeaturedCourses = () => {
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
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default FeaturedCourses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray900,
  },
});
