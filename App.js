import { View } from "react-native";
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

const { store } = configureStore();

injectStore(store); //for using store outside functional components

const App = () => {
  useEffect(() => {
    __DEV__ && console.log("Environment running: ", Config.ENVIRONMENT);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          <RootSwitch />
          <Toast config={toastConfig} />
        </Provider>
      </View>
    </NavigationContainer>
  );
};

export default App;
