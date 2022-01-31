import { StyleSheet } from "react-native";
import React from "react";
import Row from "../../row";
import Icon from "react-native-vector-icons/Feather";
import { sizes } from "../../../config/fonts";
import { gray200, gray400, gray50 } from "../../../config/colors";
import Text from "../../text";
import { margin, padding } from "../../../config/spacing";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FAIcon from "react-native-vector-icons/FontAwesome";

const CourseExercise = ({ title, type, icon, last }) => {
  const renderIcon = () => {
    switch (type) {
      case "drag":
        return (
          <MaterialIcons
            name="drag-indicator"
            color={gray50}
            size={sizes.h3}
            style={styles.iconContainer}
          />
        );
      case "question":
        return (
          <FAIcon
            name="question-circle-o"
            color={gray50}
            size={sizes.h3}
            style={styles.iconContainer}
          />
        );
      case "code":
        return (
          <FAIcon
            name="code"
            color={gray50}
            size={sizes.h3}
            style={styles.iconContainer}
          />
        );

      default:
        return <></>;
    }
  };
  return (
    <Row style={[!last ? styles.spacing : "", styles.container]}>
      <Row spacing="flex-start">
        <Icon
          name="check-circle"
          size={sizes.h3}
          color={gray200}
          style={styles.icon}
        />
        <Text primary h4 semiBold>
          {title}
        </Text>
      </Row>
      {icon && type && renderIcon()}
    </Row>
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
    // marginBottom: margin.base,
  },
});
