import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import SegmentedControl from "@react-native-segmented-control/segmented-control";

import {
  gray100,
  gray200,
  gray300,
  gray400,
  gray50,
  gray800,
  gray900,
  grayDark,
} from "@config/colors";
import { padding } from "@config/spacing";
import ActiveCourses from "./ActiveCourses";
import FinishedCourses from "./FinishedCourses";
import Text from "@components/Text";

const Learn = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log(selectedIndex);
  return (
    <View style={styles.container}>
      <SegmentedControl
        values={["Active courses", "Finished courses"]}
        selectedIndex={selectedIndex}
        onChange={event =>
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex)
        }
        appearance="dark"
        tintColor={gray200}
        backgroundColor={gray900}
        style={styles.segmentedControl}
        fontStyle={{ color: gray300 }}
        activeFontStyle={{ color: gray900 }}
      />
      {selectedIndex === 0 ? <ActiveCourses /> : <FinishedCourses />}
    </View>
  );
};

export default Learn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grayDark,
    padding: padding.large,
  },
  segmentedControl: {
    paddingVertical: padding.large * 1.2,
  },
});
