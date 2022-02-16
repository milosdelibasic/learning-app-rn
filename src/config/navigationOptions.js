import React from "react";
import { Dimensions, View, TouchableOpacity, Pressable } from "react-native";

import Text from "@components/Text";
import Icon from "@components/Icon";

import * as RootNavigation from "@navigation/RootNavigation";
import { padding } from "@config/spacing";
import { hitBox20 } from "@config/helpers";
import {
  gray300,
  gray400,
  gray50,
  gray800,
  gray900,
  grayDark,
} from "@config/colors";

const { width, height } = Dimensions.get("screen");

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
  cardStyle: {
    backgroundColor: gray900,
  },
  headerShadowVisible: true,
  headerTitle: () => (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {/* <Logo width={width / 3} height={height / 18} /> */}
      <Text white h5 bold>
        PhantoxLearn
      </Text>
    </View>
  ),
  headerLeft: () => (
    <TouchableOpacity hitSlop={hitBox20} onPress={() => {}}>
      <Icon type="ionicon" name="menu-outline" size={30} color={gray50} />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity hitSlop={hitBox20} onPress={() => {}}>
      <Icon type="materialC" name="dots-vertical" size={30} color={gray50} />
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

export const backOptions = {
  headerLeft: () => (
    <TouchableOpacity
      hitSlop={hitBox20}
      onPress={() => RootNavigation.goBack()}>
      <Icon type="ionicon" name="md-arrow-back" size={30} color={gray50} />
    </TouchableOpacity>
  ),
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
