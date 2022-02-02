import React from "react";
import { StyleSheet } from "react-native";
import Divider from "../../divider";
import Row from "../../row";
import Column from "../../column";
import Text from "../../text";
import NumberContainer from "../numberContainer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { sizes } from "../../../config/fonts";
import { gray200 } from "../../../config/colors";
import { margin, padding } from "../../../config/spacing";

const CourseArticle = ({
  article = { author: "Test", title: "Test", minutes: "5" },
  number = 1,
  last = false,
}) => {
  return (
    <>
      <Row style={styles.container}>
        <Row spacing="flex-start" style={styles.left}>
          <NumberContainer number={number} />
          <Column>
            <Text semiBold primary h5 numberOfLines={1}>
              {article?.title}
            </Text>
            <Row spacing="flex-start" style={styles.authorRow}>
              <Icon
                name="pencil"
                style={styles.pencilIcon}
                size={sizes.h6}
                color={gray200}
              />
              <Text primary h6 numberOfLines={1}>
                {article?.author}
              </Text>
            </Row>
          </Column>
        </Row>
        <Row spacing="flex-start" style={styles.right}>
          <Icon
            name="timer-sand-full"
            size={sizes.h5}
            style={styles.icon}
            color={gray200}
          />
          <Text h6 primary style={styles.hours}>
            {article?.minutes} min
          </Text>
        </Row>
      </Row>
      {!last && <Divider />}
    </>
  );
};

export default CourseArticle;

const styles = StyleSheet.create({
  container: {
    paddingVertical: padding.small,
  },
  icon: {
    flex: 1,
  },
  hours: {
    flex: 2,
  },
  left: {
    width: "80%",
  },
  right: {
    width: "20%",
  },
  authorRow: {
    marginTop: 4,
  },
  pencilIcon: {
    marginRight: margin.small / 1.5,
  },
});
