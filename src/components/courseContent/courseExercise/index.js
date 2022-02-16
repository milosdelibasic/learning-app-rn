import React from "react";
import { StyleSheet, View } from "react-native";

import Text from "@components/Text";
import Row from "@components/Row";
import Divider from "@components/Divider";
import Icon from "@components/Icon";

import { sizes } from "@config/fonts";
import { gray200, gray400 } from "@config/colors";
import { margin, padding } from "@config/spacing";

const CourseExercise = ({
  exercise = { title: "", type: "drag" },
  icon,
  last,
}) => {
  const renderIcon = () => {
    switch (exercise?.type) {
      case "drag":
        return (
          <Icon
            type="material"
            name="drag-indicator"
            color={gray200}
            size={sizes.h3}
          />
        );
      case "question":
        return (
          <Icon
            type="fa"
            name="question-circle-o"
            color={gray200}
            size={sizes.h3}
          />
        );
      case "code":
        return <Icon type="fa" name="code" color={gray200} size={sizes.h3} />;

      default:
        return <></>;
    }
  };
  return (
    <>
      <Row style={styles.container}>
        <Row spacing="flex-start" style={styles.left}>
          <Icon
            type="feather"
            name="check-circle"
            size={sizes.h3}
            color={gray200}
            style={styles.icon}
          />
          <Text primary h5 semiBold numberOfLines={1}>
            {exercise?.title}
          </Text>
        </Row>
        {icon && exercise?.type && (
          <View style={styles.right}>{renderIcon()}</View>
        )}
      </Row>
      {!last && <Divider />}
    </>
  );
};

export default CourseExercise;

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
