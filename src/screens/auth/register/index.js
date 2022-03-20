import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { useDispatch } from "react-redux";

import Text from "@components/Text";
import Button from "@components/Button";
import Input from "@components/Input";

import useFormInput from "@hooks/useFormInput";

import { actions } from "@modules/auth/reducer";

import { grayDark } from "@config/colors";
import { padding } from "@config/spacing";
import t from "@config/constants";

const Register = () => {
  const [submit, setSubmit] = useState(false);
  const email = useFormInput(t.auth.text_input_email);
  const password = useFormInput(t.auth.text_input_password);
  const confirmPassword = useFormInput(t.auth.text_input_confirm_password);

  const dispatch = useDispatch();

  const onSubmitHandler = () => {
    setSubmit(true);
    if (
      !email.error &&
      !password.error &&
      !confirmPassword.error &&
      password.value === confirmPassword.value
    ) {
      const data = {
        email: email.value.trim().toLowerCase(),
        password: password.value,
      };
      dispatch(actions.register({ data }));
    }
  };

  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Input submit={submit} {...email} keyboardType="email-address" />
      <Input submit={submit} {...password} secureTextEntry />
      <Input submit={submit} {...confirmPassword} secureTextEntry />
      <Button label="Submit" primary large onPress={onSubmitHandler} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grayDark,
    padding: padding.big,
  },
});
