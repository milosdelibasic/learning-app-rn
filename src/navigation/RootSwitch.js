import React, { useEffect } from "react";

import { rootSwitch } from "../config/navigator";
import MainStack from "./MainStack";
import { noHeader } from "../config/navigationOptions";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import { useDispatch, useSelector } from "react-redux";
import { actions, authSelector } from "../modules/auth/reducer";

const Stack = createStackNavigator();

const RootSwitch = ({}) => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(authSelector);
  console.log(
    "🚀 ~ file: RootSwitch.js ~ line 17 ~ RootSwitch ~ isLogin",
    isLogin,
  );

  useEffect(() => {
    dispatch(actions.isLogin());
  }, []);

  return (
    <Stack.Navigator screenOptions={noHeader}>
      {!isLogin ? (
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
