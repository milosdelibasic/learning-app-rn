import React from "react";
import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";

import Share from "react-native-share";
import FastImage from "react-native-fast-image";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Row from "@components/Row";
import Icon from "@components/Icon";

import { hitBox20 } from "@config/helpers";
import { gray50 } from "@config/colors";
import { margin, padding } from "@config/spacing";
import { handleError } from "@utils/error";

const { width } = Dimensions.get("screen");

const Header = ({ title, image, defaultImage, imageHeight }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const onShareHandler = async () => {
    try {
      const options = {
        message: `Check out this amazing ${title} course on PhantoxLearn app!
Google Play: https://google.com
App Store: https://apple.com`,
      };
      await Share.open(options);
    } catch (e) {
      handleError({
        message: e.message,
        source: "CourseInfo/onShareHandler",
        hide: true,
      });
    }
  };

  return (
    <FastImage
      source={{
        uri: image || defaultImage,
      }}
      resizeMode={FastImage.resizeMode.cover}
      style={[styles.image, { height: imageHeight }]}>
      <Row
        style={[
          styles.row,
          {
            top: !insets.top || insets.top === 0 ? margin.large : insets.top,
          },
        ]}>
        <TouchableOpacity
          hitSlop={hitBox20}
          onPress={() => navigation.goBack()}
          style={styles.back}>
          <Icon type="ionicon" name="md-arrow-back" size={30} color={gray50} />
        </TouchableOpacity>
        <TouchableOpacity
          hitSlop={hitBox20}
          onPress={onShareHandler}
          style={[styles.back, styles.shareIcon]}>
          <Icon type="ionicon" name="share-social" size={24} color={gray50} />
        </TouchableOpacity>
      </Row>
    </FastImage>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    width,
  },
  row: {
    position: "absolute",
    width,
    paddingHorizontal: padding.large,
  },
  back: {
    height: 40,
    width: 40,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  shareIcon: {
    paddingRight: 3,
  },
});
