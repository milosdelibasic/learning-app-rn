import React from "react";
import { StyleSheet, View } from "react-native";

const Row = ({
  style,
  children,
  spacing = "space-between",
  align = "center",
}) => {
  return (
    <View
      style={[
        styles.row,
        {
          justifyContent: spacing,
          alignItems: align,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
