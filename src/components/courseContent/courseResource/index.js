import React from "react";
import { StyleSheet, View } from "react-native";

import Text from "@components/Text";
import Row from "@components/Row";
import Divider from "@components/Divider";
import Icon from "@components/Icon";
import NumberContainer from "../NumberContainer";

import { margin, padding } from "@config/spacing";
import { gray200, gray400 } from "@config/colors";
import { sizes } from "@config/fonts";

const CourseResource = ({
  resource = { type: "pdf", title: "Cheatsheet" },
  number,
  icon,
  last,
}) => {
  const renderIcon = () => {
    switch (resource?.type) {
      case "pdf":
        return (
          <Icon type="fa5" name="file-pdf" color={gray200} size={sizes.h3} />
        );
      case "txt":
        return (
          <Icon type="fa" name="file-text" color={gray200} size={sizes.h3} />
        );
      case "img":
        return (
          <Icon type="fa5" name="file-image" color={gray200} size={sizes.h3} />
        );

      default:
        return <></>;
    }
  };
  return (
    <>
      <Row style={styles.container}>
        <Row spacing="flex-start" style={styles.left}>
          <NumberContainer number={number} />
          <Text primary h5 semiBold numberOfLines={1}>
            {resource?.title}
          </Text>
        </Row>
        {icon && resource?.type && (
          <View style={styles.right}>{renderIcon()}</View>
        )}
      </Row>
      {!last && <Divider />}
    </>
  );
};

export default CourseResource;

const styles = StyleSheet.create({
  container: {
    paddingVertical: padding.base,
  },
  icon: {
    marginRight: margin.base,
  },
  spacing: {
    borderBottomColor: gray400,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  left: {
    flex: 1,
  },
  right: {
    width: sizes.h2,
    alignItems: "center",
  },
});
