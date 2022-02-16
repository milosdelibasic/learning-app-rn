import React from "react";
import { View, Text } from "react-native";

import { grayDark } from "@config/colors";

const Profile = () => {
  return (
    <View style={{ backgroundColor: grayDark, flex: 1 }}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
