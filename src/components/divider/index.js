import React from "react";
import { StyleSheet, View } from "react-native";

import LinearGradient from "react-native-linear-gradient";

import { gray400, gray600 } from "@config/colors";

const Divider = ({
  style,
  color = gray400,
  backgroundColor = gray600,
  spacing = 0,
  bottomSpacing = 0,
  withGradient = true,
}) => {
  return withGradient ? (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[
        backgroundColor,
        color,
        color,
        color,
        color,
        color,
        backgroundColor,
      ]}
      style={[
        {
          height: StyleSheet.hairlineWidth,
          marginVertical: spacing,
        },
        bottomSpacing && { marginBottom: bottomSpacing },
        style,
      ]}
    />
  ) : (
    <View
      style={[
        {
          borderBottomColor: color,
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginVertical: spacing,
        },
        style,
      ]}
    />
  );
};

export default Divider;
