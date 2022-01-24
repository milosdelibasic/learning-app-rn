import { View, StyleSheet } from "react-native";
import React from "react";
import { gray50, grayDark } from "../../../config/colors";
import Text from "../../../components/text";
import Button from "../../../components/button";
import { authStack } from "../../../config/navigator";

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
