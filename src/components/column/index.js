import { StyleSheet, View } from "react-native";
import React from "react";

const Column = ({
  style,
  children,
  spacing = "space-between",
  align = "flex-start",
}) => {
  return (
    <View
      style={[
        styles.column,
        style,
        { justifyContent: spacing, alignItems: align },
      ]}>
      {children}
    </View>
  );
};

export default Column;

const styles = StyleSheet.create({
  column: {
    flexDirection: "column",
    justifyContent: "center",
  },
});
