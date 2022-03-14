import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "@components/Text";
import { margin, padding } from "@config/spacing";
import {
  gray200,
  gray300,
  gray400,
  gray50,
  gray500,
  gray600,
  grayDark,
  light,
} from "@config/colors";
import Icon from "@components/Icon";
import { sizes } from "@config/fonts";

const { width } = Dimensions.get("window");

const CourseTag = ({
  type = "all",
  name = "test",
  onPress,
  last,
  selected,
}) => {
  const renderIcon = () => {
    const iconProps = { size: sizes.h5, color: selected ? gray50 : grayDark };
    switch (type) {
      case "all":
        return <Icon name="infinity" type="entypo" {...iconProps} />;
      case "frontend":
        return <Icon name="laptop-mac" type="material" {...iconProps} />;
      case "backend":
        return <Icon name="server" type="fa5" {...iconProps} />;
      case "db":
        return <Icon name="database" type="fa5" {...iconProps} />;
      case "mobile":
        return <Icon name="mobile-alt" type="fa5" {...iconProps} />;
      case "game":
        return <Icon name="game-controller" type="entypo" {...iconProps} />;
      case "machine":
        return <Icon name="brain" type="fa5" {...iconProps} />;
      case "design":
        return <Icon name="design-services" type="material" {...iconProps} />;

      default:
        break;
    }
  };
  return (
    <TouchableOpacity
      style={[
        !selected ? styles.selectedContainer : styles.container,
        styles.shadow,
        { marginRight: !last ? margin.small : margin.small * 2 },
      ]}
      onPress={onPress}
      disabled={selected}>
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: !selected ? light : gray400 },
        ]}>
        {renderIcon()}
      </View>
      <Text
        h5
        secondary={selected}
        primary={!selected}
        semiBold
        style={styles.text}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CourseTag;

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    paddingVertical: padding.small / 4,
    paddingHorizontal: padding.base,
    backgroundColor: gray200,
    borderColor: gray400,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  selectedContainer: {
    borderRadius: 50,
    paddingVertical: padding.small / 4,
    paddingHorizontal: padding.base,
    backgroundColor: gray600,
    borderColor: gray200,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  shadow: {
    marginVertical: margin.small / 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  text: {
    marginLeft: margin.small / 2,
  },
  iconContainer: {
    // backgroundColor: light,
    width: sizes.h1,
    height: sizes.h1,
    borderRadius: sizes.h1 * 2,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
  },
});
