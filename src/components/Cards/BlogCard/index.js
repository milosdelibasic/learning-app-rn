import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import Text from "@components/Text";
import { gray200, gray500, gray600, gray700 } from "@config/colors";
import { borderRadius, margin, padding } from "@config/spacing";
import { shadow10 } from "@config/shadows";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import Row from "@components/Row";
import Button from "@components/Button";
import Icon from "@components/Icon";
import { sizes } from "@config/fonts";
import { homeStack, mainStack } from "@config/navigator";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const GRADIENT_LOCATIONS = [0.1, 1];
const GRADIENT_COLORS = ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.95)"];

const BlogCard = ({ blog, last }) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,

        { marginRight: last ? margin.large * 2 : margin.large },
      ]}>
      <FastImage
        source={{
          uri: blog?.image,
        }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
      <LinearGradient
        colors={GRADIENT_COLORS}
        locations={GRADIENT_LOCATIONS}
        style={[styles.image, styles.gradient]}
      />
      <View style={styles.textContainer}>
        <Row spacing="flex-start">
          <Icon name="pen" type="fa5" color={gray600} size={sizes.h5} />
          <Text h6 semiBold style={styles.iconText}>
            {blog?.author}
          </Text>
        </Row>
        <Text h5 bold secondary numberOfLines={2}>
          {blog?.title}
        </Text>
        <Row>
          <Row spacing="flex-start">
            <Icon name="clock" type="feather" color={gray600} size={sizes.h4} />
            <Text semiBold h6 style={styles.iconText}>
              {blog?.readTime}
            </Text>
          </Row>
          <Row spacing="flex-start">
            <Icon
              name="heart-outline"
              type="ionicon"
              color={gray600}
              size={sizes.h4}
            />
            <Text semiBold h6 style={styles.iconText}>
              {blog?.likes}
            </Text>
          </Row>
        </Row>
        <View style={styles.buttonContainer}>
          <Button
            label="More"
            primary
            small
            style={styles.buttonContainer}
            onPress={() => navigation.navigate(mainStack.blog, { blog })}
          />
        </View>
      </View>
    </View>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: gray200,
    borderRadius: borderRadius.large * 1.3,
    width: width / 1.5,
    height: width / 1.4,
    ...shadow10,
    overflow: "hidden",
  },
  image: {
    width: width / 1.5,
    height: width / 1.5 / 2,
  },
  gradient: {
    position: "absolute",
  },
  textContainer: {
    flex: 1,
    paddingVertical: padding.small / 2,
    paddingHorizontal: padding.small,
    justifyContent: "space-between",
  },
  iconText: {
    marginLeft: margin.small / 2,
    color: gray700,
  },
  buttonContainer: {
    width: "100%",
  },
});
