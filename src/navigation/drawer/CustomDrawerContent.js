import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import FastImage from "react-native-fast-image";
import { useNavigation } from "@react-navigation/native";

import Text from "@components/Text";
import Button from "@components/Button";
import Row from "@components/Row";
import Icon from "@components/Icon";
import Divider from "@components/Divider";
import DrawerListItem from "./DrawerListItem";

import { gray600, gray900, grayDark } from "@config/colors";
import { borderRadius, margin, padding } from "@config/spacing";
import { sizes } from "@config/fonts";
import { shadow3 } from "@config/shadows";
import { mainStack } from "@config/navigator";

import PhantoxLogo from "@images/logos/PhantoX.svg";
import defaultAvatar from "@images/defaultAvatar.png";

const { width } = Dimensions.get("window");

const CustomDrawerContent = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        <PhantoxLogo
          width={width / 3}
          height={width / 6}
          style={{ alignSelf: "center", marginBottom: margin.base }}
        />
        <View style={styles.avatarContainer}>
          <FastImage
            source={defaultAvatar}
            style={styles.avatar}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text center semiBold h6 style={{ top: -10 }}>
            Milos Delibasic
          </Text>
        </View>
        <Button
          label="Become Prime Member"
          primary
          small
          style={styles.primeButton}
        />
        <Divider spacing={margin.base} backgroundColor={gray900} />
        <Row>
          <Row spacing="flex-start" style={styles.card}>
            <Icon type="fa5" name="coins" style={styles.icon} size={sizes.h4} />
            <View>
              <Text center semiBold h5>
                Coins
              </Text>
              <Text center h6>
                250
              </Text>
            </View>
          </Row>
          <Row spacing="flex-start" style={styles.card}>
            <Icon
              type="ionicon"
              name="ribbon"
              style={styles.icon}
              size={sizes.h4}
            />
            <View>
              <Text center semiBold h5>
                Level
              </Text>
              <Text center h6>
                5
              </Text>
            </View>
          </Row>
        </Row>
        <DrawerListItem title="My Profile" icon="profile" />
        <DrawerListItem title="Saved Courses" icon="savedCourses" />
        <DrawerListItem title="Notes" icon="notes" />
        <DrawerListItem title="History" icon="history" />
      </View>
      <View>
        <Divider spacing={margin.base} backgroundColor={gray900} />
        <DrawerListItem
          title="Settings"
          icon="settings"
          onPress={() => navigation.navigate(mainStack.settings)}
        />
        <DrawerListItem title="Logout" icon="logout" />
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: gray900,
    flex: 1,
    paddingHorizontal: padding.large,
    justifyContent: "space-between",
  },
  avatarContainer: {
    width: width / 2 - padding.large * 2,
    height: width / 2 - padding.large * 2,
    backgroundColor: grayDark,
    borderRadius: width / 2,
    marginBottom: margin.small,
    alignSelf: "center",
    ...shadow3,
  },
  avatar: {
    width: width / 3.2,
    height: width / 3.2,
    top: -20,
    alignSelf: "center",
  },
  card: {
    paddingVertical: padding.small / 1.7,
    justifyContent: "center",
    backgroundColor: gray600,
    width: "45%",
    borderRadius: borderRadius.large,
    marginBottom: margin.small,
  },
  icon: {
    marginRight: margin.small,
  },
  primeButton: {
    width: "100%",
    marginTop: margin.small,
  },
});
