import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import Row from "@components/Row";
import Line from "@components/Line";
import Text from "@components/Text";
import Button from "@components/Button";

import { gray300, gray400, gray50, gray500 } from "@config/colors";
import { borderRadius, padding } from "@config/spacing";
import PhantoXLogo from "@images/logos/PhantoX.svg";
import BottomSheetComponent from "@components/bottomSheet";
import { useDispatch } from "react-redux";
import { actions } from "@modules/bottomSheet/reducer";
const { width } = Dimensions.get("screen");

const BecomePrime = () => {
  const dispatch = useDispatch();

  return (
    <Row spacing="flex-start">
      <Line />
      <View style={styles.container}>
        <Row>
          <PhantoXLogo width={100} height={28} />
          <Text semiBold style={{ fontSize: 34 }}>
            Prime
          </Text>
        </Row>
        <Button
          label="Learn More"
          secondary
          style={styles.button}
          onPress={() => dispatch(actions.open(<Text>Test ;)</Text>))}
        />
      </View>
    </Row>
  );
};

export default BecomePrime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray500,
    borderRadius: borderRadius.big,
    paddingVertical: padding.large,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: padding.large,
    paddingVertical: padding.small,
    borderRadius: borderRadius.large * 1.2,
  },
});
