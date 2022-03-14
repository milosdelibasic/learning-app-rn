import React, { useEffect } from "react";
import { Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainStack from "./MainStack";
import AuthStack from "./AuthStack";
import CustomDrawerContent from "./drawer/CustomDrawerContent";

import { actions, authSelector } from "@modules/auth/reducer";

import { rootSwitch } from "@config/navigator";
import { noHeader } from "@config/navigationOptions";
import { logger } from "@config/helpers";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const { width } = Dimensions.get("window");

const RootSwitch = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(authSelector);
  logger("🚀 ~ file: RootSwitch.js ~ line 17 ~ RootSwitch ~ isLogin", isLogin);

  useEffect(() => {
    dispatch(actions.isLogin());
  }, []);

  return (
    <Drawer.Navigator
      screenOptions={{
        ...noHeader,
        swipeEdgeWidth: isLogin ? width / 3 : 0,
        drawerStyle: { width: width / 1.5 },
        drawerType: "front",
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {isLogin ? (
        <Stack.Screen
          screenOptions={{ headerShown: false, animationEnabled: false }}
          name={rootSwitch.main}
          component={MainStack}
        />
      ) : (
        <Stack.Screen
          screenOptions={{ headerShown: false, animationEnabled: false }}
          name={rootSwitch.auth}
          component={AuthStack}
        />
      )}
    </Drawer.Navigator>
  );
};

export default RootSwitch;
