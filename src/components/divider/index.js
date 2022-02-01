import { StyleSheet, View } from "react-native";
import React from "react";
import { gray400 } from "../../config/colors";

const Divider = ({ style, color = gray400, spacing = 0 }) => {
  return (
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
