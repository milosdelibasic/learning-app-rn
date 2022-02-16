import React, { useEffect } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";

import MainStack from "./MainStack";
import AuthStack from "./AuthStack";

import { rootSwitch } from "@config/navigator";
import { noHeader } from "@config/navigationOptions";
import { actions, authSelector } from "@modules/auth/reducer";
import { logger } from "@config/helpers";

const Stack = createStackNavigator();

const RootSwitch = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(authSelector);
  logger("🚀 ~ file: RootSwitch.js ~ line 17 ~ RootSwitch ~ isLogin", isLogin);

  useEffect(() => {
    dispatch(actions.isLogin());
  }, []);

  return (
    <Stack.Navigator screenOptions={noHeader}>
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
    </Stack.Navigator>
  );
};

export default RootSwitch;
