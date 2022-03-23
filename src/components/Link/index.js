import React, { useCallback } from "react";
import { Alert, Linking, StyleSheet, TouchableOpacity } from "react-native";

import Text from "@components/Text";

import { margin } from "@config/spacing";
import { handleError } from "@utils/error";
import t from "@config/constants";

const Link = ({ text, link, mail }) => {
  const handlePress = useCallback(async () => {
    try {
      if (!mail) {
        const supported = await Linking.canOpenURL(link);

        if (supported) {
          await Linking.openURL(link);
        } else {
          Alert.alert(`${t.link.url_error}${link}`);
        }
      } else {
        const supported = await Linking.canOpenURL(`mailto:${link}`);

        if (supported) {
          await Linking.openURL(`mailto:${link}`);
        } else {
          Alert.alert(`${t.link.email_error}${link}`);
        }
      }
    } catch (e) {
      handleError({ ...e, source: "Link" });
    }
  }, [link]);

  return (
    <TouchableOpacity
      onPress={() => handlePress(link)}
      style={styles.container}>
      <Text h5 bold primary>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: margin.small,
  },
});

export default Link;
