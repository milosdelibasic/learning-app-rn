import React from "react";
import { StyleSheet, View } from "react-native";

import Text from "@components/Text";

import { sizes } from "@config/fonts";
import { margin } from "@config/spacing";
import { gray200 } from "@config/colors";

const NumberContainer = ({ number }) => {
  return (
    <View style={[styles.numberContainer, styles.spacing]}>
      <Text h6 semiBold>
        {number}
      </Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    borderColor: gray200,
    borderRadius: sizes.h3,
    width: sizes.h3,
    height: sizes.h3,
    justifyContent: "center",
    alignItems: "center",
  },
  spacing: {
    marginRight: margin.base,
  },
});
