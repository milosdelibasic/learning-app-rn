import React from "react";

import PropTypes from "prop-types";

import AntDesignIcon from "react-native-vector-icons/AntDesign";
import EntypoIcon from "react-native-vector-icons/Entypo";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import FAIcon from "react-native-vector-icons/FontAwesome";
import FA5Icon from "react-native-vector-icons/FontAwesome5";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import FoundationIcon from "react-native-vector-icons/Foundation";
import IoniconIcon from "react-native-vector-icons/Ionicons";
import MaterialCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import OctIcon from "react-native-vector-icons/Octicons";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import ZocialIcon from "react-native-vector-icons/Zocial";

import { grayDark } from "@config/colors";

const Icon = ({
  type = "fa",
  name,
  size = 24,
  color = grayDark,
  style,
  ...rest
}) => {
  const renderIcon = () => {
    switch (type) {
      case "ant":
        return (
          <AntDesignIcon
            name={name}
            size={size}
            color={color}
            style={style}
            {...rest}
          />
        );
      case "entypo":
        return (
          <EntypoIcon
            name={name}
            size={size}
            color={color}
            style={style}
            {...rest}
          />
        );
      case "evil":
        return (
          <EvilIcon
            name={name}
            size={size}
            color={color}
            style={style}
            {...rest}
          />
        );
      case "feather":
        return (
          <FeatherIcon
            name={name}
            size={size}
            color={color}
            style={style}
            {...rest}
          />
        );
      case "fa":
        return (
          <FAIcon
            name={name}
            size={size}
            color={color}
            style={style}
            {...rest}
          />
        );
      case "fa5":
        return (
          <FA5Icon
            name={name}
            size={size}
            color={color}
            style={style}
            {...rest}
          />
        );
      case "fontisto":
        return (
          <FontistoIcon
            name={name}
            size={size}
            color={color}
            style={style}
            {...rest}
          />
        );
      case "foundation":
        return (
          <FoundationIcon
            name={name}
            size={size}
            color={color}
            style={style}
            {...rest}
          />
        );
      case "ionicon":
        return (
          <IoniconIcon
            name={name}
            size={size}
            color={color}
            style={style}
            {...rest}
          />
        );
      case "materialC":
        return (
          <MaterialCIcon
            name={name}
            size={size}
            color={color}
            style={style}
            {...rest}
          />
        );
      case "material":
        return (
          <MaterialIcon
            name={name}
            size={size}
            color={color}
            style={style}
            {...rest}
          />
        );
      case "octicon":
        return (
          <OctIcon
            name={name}
            size={size}
            color={color}
            style={style}
            {...rest}
          />
        );
      case "simple":
        return (
          <SimpleIcon
            name={name}
            size={size}
            color={color}
            style={style}
            {...rest}
          />
        );
      case "zocial":
        return (
          <ZocialIcon
            name={name}
            size={size}
            color={color}
            style={style}
            {...rest}
          />
        );
      default:
        return (
          <FAIcon
            name={name}
            size={size}
            color={color}
            style={style}
            {...rest}
          />
        );
    }
  };
  return <>{renderIcon()}</>;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    "ant",
    "entypo",
    "zocial",
    "simple",
    "octicon",
    "material",
    "materialC",
    "ionicon",
    "foundation",
    "fa",
    "fa5",
    "fontisto",
    "feather",
    "evil",
  ]).isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.object,
};

export default Icon;
