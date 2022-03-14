import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { useDispatch } from "react-redux";

import Row from "@components/Row";
import Icon from "@components/Icon";
import Text from "@components/Text";

import { actions } from "@modules/bottomSheet/reducer";

import { sizes } from "@config/fonts";
import { gray50, gray500 } from "@config/colors";
import { margin } from "@config/spacing";

const items = [
  {
    title: "Settings",
    icon: { type: "material", name: "settings" },
  },
  {
    title: "Share",
    icon: { type: "material", name: "share" },
  },
  {
    title: "Invite",
    icon: { type: "ionicon", name: "person-add" },
  },
  {
    title: "Rate",
    icon: { type: "ionicon", name: "star" },
  },
  {
    title: "FAQ",
    icon: { type: "materialC", name: "chat-question" },
  },
  {
    title: "Terms of Service & Privacy Policy",
    icon: { type: "ionicon", name: "document-text" },
  },
  {
    title: "Contact Us",
    icon: { type: "material", name: "email" },
  },
];

const DotsMenu = ({ handleSettingsNavigation }) => {
  const dispatch = useDispatch();

  const ListItem = ({ index, icon, title, last }) => {
    const handlePress = () => {
      dispatch(actions.close());
      handleSettingsNavigation(index);
    };

    return (
      <TouchableOpacity
        onPress={handlePress}
        style={[styles.item, last && styles.lastItem]}>
        <Row spacing="flex-start">
          <Icon
            type={icon.type}
            name={icon.name}
            style={styles.icon}
            color={gray50}
            size={sizes.h3}
          />
          <Text primary semiBold h5>
            {title}
          </Text>
        </Row>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {items?.map((item, index) => (
        <ListItem
          key={index}
          index={index + 1}
          icon={item.icon}
          title={item.title}
          onPress={() => handleSettingsNavigation(1)}
          last={items?.length === index + 1}
        />
      ))}
    </View>
  );
};

export default DotsMenu;

const styles = StyleSheet.create({
  icon: {
    marginRight: margin.base,
  },
  item: {
    paddingVertical: margin.base,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: gray500,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
});
