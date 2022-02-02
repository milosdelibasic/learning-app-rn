import { StyleSheet, View } from "react-native";
import React from "react";
import Row from "../../row";
import Icon from "react-native-vector-icons/FontAwesome5";
import Text from "../../text";
import { margin, padding } from "../../../config/spacing";
import { gray200 } from "../../../config/colors";
import { sizes } from "../../../config/fonts";
import Divider from "../../divider";
import NumberContainer from "../numberContainer";

const CourseVideo = ({
  number = 1,
  video = { title: "JavaScript Basics", duration: "02:40" },
  last,
}) => {
  return (
    <>
      <Row style={styles.container}>
        <Row spacing="flex-start" style={styles.left}>
          <NumberContainer number={number} />
          <Text h5 primary semiBold numberOfLines={1} style={styles.title}>
            {video?.title}
          </Text>
        </Row>
        <Row spacing="flex-start" style={styles.right}>
          <Icon
            name="clock"
            style={styles.spacing}
            size={sizes.h5}
            color={gray200}
          />
          <Text h6 primary>
            {video?.duration}
          </Text>
        </Row>
      </Row>
      {!last && <Divider />}
    </>
  );
};

export default CourseVideo;

const styles = StyleSheet.create({
  container: {
    paddingVertical: padding.base,
  },
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
  left: {
    width: "80%",
  },
  right: {
    width: "20%",
    alignItems: "flex-end",
  },
});
