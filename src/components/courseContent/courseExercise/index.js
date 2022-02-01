import React from "react";
import { StyleSheet, View } from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FAIcon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Feather";

import { sizes } from "../../../config/fonts";
import { gray200, gray400, gray50 } from "../../../config/colors";
import { margin, padding } from "../../../config/spacing";

import Row from "../../row";
import Text from "../../text";
import Divider from "../../divider";

const CourseExercise = ({ title, type, icon, last }) => {
  const renderIcon = () => {
    switch (type) {
      case "drag":
        return (
          <MaterialIcons name="drag-indicator" color={gray50} size={sizes.h3} />
        );
      case "question":
        return (
          <FAIcon name="question-circle-o" color={gray50} size={sizes.h3} />
        );
      case "code":
        return <FAIcon name="code" color={gray50} size={sizes.h3} />;

      default:
        return <></>;
    }
  };
  return (
    <>
      <Row style={styles.container}>
        <Row spacing="flex-start" style={styles.left}>
          <Icon
            name="check-circle"
            size={sizes.h3}
            color={gray200}
            style={styles.icon}
          />
          <Text primary h5 semiBold numberOfLines={1}>
            {title}
          </Text>
        </Row>
        {icon && type && <View style={styles.right}>{renderIcon()}</View>}
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
    width: "80%",
  },
  right: {
    width: "20%",
    alignItems: "flex-end",
  },
});
