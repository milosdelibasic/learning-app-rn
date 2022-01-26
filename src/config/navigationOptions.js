import React from "react";
import { Dimensions, View, TouchableOpacity, Pressable } from "react-native";
import { padding } from "../config/spacing";
import Text from "../components/text";
import * as RootNavigation from "../navigation/RootNavigation";
import { mainStack, profileStack } from "./navigator";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { hitBox20 } from "../config/helpers";
import { gray300, gray400, gray50, gray800, gray900, grayDark } from "./colors";

const { width, height } = Dimensions.get("screen");

// console.log("store", store);

export const mainOptions = {
  headerShown: true,
  headerStyle: {
    backgroundColor: gray900,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
  },
  headerShadowVisible: true,
  headerTitle: () => (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {/* <Logo width={width / 3} height={height / 18} /> */}
      <Text white h5 bold>
        HypeLearn
      </Text>
    </View>
  ),
  headerLeft: () => (
    <TouchableOpacity hitSlop={hitBox20} onPress={() => {}}>
      <Icon name="menu-outline" size={30} color={gray50} />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity hitSlop={hitBox20} onPress={() => {}}>
      <MaterialIcon name="dots-vertical" size={30} color={gray50} />
    </TouchableOpacity>
  ),
  headerLeftContainerStyle: {
    paddingLeft: padding.large,
    flex: 1,
  },
  headerRightContainerStyle: {
    paddingRight: padding.large,
    flex: 1,
  },
  headerTitleContainerStyle: {
    flex: 2,
    alignItems: "center",
  },
};

export const tab = {
  tabBarStyle: {
    height: height / 11.5,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: gray900,
    borderTopColor: gray900,
    position: "absolute",
    bottom: 25,
    left: padding.big / 1.3,
    right: padding.big / 1.3,
    borderRadius: 25,
  },
  tabBarItemStyle: {},

  tabBarActiveTintColor: gray50,
  tabBarInactiveTintColor: gray400,
  tabBarLabelStyle: {
    backgroundColor: "transparent",
  },
  tabBarButton: props => (
    <Pressable
      android_ripple={{
        color: gray300,
        borderless: true,
        radius: width / 8,
      }}
      {...props}
    />
  ),
};

export const noHeader = {
  headerShown: false,
};
