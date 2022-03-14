import React from "react";
import { Dimensions, TouchableOpacity, StyleSheet } from "react-native";

import Icon from "@components/Icon";

import * as RootNavigation from "@navigation/RootNavigation";
import { margin, padding } from "@config/spacing";
import { hitBox20 } from "@config/helpers";
import { gray300, gray400, gray50, gray900 } from "@config/colors";

import PhantoxLogo from "@images/logos/PhantoX.svg";

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
  headerTitle: () => <PhantoxLogo width={100} height={28} />,

  headerLeftContainerStyle: {
    paddingLeft: padding.large * 1.2,
    flex: 1,
  },
  headerRightContainerStyle: {
    paddingRight: padding.large * 1.2,
    flex: 1,
  },
  headerTitleContainerStyle: {
    flex: 2,
    alignItems: "center",
  },
};

export const backOptions = {
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
  headerLeft: () => (
    <TouchableOpacity
      hitSlop={hitBox20}
      onPress={() => RootNavigation.goBack()}
      style={styles.marginLeft}>
      <Icon type="material" name="arrow-back" size={30} color={gray50} />
    </TouchableOpacity>
  ),
  headerTitle: () => {},
};

export const tab = {
  tabBarStyle: {
    height: height / 15,
    backgroundColor: gray900,
    borderTopColor: gray900,
    position: "absolute",
    bottom: 25,
    left: padding.big / 1.4,
    right: padding.big / 1.4,
    borderRadius: 25,
  },
  tabBarItemStyle: {
    top: height / 68,
  },
  tabBarActiveTintColor: gray50,
  tabBarInactiveTintColor: gray400,
  tabBarLabelStyle: {
    backgroundColor: "transparent",
  },
  tabBarButton: props => (
    <TouchableOpacity
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

const styles = StyleSheet.create({
  marginLeft: {
    marginLeft: margin.base,
  },
  marginRight: {
    marginRight: margin.base,
  },
});
