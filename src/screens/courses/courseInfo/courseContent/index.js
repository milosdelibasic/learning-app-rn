import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { gray900 } from "../../../../config/colors";
import { padding } from "../../../../config/spacing";
import Text from "../../../../components/text";

const CourseContent = ({ course }) => {
  return (
    <ScrollView style={styles.container}>
      <Text white h4 bold center>
        Course content
      </Text>
    </ScrollView>
  );
};

export default CourseContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray900,
    padding: padding.base,
  },
});
