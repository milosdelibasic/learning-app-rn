import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  LogBox,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import Text from "@components/Text";
import Row from "@components/Row";
import Icon from "@components/Icon";

import { gray200, gray50, gray600, grayDark } from "@config/colors";
import { borderRadius, margin, padding } from "@config/spacing";
import { sizes } from "@config/fonts";

const { height } = Dimensions.get("screen");

const Accordion = ({ type, icon, title, spacing, children }) => {
  const [open, setOpen] = useState(false);
  const [bodySectionHeight, setBodySectionHeight] = useState(0);

  useEffect(() => {
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
  }, []);

  const renderIcon = () => {
    switch (type) {
      case "section":
        return (
          <Icon
            type="ionicon"
            name="list"
            color={gray50}
            size={sizes.h3}
            style={styles.iconContainer}
          />
        );
      case "video":
        return (
          <Icon
            type="entypo"
            name="folder-video"
            color={gray50}
            size={sizes.h3}
            style={styles.iconContainer}
          />
        );
      case "exercise":
        return (
          <Icon
            type="entypo"
            name="code"
            color={gray50}
            size={sizes.h3}
            style={styles.iconContainer}
          />
        );
      case "article":
        return (
          <Icon
            type="material"
            name="text-snippet"
            color={gray50}
            size={sizes.h3}
            style={styles.iconContainer}
          />
        );
      case "download":
        return (
          <Icon
            type="material"
            name="cloud-download"
            color={gray50}
            size={sizes.h3}
            style={styles.iconContainer}
          />
        );
      case "certificate":
        return (
          <Icon
            type="materialC"
            name="certificate"
            color={gray50}
            size={sizes.h3}
            style={styles.iconContainer}
          />
        );
      case "achievements":
        return (
          <Icon
            type="ionicon"
            name="trophy"
            color={gray50}
            size={sizes.h3}
            style={styles.iconContainer}
          />
        );

      default:
        return <></>;
    }
  };

  const animatedController = useRef(new Animated.Value(0)).current;
  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  });

  const arrowAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0rad", `${Math.PI}rad`],
  });

  const toggleListItem = () => {
    if (open) {
      Animated.timing(animatedController, {
        duration: 400,
        toValue: 0,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 400,
        toValue: 1,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      }).start();
    }
    setOpen(current => !current);
  };

  return (
    <View style={{ marginBottom: spacing || 0 }}>
      <TouchableOpacity onPress={() => toggleListItem()} activeOpacity={1}>
        <View style={[styles.container, !open ? styles.containerBorder : ""]}>
          <Row spacing="flex-start">
            {icon && type && renderIcon()}
            <Text h5 secondary bold style={icon ? styles.icon : ""}>
              {title}
            </Text>
          </Row>
          <Animated.View style={{ transform: [{ rotateZ: arrowAngle }] }}>
            <Icon
              type="material"
              name="keyboard-arrow-down"
              size={sizes.h4}
              color={grayDark}
            />
          </Animated.View>
        </View>
      </TouchableOpacity>
      <Animated.View style={[styles.bodyBackground, { height: bodyHeight }]}>
        <View
          style={styles.bodyContainer}
          onLayout={event =>
            setBodySectionHeight(event.nativeEvent.layout.height)
          }>
          {children}
        </View>
      </Animated.View>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: gray200,
    borderTopLeftRadius: borderRadius.large,
    borderTopRightRadius: borderRadius.large,
    height: height / 15,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: padding.large,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerBorder: {
    borderRadius: borderRadius.large,
  },
  bodyBackground: {
    overflow: "hidden",
  },
  bodyContainer: {
    backgroundColor: gray600,
    borderBottomLeftRadius: borderRadius.large,
    borderBottomRightRadius: borderRadius.large,
    paddingHorizontal: padding.large,
    paddingVertical: padding.base,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  icon: {
    marginLeft: margin.base,
  },
  iconContainer: {
    backgroundColor: gray600,
    padding: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
