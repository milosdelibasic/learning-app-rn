import React from "react";
import { StyleSheet, Text as NativeText } from "react-native";
import { gray400, gray50, gray900 } from "../../config/colors";
import fonts, { sizes } from "../../config/fonts";
import { lineHeight } from "../../config/spacing";

const getSize = ({ h1, h2, h3, h4, h5, h6 }) => {
  const sizeStyles = [];

  if (h1) {
    sizeStyles.push(styles.h1);
    s;
  }
  if (h2) {
    sizeStyles.push(styles.h2);
  }
  if (h3) {
    sizeStyles.push(styles.h3);
  }
  if (h4) {
    sizeStyles.push(styles.h4);
  }
  if (h5) {
    sizeStyles.push(styles.h5);
  }
  if (h6) {
    sizeStyles.push(styles.h6);
  }
  return sizeStyles;
};

const getStyles = rest => {
  const containerStyles = [];

  const {
    white,
    tertiary,
    gray,
    bold,
    semiBold,
    uppercase,
    primary,
    secondary,
    center,
    warning,
    link,
  } = rest;

  if (center) {
    containerStyles.push(styles.center);
  }
  if (primary) {
    containerStyles.push(styles.primary);
  }
  if (secondary) {
    containerStyles.push(styles.secondary);
  }
  if (gray) {
    containerStyles.push(styles.gray);
  }
  if (white) {
    containerStyles.push(styles.white);
  }
  if (link) {
    containerStyles.push(styles.link);
  }
  if (tertiary) {
    containerStyles.push(styles.tertiary);
  }
  if (warning) {
    containerStyles.push(styles.warning);
  }
  if (bold) {
    containerStyles.push(styles.bold);
  }
  if (semiBold) {
    containerStyles.push(styles.semiBold);
  }
  if (uppercase) {
    containerStyles.push(styles.uppercase);
  }

  return containerStyles;
};

const Text = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  children,
  style,
  numberOfLines,
  onPress,
  ...rest
}) => {
  const sizeStyles = getSize({ h1, h2, h3, h4, h5, h6 });
  const textStyles = getStyles({ ...rest });

  return (
    <NativeText
      numberOfLines={numberOfLines}
      style={StyleSheet.flatten([styles.text, sizeStyles, textStyles, style])}
      onPress={onPress}>
      {children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontFamily: fonts.boldOpen.fontFamily,
  },
  semiBold: {
    fontFamily: fonts.semiBoldOpen.fontFamily,
  },
  center: {
    textAlign: "center",
  },
  h1: {
    fontSize: sizes.h1,
    lineHeight: lineHeight.big,
  },
  h2: {
    fontSize: sizes.h2,
  },
  h3: {
    fontSize: sizes.h3,
  },
  h4: {
    fontSize: sizes.h4,
  },
  h5: {
    fontSize: sizes.h5,
  },
  h6: {
    fontSize: sizes.h6,
  },
  primary: {
    color: gray50,
  },
  secondary: {
    color: gray900,
  },
  tertiary: {
    color: gray400,
  },
  text: {
    color: gray50,
    fontFamily: fonts.regularOpen.fontFamily,
  },
  uppercase: {
    textTransform: "uppercase",
  },
  warning: {
    color: "#B40025",
  },
  white: {
    color: gray50,
  },
  link: {
    color: gray400,
  },
});

export default Text;
