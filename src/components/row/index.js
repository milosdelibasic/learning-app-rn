import { StyleSheet, View } from "react-native";
import React from "react";

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
