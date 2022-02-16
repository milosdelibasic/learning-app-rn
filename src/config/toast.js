import React from "react";

import { BaseToast, ErrorToast } from "react-native-toast-message";

import { gray50, gray900, success, warning } from "@config/colors";
import { sizes } from "@config/fonts";

export const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: success, backgroundColor: gray50 }}
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
