import Bugsnag from "@bugsnag/react-native";
import React from "react";
import "react-native-gesture-handler";

!__DEV__ && Bugsnag.start();

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { Provider as PaperProvider } from "react-native-paper";

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
