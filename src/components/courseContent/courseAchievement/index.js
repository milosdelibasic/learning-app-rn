import React from "react";
import { StyleSheet, View } from "react-native";

import Text from "@components/Text";
import Row from "@components/Row";
import Column from "@components/Column";
import Icon from "@components/Icon";

import { borderRadius, margin } from "@config/spacing";
import { gray200, gray600 } from "@config/colors";
import { sizes } from "@config/fonts";

const CourseAchievement = ({ achievements }) => {
  const renderIcon = type => {
    switch (type) {
      case "js-guru":
        return (
          <Icon
            type="ionicon"
            name="logo-javascript"
            color={gray200}
            size={sizes.h3}
          />
        );
      case "medal":
        return (
          <Icon type="ionicon" name="medal" color={gray200} size={sizes.h3} />
        );

      default:
        return <></>;
    }
  };
  return (
    <Row spacing="flex-start" style={styles.row}>
      {achievements?.map((achievement, index) => (
        <View key={index} style={styles.container}>
          <Column align="center" spacing="center">
            {renderIcon(achievement?.type)}
            <Text h6 center style={styles.title}>
              {achievement?.title}
            </Text>
          </Column>
        </View>
      ))}
    </Row>
  );
};

export default CourseAchievement;

const styles = StyleSheet.create({
  row: {
    flexWrap: "wrap",
  },
  container: {
    height: 88,
    width: 88,
    backgroundColor: gray600,
    borderRadius: borderRadius.large,
    borderWidth: 2,
    borderColor: gray200,
    marginRight: margin.small,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    overflow: "hidden",
  },
  title: {
    marginTop: 6,
  },
});
