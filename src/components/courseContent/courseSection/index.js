import React from "react";
import { StyleSheet, View } from "react-native";

import Text from "@components/Text";
import Row from "@components/Row";

import { gray200, gray400 } from "@config/colors";
import { margin } from "@config/spacing";
import { sizes } from "@config/fonts";
import Icon from "@components/Icon";

const CourseSection = ({
  section = { title: "test", time: 2 },
  number = 1,
  last,
}) => {
  return (
    <>
      <Row>
        <Row spacing="flex-start" style={styles.left}>
          <View style={styles.outerContainer}>
            <View style={styles.container}>
              <Text semiBold secondary h3 numberOfLines={1}>
                {number}
              </Text>
            </View>
          </View>
          <Text primary h5 semiBold style={styles.title} numberOfLines={1}>
            {section?.title}
          </Text>
        </Row>
        <Row spacing="flex-start" style={styles.right}>
          <Icon
            type="materialC"
            name="timer-sand-full"
            size={sizes.h5}
            style={styles.icon}
            color={gray200}
          />
          <Text h6 primary style={styles.hours}>
            {section?.time}
          </Text>
        </Row>
      </Row>
      {!last && <View style={styles.line} />}
    </>
  );
};

export default CourseSection;

const styles = StyleSheet.create({
  outerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 44,
    height: 44,
    borderRadius: 44,
    backgroundColor: gray400,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  container: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: gray200,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginLeft: margin.base,
  },
  line: {
    height: 14,
    width: 2,
    left: 21,
    backgroundColor: gray400,
    marginVertical: 3,
    borderRadius: 2,
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
});
