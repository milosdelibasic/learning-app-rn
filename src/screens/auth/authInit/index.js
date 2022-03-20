import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Text from "@components/Text";
import Button from "@components/Button";

import { gray50, grayDark } from "@config/colors";
import { authStack } from "@config/navigator";
import RNBootSplash from "react-native-bootsplash";
import { DrawerActions } from "@react-navigation/native";

const AuthInit = ({ navigation }) => {
  console.log("authInit");

  useEffect(() => navigation.dispatch(DrawerActions.closeDrawer()), []);

  return (
    <View style={styles.container}>
      <Text>AuthInitt</Text>
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
    padding: 50,
  },
});
