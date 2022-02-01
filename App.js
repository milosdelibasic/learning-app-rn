import { LogBox, View } from "react-native";
import React, { useEffect } from "react";
import Config from "react-native-config";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./src/navigation/RootNavigation";
import { Provider } from "react-redux";
import RootSwitch from "./src/navigation/RootSwitch";
import configureStore from "./config-store";
import Toast from "react-native-toast-message";
import { toastConfig } from "./src/config/toast";
import { injectStore } from "./src/modules/axiosConfig";
import { gray900 } from "./src/config/colors";
import { enableScreens } from "react-native-screens";
const { store } = configureStore();

enableScreens(true);

injectStore(store); //for using store outside functional components

const App = () => {
  useEffect(() => {
    __DEV__ && console.log("Environment running: ", Config.ENVIRONMENT);
  }, []);

  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    "Require cycle",
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: gray900 }}>
      <NavigationContainer ref={navigationRef}>
        <Provider store={store}>
          <RootSwitch />
          <Toast config={toastConfig} />
        </Provider>
      </NavigationContainer>
    </View>
  );
};

export default App;
