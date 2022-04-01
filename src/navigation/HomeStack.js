import React from "react";
import {
  ActionSheetIOS,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import Home from "@screens/Home";
import Profile from "@screens/Profile";
import Learn from "@screens/Learn";

import Icon from "@components/Icon";
import DotsMenu from "@components/bottomSheet/dotsMenu";

import { actions } from "@modules/bottomSheet/reducer";

import { homeStack, mainStack } from "@config/navigator";
import { mainOptions, tab } from "@config/navigationOptions";
import { hitBox20 } from "@config/helpers";
import { gray200, gray50 } from "@config/colors";

import Dots from "@images/icons/dots.svg";
import MenuIcon from "@images/icons/menu.svg";
import PhantoxLogo from "@images/logos/PhantoX.svg";

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSettingsNavigation = i => {
    switch (i) {
      case 1:
        navigation.navigate(mainStack.settings);
        break;
      case 2:
        navigation.navigate(mainStack.share);
        break;
      case 3:
        navigation.navigate(mainStack.invite);
        break;
      case 4:
        navigation.navigate(mainStack.rate);
        break;
      case 5:
        navigation.navigate(mainStack.FAQ);
        break;
      case 6:
        navigation.navigate(mainStack.ToS);
        break;
      case 7:
        navigation.navigate(mainStack.contact);
        break;
      default:
        break;
    }
  };

  const onDotsPressHandler = () => {
    if (Platform.OS === "android") {
      dispatch(
        actions.open(
          <DotsMenu handleSettingsNavigation={handleSettingsNavigation} />,
        ),
      );
    }
    if (Platform.OS === "ios") {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: [
            "Cancel",
            "Settings",
            "Share",
            "Invite",
            "Rate",
            "FAQ",
            "Terms of Service & Privacy Policy",
            "Contact Us",
          ],
          cancelButtonIndex: 0,
          tintColor: gray200,
          userInterfaceStyle: "dark",
        },
        buttonIndex => {
          handleSettingsNavigation(buttonIndex);
        },
      );
    }
  };

  return (
    <Tab.Navigator
      initialRouteName={homeStack.home}
      screenOptions={{
        ...tab,
        ...mainOptions,
        tabBarShowLabel: false,
        headerLeft: () => (
          <TouchableOpacity
            hitSlop={hitBox20}
            onPress={() => {
              navigation.openDrawer();
            }}>
            <MenuIcon color={gray50} height={24} width={24} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity hitSlop={hitBox20} onPress={onDotsPressHandler}>
            <Dots height={26} width={5} color={gray50} />
          </TouchableOpacity>
        ),
        headerTitle: () => <PhantoxLogo width={100} height={28} />,
      }}>
      <Tab.Screen
        name={homeStack.home}
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              type="ionicon"
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />

      <Tab.Screen
        name={homeStack.coding}
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              type="ionicon"
              name={focused ? "code-slash" : "code-slash-outline"}
              size={size}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name={homeStack.learn}
        component={Learn}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              type="ionicon"
              name={focused ? "book" : "book-outline"}
              size={size}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name={homeStack.community}
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              type="ionicon"
              name={focused ? "md-chatbubbles" : "md-chatbubbles-outline"}
              size={size}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name={homeStack.profile}
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              type="fa"
              name={focused ? "user" : "user-o"}
              size={size}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  icon: {
    // marginTop: 10,al
    // marginBottom: 5,
  },
});
