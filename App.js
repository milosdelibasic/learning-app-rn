import React, { useEffect, useRef, useState } from "react";
import { LogBox, View } from "react-native";

import Config from "react-native-config";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Toast from "react-native-toast-message";
import { enableScreens } from "react-native-screens";

import Modal from "@components/Modal";

import { navigationRef } from "@navigation/RootNavigation";
import RootSwitch from "@navigation/RootSwitch";

import { injectStore } from "@modules/axiosConfig";

import configureStore from "./config-store";
import { toastConfig } from "@config/toast";
import { gray900 } from "@config/colors";
import { logger } from "@config/helpers";
import BottomSheetComponent from "@components/bottomSheet";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  const { store } = configureStore();

  enableScreens(true);

  injectStore(store); //for using store outside functional components

  useEffect(() => {
    console.log("Environment running:", Config.ENVIRONMENT);
    console.log("All constants:", Config.getConstants());
  }, []);

  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    "Require cycle",
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: gray900 }}>
      <NavigationContainer ref={navigationRef}>
        <SafeAreaProvider>
          <Provider store={store}>
            <RootSwitch />
            <Toast config={toastConfig} />
            <Modal />
            {/* <BottomSheetComponent /> */}
          </Provider>
        </SafeAreaProvider>
      </NavigationContainer>
    </View>
  );
};

export default App;
