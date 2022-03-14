import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import PropTypes from "prop-types";

import Icon from "@components/Icon";
import Row from "@components/Row";
import Text from "@components/Text";

import { gray100 } from "@config/colors";
import { sizes } from "@config/fonts";
import { margin } from "@config/spacing";

const DrawerListItem = ({ icon, title = "Test", onPress }) => {
  const renderIcon = () => {
    const iconProps = {
      style: styles.icon,
      color: gray100,
      size: sizes.h3,
    };

    switch (icon) {
      case "profile":
        return <Icon type="fa" name="user-circle" {...iconProps} />;
      case "savedCourses":
        return <Icon type="entypo" name="bookmarks" {...iconProps} />;
      case "notes":
        return <Icon type="materialC" name="notebook" {...iconProps} />;
      case "history":
        return <Icon type="materialC" name="history" {...iconProps} />;
      case "settings":
        return <Icon type="material" name="settings" {...iconProps} />;
      case "logout":
        return <Icon type="material" name="logout" {...iconProps} />;
      default:
        return <Icon type="fa" name="user-circle" {...iconProps} />;
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Row spacing="flex-start">
        {renderIcon()}
        <Text semiBold h5 primary>
          {title}
        </Text>
      </Row>
    </TouchableOpacity>
  );
};

DrawerListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
  onPress: PropTypes.func,
};

export default DrawerListItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: margin.small,
  },
  icon: {
    marginRight: margin.small * 1.2,
  },
});
