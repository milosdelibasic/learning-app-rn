import React from "react";
import { AppRegistry } from "react-native";

import "react-native-gesture-handler";
import Bugsnag from "@bugsnag/react-native";
import { Provider as PaperProvider } from "react-native-paper";

import App from "./App";
import { name as appName } from "./app.json";

!__DEV__ && Bugsnag.start();

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
