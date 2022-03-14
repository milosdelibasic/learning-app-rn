import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { gray600 } from "@config/colors";
import { padding } from "@config/spacing";

const Line = () => {
  return <View style={styles.line} />;
};

export default Line;

const styles = StyleSheet.create({
  line: {
    height: StyleSheet.hairlineWidth,
    width: padding.large,
    backgroundColor: gray600,
  },
});
