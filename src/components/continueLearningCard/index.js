import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Text from "../text";
import { gray200, gray300, gray400, grayDark } from "../../config/colors";
import { borderRadius, margin, padding } from "../../config/spacing";
import FastImage from "react-native-fast-image";
import Row from "../row";
import { ProgressBar } from "react-native-paper";
import Column from "../column";
import { verticalScale } from "../../config/fonts";
import Button from "../button";

const { width } = Dimensions.get("screen");

const ContinueLearningCard = ({
  image = "https://res.cloudinary.com/practicaldev/image/fetch/s--Z0wY_Kg2--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdib9r9rk5j1m7oala1p.png",
  last = false,
  progress = 0.4,
  name = "React",
  onPress = () => {},
}) => {
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
            uri: image,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.innerContainer}>
          <Column spacing="space-between">
            <Text h4 bold secondary>
              {name}
            </Text>
            <View style={styles.spacing}>
              <Text secondary bold h6 style={styles.progressText}>
                {Number(progress * 100).toFixed(0)} %
              </Text>
              <ProgressBar
                progress={progress}
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
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
