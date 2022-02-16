import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "@components/Text";
import Button from "@components/Button";

import { gray50, grayDark } from "@config/colors";
import { authStack } from "@config/navigator";

const AuthInit = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>AuthInit</Text>
      <Button
        primary
        medium
        label="Register"
        onPress={() => navigation.navigate(authStack.register)}
      />
      <Button
        secondary
        medium
        label="Login"
        textStyle={{ color: gray50 }}
        onPress={() => navigation.navigate(authStack.login)}
      />
    </View>
  );
};

export default AuthInit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grayDark,
  },
});
