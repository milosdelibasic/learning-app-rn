import { useFocusEffect } from "@react-navigation/core";
import { useCallback } from "react";
import { BackHandler, Platform } from "react-native";

export const useAndroidBackButton = (
  callback = () => true, // returning TRUE in callback forbids using android back button
  condition = true,
) => {
  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === "android" && condition) {
        const res = BackHandler.addEventListener("hardwareBackPress", callback);
        return () => res.remove();
      }
    }, []),
  );
};
