import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Row from "@components/Row";
import Text from "@components/Text";

import { gray400, gray50, gray600 } from "@config/colors";
import { shadow3 } from "@config/shadows";
import { borderRadius, padding } from "@config/spacing";
import Line from "@components/Line";

const HomeRow = ({
  title,
  btnTitle = "See All",
  btnAction = () => {},
  backgroundColor = gray400,
  textColor = gray50,
}) => {
  return (
    <Row style={styles.row}>
      <Row spacing="flex-start">
        <Line />
        <View style={[styles.title, { backgroundColor }]}>
          <Text h6 semiBold style={{ color: textColor }}>
            {title}
          </Text>
        </View>
      </Row>
      <TouchableOpacity onPress={btnAction}>
        <Text semiBold h6>
          {btnTitle}
        </Text>
      </TouchableOpacity>
    </Row>
  );
};

export default HomeRow;

const styles = StyleSheet.create({
  row: {
    padding: padding.large,
    paddingLeft: 0,
  },
  title: {
    paddingHorizontal: padding.base,
    paddingVertical: padding.small / 2,
    borderColor: gray600,
    borderWidth: 1,
    borderRadius: borderRadius.big,
    ...shadow3,
  },
});
