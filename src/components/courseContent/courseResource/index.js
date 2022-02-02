import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { margin, padding } from "../../../config/spacing";
import Row from "../../row";
import NumberContainer from "../numberContainer";
import Divider from "../../divider";
import Icon from "react-native-vector-icons/FontAwesome5";
import FAIcon from "react-native-vector-icons/FontAwesome";
import { gray200, gray400 } from "../../../config/colors";
import { sizes } from "../../../config/fonts";

const CourseResource = ({
  resource = { type: "pdf", title: "Cheatsheet" },
  number,
  icon,
  last,
}) => {
  const renderIcon = () => {
    switch (resource?.type) {
      case "pdf":
        return <Icon name="file-pdf" color={gray200} size={sizes.h3} />;
      case "txt":
        return <FAIcon name="file-text" color={gray200} size={sizes.h3} />;
      case "img":
        return <Icon name="file-image" color={gray200} size={sizes.h3} />;

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
