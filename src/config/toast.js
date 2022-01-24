import { BaseToast, ErrorToast } from "react-native-toast-message";
import React from "react";
import { gray100, gray50, gray900, success, warning } from "./colors";
import fonts, { sizes } from "./fonts";

export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: props => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: success }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: sizes.h5,
        fontFamily: "OpenSans-Regular",
        color: gray900,
      }}
      text2Style={{
        fontSize: sizes.h6,
        fontFamily: "OpenSans-Regular",
        color: gray900,
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: props => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: warning, backgroundColor: gray50 }}
      text1Style={{
        fontSize: sizes.h5,
        fontFamily: "OpenSans-Regular",
        color: gray900,
      }}
      text2Style={{
        fontSize: sizes.h6,
        fontFamily: "OpenSans-Regular",
        color: gray900,
      }}
    />
  ),
};
