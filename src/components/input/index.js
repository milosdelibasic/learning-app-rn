import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { TextInput } from "react-native-paper";

import Text from "@components/Text";

import { gray100, gray200, gray50, grayDark, warning } from "@config/colors";
import { borderRadius, margin } from "@config/spacing";

const Input = ({
  submit,
  style,
  secureTextEntry,
  autoCapitalize = "none",
  ...rest
}) => {
  const [showEye, setShowEye] = useState(secureTextEntry);
  return (
    <>
      <TextInput
        {...rest}
        mode="outlined"
        style={[styles.input, style]}
        outlineColor={gray50}
        activeOutlineColor={gray200}
        right={
          secureTextEntry ? (
            <TextInput.Icon
              name={showEye ? "eye" : "eye-off"}
              color={gray200}
              onPress={() => setShowEye(cur => !cur)}
            />
          ) : null
        }
        error={submit && rest?.error}
        theme={{
          roundness: borderRadius.large * 1.5,
          colors: {
            placeholder: gray200,
            primary: grayDark,
            text: gray100,
            error: warning,
          },
        }}
        secureTextEntry={showEye}
        autoCapitalize={autoCapitalize}
        //   error={rest.error}
      />
      {submit && rest?.error && (
        <Text h6 warning style={styles.warning}>
          * {rest?.error}
        </Text>
      )}
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: grayDark,
    marginVertical: margin.small / 1.5,
  },
  warning: {
    marginTop: 2,
    marginBottom: 8,
  },
});
