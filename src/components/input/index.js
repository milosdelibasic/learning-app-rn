import React from "react";
import { StyleSheet } from "react-native";

import { TextInput } from "react-native-paper";

import Text from "@components/Text";

import { gray100, gray200, gray50, grayDark, warning } from "@config/colors";
import { borderRadius, margin } from "@config/spacing";

const Input = ({ submit, style, ...rest }) => {
  return (
    <>
      <TextInput
        {...rest}
        mode="outlined"
        style={[styles.input, style]}
        //   error={rest.error}
        outlineColor={gray50}
        activeOutlineColor={gray200}
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
