import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";

import Text from "@components/Text";

import { borderRadius } from "@config/spacing";
import { verticalScale } from "@config/fonts";
import { gray50, grayDark } from "@config/colors";

const { width, height } = Dimensions.get("screen");
const getSize = ({ small, medium, large }) => {
  const sizeStyles = [];

  if (small) {
    sizeStyles.push(styles.small);
  }
  if (medium) {
    sizeStyles.push(styles.medium);
  }
  if (large) {
    sizeStyles.push(styles.large);
  }
  return sizeStyles;
};

const getShape = ({ round }) => {
  const shapeStyles = [];

  if (round) {
    shapeStyles.push(styles.round);
  }

  return shapeStyles;
};

const getStyles = rest => {
  const containerStyles = [];
  const { primary, secondary, borderSecondary, cancel, confirm } = rest;

  if (primary) {
    containerStyles.push(styles.primary);
  }
  if (secondary) {
    containerStyles.push(styles.secondary);
  }
  if (cancel) {
    containerStyles.push(styles.cancel);
  }
  if (confirm) {
    containerStyles.push(styles.confirm);
  }
  if (borderSecondary) {
    containerStyles.push(styles.borderSecondary);
  }
  return containerStyles;
};

const Button = ({
  label,
  secondaryLabel,
  onPress,
  small,
  medium,
  large,
  round,
  icon,
  style,
  textStyle,
  white,
  disabled,
  testID,
  hitSlop,
  ...rest
}) => {
  const sizeStyles = getSize({ small, medium, large });
  const shapeStyles = getShape({ round });
  const colorStyles = getStyles({ ...rest });

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      testID={testID}
      hitSlop={hitSlop || { top: 2, bottom: 2, left: 2, right: 2 }}>
      <View
        style={StyleSheet.flatten([
          styles.btnContainerStyle,
          sizeStyles,
          shapeStyles,
          colorStyles,
          style,
        ])}>
        {icon}
        {label && (
          <Text
            h5
            bold
            style={[
              styles.btnTextStyle,
              textStyle,
              rest?.secondary ? styles.secondaryButton : "",
            ]}
            {...rest}>
            {label}
          </Text>
        )}
        {secondaryLabel && (
          <Text h4 bold white style={[styles.btnTextStyle, textStyle]}>
            {secondaryLabel}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  borderSecondary: {
    borderColor: gray50,
    borderRadius: 25,
    borderWidth: 1,
  },
  btnContainerStyle: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  btnTextStyle: {
    marginHorizontal: 3,
    textAlign: "center",
    color: grayDark,
  },
  icon: {
    elevation: 10,
  },
  large: {
    borderRadius: borderRadius.big,
    height: height <= 700 ? verticalScale(56) : verticalScale(50),
  },
  light: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
  },
  medium: {
    borderRadius: 20,
    height: height <= 700 ? width / 8 : width / 7,
    width: width / 2.8,
  },
  round: {
    borderRadius: width / 6,
    height: verticalScale(width / 6),
    width: verticalScale(width / 6),
  },
  small: {
    height: verticalScale(25),
    width: verticalScale(width / 5),
    borderRadius: borderRadius.big,
  },
  white: {
    backgroundColor: gray50,
    color: grayDark,
  },
  primary: {
    backgroundColor: gray50,
  },
  secondary: {
    backgroundColor: grayDark,
    borderWidth: 1,
  },
  secondaryButton: {
    color: gray50,
  },
  cancel: {
    // backgroundColor: grey1,
  },
  confirm: {
    // backgroundColor: orange2,
  },
  borderSecondary: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: gray50,
  },
});
