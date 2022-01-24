import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../../../components/text";
import { grayDark } from "../../../config/colors";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grayDark,
  },
});
