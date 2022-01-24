import { View, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Text from "../../components/text";
import { grayDark } from "../../config/colors";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text white h3 bold>
        Home
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grayDark,
  },
});

export default Home;
