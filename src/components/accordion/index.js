import {
  Animated,
  Dimensions,
  Easing,
  LogBox,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Text from "../text";
import {
  gray200,
  gray50,
  gray500,
  gray600,
  grayDark,
} from "../../config/colors";
import { borderRadius, margin, padding } from "../../config/spacing";
import Row from "../row";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { sizes } from "../../config/fonts";

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
            name="list"
            color={gray50}
            size={sizes.h3}
            style={styles.iconContainer}
          />
        );
      case "video":
        return (
          <EntypoIcon
            name="folder-video"
            color={gray50}
            size={sizes.h3}
            style={styles.iconContainer}
          />
        );
      case "exercise":
        return (
          <EntypoIcon
            name="code"
            color={gray50}
            size={sizes.h3}
            style={styles.iconContainer}
          />
        );
      case "article":
        return (
          <MaterialIcons
            name="text-snippet"
            color={gray50}
            size={sizes.h3}
            style={styles.iconContainer}
          />
        );
      case "download":
        return (
          <MaterialIcons
            name="cloud-download"
            color={gray50}
            size={sizes.h3}
            style={styles.iconContainer}
          />
        );
      case "certificate":
        return (
          <MaterialCIcons
            name="certificate"
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
            <MaterialIcons
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
