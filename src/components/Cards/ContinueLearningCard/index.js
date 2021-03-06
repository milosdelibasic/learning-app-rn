import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import FastImage from "react-native-fast-image";
import { ProgressBar } from "react-native-paper";

import Text from "@components/Text";
import Row from "@components/Row";
import Column from "@components/Column";
import Button from "@components/Button";

import { gray200, gray300, grayDark } from "@config/colors";
import { borderRadius, margin, padding } from "@config/spacing";
import { verticalScale } from "@config/fonts";
import { shadow10 } from "@config/shadows";

const { width } = Dimensions.get("screen");

const ContinueLearningCard = ({ course, last, onPress }) => {
  return (
    <View
      style={[
        styles.container,
        { marginRight: last ? margin.large * 2 : margin.large },
      ]}>
      <Row align="flex-start" spacing="flex-start">
        <FastImage
          style={styles.logo}
          source={{
            uri: course?.cardImage,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.innerContainer}>
          <Column spacing="space-between">
            <Text h4 bold secondary numberOfLines={1}>
              {course?.title}
            </Text>
            <View style={styles.spacing}>
              <Text secondary bold h6 style={styles.progressText}>
                {Number(course?.progress * 100).toFixed(0)} %
              </Text>
              <ProgressBar
                progress={course?.progress}
                color={grayDark}
                style={styles.progress}
              />
            </View>
            <Button label="Continue" primary small onPress={onPress} />
          </Column>
        </View>
      </Row>
    </View>
  );
};

export default ContinueLearningCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: gray200,
    borderRadius: borderRadius.large * 1.3,
    width: width / 1.5,
    height: width / 3.5,
    ...shadow10,
    overflow: "visible",
  },
  logo: {
    width: width / 3.5,
    height: width / 3.5,
    borderRadius: borderRadius.large * 1.2,
  },
  innerContainer: {
    padding: padding.base,
  },
  progress: {
    height: 6,
    borderRadius: 3,
    backgroundColor: gray300,
    width: width / 1.5 - width / 3.5 - 2 * padding.base,
  },
  progressText: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 6,
    fontSize: verticalScale(8),
  },
  spacing: {
    marginVertical: margin.small,
  },
});
