import Bugsnag from "@bugsnag/react-native";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function handleError(e) {
  !e?.hide &&
    Toast.show({
      type: "error",
      text1: e?.message,
      visibilityTime: e?.visibility || 5000,
    });

  const data = await AsyncStorage.getItem("data");
  const parsed = JSON.parse(data);
  const error = `[${e?.source || "Error"}]: ${e?.code ? `(${e?.code}):` : ""} ${
    e?.message
  }. ${parsed?._id ? `userId: ${parsed?._id}` : ""} ${
    e?.additional ? "Additional info: " + e?.additional : ""
  }`;
  !__DEV__ && !e?.dontUpload && Bugsnag.notify(new Error(error));
  __DEV__ && console.error(error);
}

export async function handleSuccess(e) {
  Toast.show({
    type: "success",
    text1: e?.message,
    visibilityTime: e?.visibility || 5000,
  });
}
