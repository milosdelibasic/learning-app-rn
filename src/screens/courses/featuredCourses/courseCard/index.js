import React from "react";
import { StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import FastImage from "react-native-fast-image";

import Text from "@components/Text";
import Row from "@components/Row";
import Icon from "@components/Icon";
import Button from "@components/Button";

import { borderRadius, margin, padding } from "@config/spacing";
import { gray100, gray50, grayDark } from "@config/colors";
import { sizes } from "@config/fonts";
import { mainStack } from "@config/navigator";

const defaultImage =
  "https://res.cloudinary.com/practicaldev/image/fetch/s--Z0wY_Kg2--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdib9r9rk5j1m7oala1p.png";

const CourseCard = ({ course, last }) => {
  const navigation = useNavigation();

  const handlePress = () =>
    navigation.navigate(mainStack.courseInfo, { course, defaultImage });
  return (
    <View style={[styles.container, !last ? styles.last : ""]}>
      <Row spacing="space-between" style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <FastImage
            style={styles.logo}
            source={{
              uri: course?.cardImage,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={styles.column}>
            <Text white bold h5>
              {course?.title}
            </Text>
            <Row spacing="flex-start" style={styles.spacing}>
              <Icon
                type="ionicon"
                name="person"
                color={gray100}
                size={sizes.h6}
                style={styles.icon}
              />
              <Text h6 primary>
                {course?.students} student{+course?.students > 0 ? "s" : ""}
              </Text>
            </Row>
            <Row spacing="flex-start" style={styles.rating}>
              <Icon
                type="ionicon"
                name="star"
                color="#FFD700"
                size={sizes.h5}
                style={styles.icon}
              />
              <Text semiBold primary h6>
                {course?.rating}
              </Text>
            </Row>
          </View>
        </View>
        <Button label="More" primary small onPress={handlePress} />
      </Row>
    </View>
  );
};

export default CourseCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // alignItems: "center",
    paddingVertical: padding.base,
  },
  last: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: gray50,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.large,
    marginRight: margin.base,
  },
  icon: {
    marginRight: margin.small / 2,
  },
  column: {
    justifyContent: "space-between",
  },
});
