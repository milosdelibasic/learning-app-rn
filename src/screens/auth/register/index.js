import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import Text from "../../../components/text";
import { grayDark } from "../../../config/colors";
import t from "../../../config/constants";
import useFormInput from "../../../../hooks/useFormInput";
import { padding } from "../../../config/spacing";
import Button from "../../../components/button";
import { actions } from "../../../modules/auth/reducer";
import { useDispatch } from "react-redux";
import Input from "../../../components/input";

const Register = () => {
  const [submit, setSubmit] = useState(false);
  const email = useFormInput(t.auth.text_input_email);
  const password = useFormInput(t.auth.text_input_password);
  const confirmPassword = useFormInput(t.auth.text_input_confirm_password);

  const dispatch = useDispatch();

  const onSubmitHandler = () => {
    console.log("press");
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
      <Input submit={submit} {...password} />
      <Input submit={submit} {...confirmPassword} />
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
