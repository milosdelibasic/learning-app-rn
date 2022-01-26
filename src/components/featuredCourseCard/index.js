import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Text from "../text";
import { borderRadius, margin, padding } from "../../config/spacing";
import { gray200, grayDark } from "../../config/colors";
import FastImage from "react-native-fast-image";
import Column from "../column";
import Icon from "react-native-vector-icons/Ionicons";
import Row from "../row";
import { sizes } from "../../config/fonts";
import Button from "../button";

const { width } = Dimensions.get("screen");

const FeaturedCourseCard = ({
  last = false,
  image = "https://res.cloudinary.com/practicaldev/image/fetch/s--Z0wY_Kg2--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdib9r9rk5j1m7oala1p.png",
  name = "React",
  onPress = () => console.log(name),
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { marginRight: last ? margin.large * 2 : margin.large },
      ]}
      onPress={onPress}>
      <FastImage
        style={styles.logo}
        source={{
          uri: image,
        }}
        resizeMode={FastImage.resizeMode.cover}>
        <Row style={styles.rating}>
          <Icon
            name="star"
            color="#FFD700"
            size={sizes.h5}
            style={styles.star}
          />
          <Text bold primary h6>
            4.5
          </Text>
        </Row>
      </FastImage>
      <View style={styles.innerContainer}>
        <Text bold secondary h4 numberOfLines={1} style={styles.text}>
          {name}
        </Text>
        <Row spacing="flex-start" style={styles.spacing}>
          <Icon
            name="person"
            color={grayDark}
            size={sizes.h6}
            style={styles.star}
          />
          <Text h6 secondary>
            120 students
          </Text>
        </Row>
        <Button
          label="More"
          primary
          small
          onPress={onPress}
          style={styles.button}
        />
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedCourseCard;

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    backgroundColor: gray200,
    borderRadius: borderRadius.large * 1.3,
  },
  logo: {
    width: "100%",
    height: (width / 2) * 0.6,
    borderTopLeftRadius: borderRadius.large * 1.2,
    borderTopRightRadius: borderRadius.large * 1.2,
    position: "relative",
  },
  innerContainer: {
    paddingHorizontal: padding.base,
    paddingVertical: padding.small,
  },
  rating: {
    position: "absolute",
    bottom: -1,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: padding.small / 2,
    paddingVertical: padding.small / 3,
    borderTopLeftRadius: 5,
  },
  star: {
    marginRight: 6,
  },
  text: {
    marginBottom: margin.small / 1.5,
  },
  button: {
    width: "100%",
  },
  spacing: {
    marginBottom: margin.small / 1.5,
  },
});
