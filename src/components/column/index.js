import React from "react";
import { StyleSheet, View } from "react-native";

const Column = ({
  style,
  children,
  spacing = "flex-start",
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
    height: "100%",
    flexDirection: "column",
  },
});
