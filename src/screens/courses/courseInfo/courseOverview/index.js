import { StyleSheet, ScrollView, View, Dimensions } from "react-native";
import React from "react";
import {
  gray100,
  gray200,
  gray300,
  gray400,
  gray50,
  gray500,
  gray600,
  gray900,
  grayDark,
} from "../../../../config/colors";
import { borderRadius, margin, padding } from "../../../../config/spacing";
import Text from "../../../../components/text";
import Icon from "react-native-vector-icons/Ionicons";
import { sizes } from "../../../../config/fonts";

const { width } = Dimensions.get("screen");

const CourseOverview = ({ course }) => {
  const Card = ({ number, text, icon }) => (
    <View style={styles.card}>
      {number && text && (
        <>
          <Text h2 bold white>
            {number}
          </Text>
          <Text h5 white>
            {text}
          </Text>
        </>
      )}
      {icon}
    </View>
  );
  return (
    <ScrollView style={styles.container}>
      <Text white h4 bold center>
        {course.title}
      </Text>
      <View style={styles.row}>
        <Card number={course?.rating} text={"Rating"} />
        <Card
          icon={
            <Icon size={sizes.h1 * 1.5} color={gray50} name="logo-javascript" />
          }
        />
        <Card number={course?.students} text={"Students"} />
      </View>
    </ScrollView>
  );
};

export default CourseOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray900,
    padding: padding.large,
  },
  row: {
    marginVertical: margin.large,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: width / 4,
    height: width / 4,
    borderColor: gray300,
    // backgroundColor: gray200,
    borderWidth: 1,
    borderRadius: borderRadius.big * 1.5,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.29,
    // shadowRadius: 4.65,

    // elevation: 7,
  },
});
