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
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Text from "@components/Text";
import BottomSheetComponent from "@components/bottomSheet";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(true);
  const { store } = configureStore();
  console.log(store);

  enableScreens(true);

  injectStore(store); //for using store outside functional components
  useEffect(() => {
    logger("Environment running: ", Config.ENVIRONMENT);
    logger("All constants: ", Config);
  });

  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    "Require cycle",
  ]);

  console.log("store", store.getState().bottomSheet.isOpen);

  return (
    <View style={{ flex: 1, backgroundColor: gray900 }}>
      <NavigationContainer ref={navigationRef}>
        <SafeAreaProvider>
          <Provider store={store}>
            <BottomSheetModalProvider>
              <RootSwitch />
              <Toast config={toastConfig} />
              <Modal />
              <BottomSheetComponent />
            </BottomSheetModalProvider>
          </Provider>
        </SafeAreaProvider>
      </NavigationContainer>
    </View>
  );
};

export default App;
